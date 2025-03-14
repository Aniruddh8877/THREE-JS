import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
group.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2
group.add(cube3)
group.position.y=1.4
group.scale.y=1.2
group.rotation.y=1



// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// // mesh.position.x=0.7
// // mesh.position.y=-0.6
// // mesh.position.z=-1
// mesh.position.set(.7, -.6, 1)
// scene.add(mesh)

// // mesh.scale.x=2;
// // mesh.scale.y=.5
// // mesh.scale.z=1.5
// mesh.scale.set(.5,.5,.5)

// //Rotation 
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y=Math.PI*0.2
// mesh.rotation.x=Math.PI*0.2



//Axes helper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

// console.log(mesh.position.normalize())
// console.log(mesh.position.length())







/**
 * Sizes
*/
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)
// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)