import * as THREE from 'three'
import gsap from 'gsap'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//Time
// let time=Date.now()


//Clock
const clock=new THREE.Clock()


//Gsap
gsap.to(mesh.position,{duration:1,delay:1,x:2})
gsap.to(mesh.rotation,{duration:1,delay:1,y:1.5})
gsap.to(mesh.position,{duration:1,delay:2,x:0})
gsap.to(mesh.rotation,{duration:1,delay:2,y:0})



//Animation
const tick = () =>{

    const elapsedTime=clock.getElapsedTime()
    // console.log(elapsedTime);
    


    // const currentTime=Date.now()
    // const deltaTime=currentTime-time
    // time=currentTime
    // console.log(deltaTime)

    // console.log(time)

    // console.log("hello")
    //update
    // mesh.position.x +=0.001
    // mesh.position.y -=0.0006
    // mesh.rotation.x +=0.01
    // mesh.rotation.y =elapsedTime*Math.PI*1
    // // mesh.rotation.x =elapsedTime*Math.PI*1
    // mesh.position.y =Math.sin(elapsedTime)
    // mesh.position.x =Math.cos(elapsedTime)
    // mesh.position.z =Math.cos(elapsedTime)
    // camera.position.y =Math.sin(elapsedTime)
    // camera.position.x =Math.cos(elapsedTime)
    // camera.lookAt(mesh.position)
renderer.render(scene,camera)
window.requestAnimationFrame(tick)


}
tick()