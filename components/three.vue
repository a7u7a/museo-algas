<template>
  <div>
    <div class="block" :class="{ hidden: hideLoader }">
      <div class="absolute flex justify-center w-3/5 mt-60">
        <div class="font-sans bg-gray-300 rounded pl-2 pr-2">
          {{ loading }}
        </div>
      </div>
    </div>
    <canvas id="webgl" class="mt-4 w-full h-full"> </canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples//jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  props: { model: { type: Object, required: true } },
  data() {
    return {
      object: null,
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      loading: "Cargando modelo..",
      hideLoader: false,
    };
  },
  methods: {
    onTransitionEnd(event) {
      event.target.remove();
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.object.rotation.y += 0.005;
      this.renderer.render(this.scene, this.camera);
    },
    fitCameraToObject() {
      // stolen from https://discourse.threejs.org/t/camera-zoom-to-fit-object/936
      const boundingBox = new THREE.Box3();
      boundingBox.setFromObject(this.object);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z); // get the max side of the bounding box (fits to width OR height as needed )
      const fov = this.camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));
      const offset = 2;
      cameraZ *= offset; // zoom out a little
      this.camera.position.z = cameraZ;
      const minZ = boundingBox.min.z;
      const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;
      this.camera.lookAt(center);
      this.controls.target = center;
      this.controls.maxDistance = cameraToFarEdge * 2;
      this.controls.minDistance = 1;
      this.controls.saveState();
    },
  },
  mounted: function () {
    const height = 500;
    const canvas = document.querySelector("#webgl");
    const frustumSize = 2;
    var aspect = canvas.parentElement.offsetWidth / height;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xe0e7f1);

    // const size = 1;
    // const divisions = 10;
    // const gridHelper = new THREE.GridHelper(size, divisions);
    // this.scene.add(gridHelper);
    var aspect = canvas.parentElement.offsetWidth / height;
    this.camera = new THREE.PerspectiveCamera(30, aspect, 0.1, 20);
    this.camera.position.set(4, 3, 0);
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setSize(canvas.parentElement.offsetWidth, height);
    this.renderer.setPixelRatio(devicePixelRatio);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = false;
    this.controls.autoRotateSpeed = -10;
    this.controls.screenSpacePanning = true;
    this.controls.addEventListener("change", () => {
      this.renderer.render(this.scene, this.camera);
      this.paused = true;
    });

    new ResizeObserver(() => {
      this.camera.aspect = canvas.parentElement.offsetWidth / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(canvas.parentElement.offsetWidth, height);
      this.renderer.render(this.scene, this.camera);
    }).observe(canvas.parentElement);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight2.position.set(-1, 1, -1);
    this.scene.add(directionalLight2);

    const light = new THREE.AmbientLight(0x404040, 2); // soft white light
    this.scene.add(light);

    // loader

    const loadingManager = new THREE.LoadingManager(() => {
      const loadingScreen = document.getElementById("loading-screen");
      loadingScreen.classList.add("fade-out");

      // optional: remove loader from DOM via event listener
      loadingScreen.addEventListener("transitionend", this.onTransitionEnd);
    });

    const loader = new GLTFLoader(loadingManager);
    const url = this.model.path;
    const pos = new THREE.Vector3(
      this.model.xOffset,
      this.model.yOffset,
      this.model.zOffset
    );
    const s = this.model.scale;
    loader.load(
      url,
      (gltf) => {
        this.object = gltf.scene;
        this.object.scale.set(s, s, s);
        this.scene.add(this.object);
        this.fitCameraToObject();
        this.animate();
        this.loading = "Listo";
        this.hideLoader = true;
      },
      (xhr) => {
        this.loading = "Cargando:" + (xhr.loaded / xhr.total) * 100 + "%";
        if (xhr.total >= 99) {
          this.loading = "Preparando modelo";
        }
      },
      (error) => {
        this.loading = "Error al cargar modelo";
      }
    );
  },
};
</script>

<style scoped>
</style>