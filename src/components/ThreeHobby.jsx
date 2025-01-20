import { useEffect, useRef } from "react";
import * as THREE from "three";
// import Bumi from "../assets/earth-shape-heart-earth-texture-from-nasa_974729-129688.avif";

const ThreeHobby = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current; // Salin ref ke variabel lokal

    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      // window.innerWidth / window.innerHeight,
      400 / 300,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 300); // Atur ukuran canvas ke 800x600
    renderer.setClearColor(0x000000, 0); // Set transparansi latar belakang
    // renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Create a simple cube with lighting
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      metalness: 0.5,
      roughness: 0.5,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add lights
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(-1, 2, 4);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      mount.removeChild(renderer.domElement); // Gunakan variabel lokal
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "400", // Batas lebar canvas
        height: "300",//Batas tinggi
        margin: "0 auto", // Agar center di halaman
        border: "1px solid #ccc", // Tambahkan border opsional
        background: "transparent",
      }}
    ></div>
  );
};

export default ThreeHobby;
