<template>
  <div class="font-serif">
    <!-- <div class="mt-8 text-lg">Representación volumétrica</div> -->
    <div>
      <div
        class="absolute flex flex-row w-1/4 h-1/4 items-center justify-center"
      >
        <!-- <p class="text-xl">hello</p> -->
      </div>
      <canvas id="webgl" class="mt-4 w-full h-full"> </canvas>
    </div>
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
      controls: null
    };
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      this.object.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    },
    fitCameraToObject() {
      const boundingBox = new THREE.Box3();

      // get bounding box of object - this will be used to setup controls and camera
      boundingBox.setFromObject(this.object);

      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      // get the max side of the bounding box (fits to width OR height as needed )
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = this.camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));

      // cameraZ *= offset; // zoom out a little so that objects don't fill the screen

      //camera.position.z = cameraZ;

      const minZ = boundingBox.min.z;
      const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;
      // camera.far = cameraToFarEdge * 3;

      if (this.controls) {
        // set camera to rotate around center of loaded object
        this.controls.target = center;

        // prevent camera from zooming out far enough to create far plane cutoff
        this.controls.maxDistance = cameraToFarEdge * 6;

        // this.controls.saveState();
      } else {
        this.camera.lookAt(center);
      }
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
    this.camera = new THREE.PerspectiveCamera(35, aspect, 1, 200);
    this.camera.position.set(10, 1, 0);
    this.camera.lookAt(0, 0, 0);
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
    });

    new ResizeObserver(() => {
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

    const loader = new GLTFLoader();
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
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log("Couldnt load model");
      }
    );
  },
};
</script>

<style lang="scss" scoped>
</style>