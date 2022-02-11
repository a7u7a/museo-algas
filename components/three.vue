<template>
  <div class="font-serif">
    <!-- <div class="mt-8 text-lg">Representación volumétrica</div> -->
    <div>
      <div class="absolute flex flex-row w-1/4 h-1/4 items-center justify-center">
        
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

  mounted: function () {
    const height = 500;
    const canvas = document.querySelector("#webgl");
    const frustumSize = 2;
    var aspect = canvas.parentElement.offsetWidth / height;

    const a = 30;
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      (frustumSize * aspect) / -2,
      0.1,
      100
    );
    camera.position.set(1.5, 0.8, 5);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xE0E7F1)
    

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(canvas.parentElement.offsetWidth, height);
    renderer.setPixelRatio(devicePixelRatio);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;
    controls.autoRotateSpeed = -10;
    controls.screenSpacePanning = true;
    controls.addEventListener("change", () => renderer.render(scene, camera));

    new ResizeObserver(() => {
      var aspect = canvas.parentElement.offsetWidth / height;
      camera.left = (frustumSize * aspect) / -2;
      camera.right = (frustumSize * aspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = -frustumSize / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.parentElement.offsetWidth, height);
      renderer.render(scene, camera);
    }).observe(canvas.parentElement);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight2.position.set(-1, 1, -1);
    scene.add(directionalLight2);

    const light = new THREE.AmbientLight(0x404040, 2); // soft white light
    scene.add(light);

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
        const object = gltf.scene;
        object.scale.set(s, s, s);
        //const parent = new THREE.Object3D();
        //parent.add(object);
        object.position.copy(pos);
        scene.add(object);
        renderer.render(scene, camera);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log("Couldnt load model");
      }
    );
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>