import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const canvas = document.getElementById('threeCanvas')

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0b1220)

const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
camera.position.set(5, 5, 5)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({canvas, antialias:true})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
function resize(){
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
}
resize(); window.addEventListener('resize', resize)

const hemi = new THREE.HemisphereLight(0xffffff, 0x223344, 1.2)
scene.add(hemi);
const dir = new THREE.DirectionalLight(0xffffff, 1.0)
dir.position.set(5,5,5)
scene.add(dir)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const loader = new GLTFLoader();
loader.load(
    './assets/Untitled.glb',
    gltf=>{
        scene.add(gltf.scene)
        function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()
    },
    undefined,
    err=>{
        // Fallback: animierter TorusKnoten, falls kein Modell vorhanden ist
        const geo = new THREE.TorusKnotGeometry(0.6, 0.2, 160, 24)
        const mat = new THREE.MeshStandardMaterial({color:0x45c5ff, metalness:.3, roughness:.2})
        const knot = new THREE.Mesh(geo, mat)
        scene.add(knot)
        (function spin(){
            knot.rotation.x += 0.01; knot.rotation.y += 0.013
            requestAnimationFrame(spin)
        })();
    }
);

function animate(){
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
};

