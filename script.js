// Scene, Camera, Renderer Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Create a 3D Sphere (Globe)
const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshStandardMaterial({ 
    color: 0x61dafb, 
    wireframe: true 
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Add Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

camera.position.z = 5;

// Animate the Sphere
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    sphere.rotation.x += 0.005;
    renderer.render(scene, camera);
}
animate();

// Adjust on Window Resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
