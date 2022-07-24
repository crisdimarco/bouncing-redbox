import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import { AmbientLight } from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//light
const light = new THREE.AmbientLight(0x404040);
scene.add(AmbientLight);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// animations
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

// Time for delta time e rendere omogeneo la velocita di animazione
// tra diverse prestazioni di macchine

// let time = Date.now();
// let clock = new THREE.Clock();

const tick = () => {
  //   //calcolo del delta time
  //   //   const currentTime = Date.now();
  //   //   const deltaTime = currentTime - time;
  //   //   time = currentTime;
  //   const elapsedTime = clock.getElapsedTime();
  //   //update position object
  //   //mesh.position.x += 0.01;
  //   //moltiplicazione della rotazione per il deltatime
  //   mesh.position.y = Math.sin(elapsedTime);
  //   mesh.position.x = Math.cos(elapsedTime);
  renderer.render(scene, camera);
  //   //

  //   // render
  //
  window.requestAnimationFrame(tick);
};

tick();
