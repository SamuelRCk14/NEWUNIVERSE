import * as THREE from "https://unpkg.com/three@0.140.2/build/three.module.js"
//Escena
const scene = new THREE.Scene();
	
//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//-------MODELO--------
const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

camera.position.z = 5;


//  Animación
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	plane.rotation.x += 0.02;
	
}

animate();