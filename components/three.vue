<template>
  <div>
    <div class="mt-8 text-lg">Representación volumétrica</div>
    <canvas id="webgl" class="w-full h-full"> </canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples//jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  props: { model: { type: String, required: true } },

  mounted: function () {
    console.log("model", this.model);

    const width = 500;
    const height = 500;

    const a = 30;
    const camera = new THREE.OrthographicCamera(
      width / -a,
      width / a,
      height / a,
      height / -a,
      1,
      1000
    );
    camera.position.set(1.5, 0.8, 50);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x95bbbf);
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    const canvas = document.querySelector("#webgl");

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(devicePixelRatio);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;
    controls.autoRotateSpeed = -10;
    controls.screenSpacePanning = true;
    controls.addEventListener("change", () => renderer.render(scene, camera));

    
    new ResizeObserver(() => {
      console.log("test", canvas.parentElement.offsetWidth);
      renderer.setSize(canvas.parentElement.offsetWidth, height);
    }).observe(canvas.parentElement);

    const loader = new GLTFLoader();
    const url = this.model;
    const pos = new THREE.Vector3();
    const s = 1;
    loader.load(
      url,
      (gltf) => {
        const object = gltf.scene;
        object.scale.set(s, s, s);
        //const parent = new THREE.Object3D();
        //parent.add(object);
        object.position.copy(pos);
        scene.add(object);
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