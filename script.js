const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x14002b);

const geometryCubo = new THREE.BoxGeometry(2, 2, 2);
const materialCubo = new THREE.MeshBasicMaterial({ color: 0xff5555 });
const cubo = new THREE.Mesh(geometryCubo, materialCubo);
cubo.position.x = -5;
scene.add(cubo);

const geometryDode = new THREE.DodecahedronGeometry(1.5);
const materialDode = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const dodeca = new THREE.Mesh(geometryDode, materialDode);
scene.add(dodeca);


const geometryTorus = new THREE.TorusGeometry(1.5, 0.4, 16, 100); // tamaño normal
const materialTorus = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const torus = new THREE.Mesh(geometryTorus, materialTorus);
torus.position.x = 5;
scene.add(torus);

let t = 0;

function animate() {
  requestAnimationFrame(animate);

  t += 0.02;

  cubo.position.y = Math.sin(t) * 1.5;
  dodeca.position.y = Math.sin(t + 1) * 1.5;
  torus.position.y = Math.sin(t + 2) * 1.5;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
