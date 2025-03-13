// import * as THREE from 'three';
// Create a scene
const scene = new THREE.Scene();

//red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const size = {
     width: 800,
     height: 600
}
//create a camera
const camera =new THREE.PerspectiveCamera(75, size.width  / size.height);
scene.add(camera);
camera.position.z = 3;

//create a renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
     canvas
})
renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
