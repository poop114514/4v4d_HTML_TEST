lucide.createIcons();

// --- 3D Hero Element --- //
const container = document.getElementById('hero-3d-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Texture Loader
const loader = new THREE.TextureLoader();
const textures = [
    new THREE.MeshBasicMaterial({ map: loader.load('https://i.imgur.com/8RCRs9g.png') }), // Right
    new THREE.MeshBasicMaterial({ map: loader.load('https://i.imgur.com/8RCRs9g.png') }), // Left
    new THREE.MeshBasicMaterial({ map: loader.load('https://i.imgur.com/0A3t5h1.png') }), // Top
    new THREE.MeshBasicMaterial({ map: loader.load('https://i.imgur.com/3G5sA8W.png') }), // Bottom
    new THREE.MeshBasicMaterial({ map: loader.load('https://i.imgur.com/8RCRs9g.png') }), // Front
    new THREE.MeshBasicMaterial({ map: loader.load('https://i.imgur.com/8RCRs9g.png') })  // Back
];

const geometry = new THREE.BoxGeometry(3, 3, 3);
const cube = new THREE.Mesh(geometry, textures);
scene.add(cube);

camera.position.z = 5;

// --- Mouse Interaction ---
let isMouseDown = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

container.addEventListener('mousedown', e => {
    isMouseDown = true;
});

container.addEventListener('mouseup', e => {
    isMouseDown = false;
});

container.addEventListener('mousemove', e => {
    if (!isMouseDown) return;

    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    cube.rotation.y += deltaX * 0.01;
    cube.rotation.x += deltaY * 0.01;

    previousMousePosition = {
        x: e.clientX,
        y: e.clientY
    };
});

// Handle mouse leaving the container
container.addEventListener('mouseleave', () => {
    isMouseDown = false;
});


// --- Animation Loop ---
function animate() {
    requestAnimationFrame(animate);

    if (!isMouseDown) {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
}
animate();

// --- Responsive Canvas ---
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

// --- Server Status --- //
async function fetchServerStatus() {
    try {
        document.getElementById('serverStatus').textContent = '正在获取服务器状态...';
        const response = await fetch(`https://api.mcsrvstat.us/2/4v4d.top`);
        const data = await response.json();
        if (data.online) {
            document.getElementById('serverStatus').textContent = `在线玩家: ${data.players.online} / ${data.players.max}`;
        } else {
            document.getElementById('serverStatus').textContent = '服务器离线';
        }
    } catch (error) {
        document.getElementById('serverStatus').textContent = '无法获取服务器状态';
    }
}

function copyText() {
    const textToCopy = document.getElementById('serverIP').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('IP地址已复制!');
    }).catch(err => {
        alert('复制失败');
    });
}

// Initial fetch
fetchServerStatus();
document.querySelector("button[onclick='fetchServerStatus()']").addEventListener("click", fetchServerStatus);
document.querySelector("button[onclick='copyText()']").addEventListener("click", copyText);
