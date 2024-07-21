import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import purple from "../img/bg/purplecloud.png";
import smoke from "../img/bg/smoke-1.png";
const CloudAnimation: any = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const width = 1920;
    const height = 670;
    const cloudParticles: THREE.Mesh[] = [];
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(width, height);
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    scene.fog = new THREE.FogExp2(0x11111f, 0.002);
    renderer.setClearColor(scene.fog.color);
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 5;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    const ambient = new THREE.AmbientLight(0x555555, 1.2);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffeedd, 1.5);
    directional.position.set(0, 0, 1);
    scene.add(directional);

    const point = new THREE.PointLight(0x062d89, 50, 500, 1.7);
    point.position.set(200, 300, 100);
    scene.add(point);

    const loadertwo = new THREE.TextureLoader();
    loadertwo.load(
      "https://i.postimg.cc/TYvjnH2F/smoke-1.png",
      (texture) => {
        const cloudGeometry = new THREE.PlaneGeometry(2000, 800);
        const cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true,
          color: new THREE.Color(0x6f36ff),
          emissive: new THREE.Color(0x6f36ff),
          emissiveIntensity: 0.5,
        });

        for (let i = 0; i < 15; i++) {
          const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
          cloud.position.set(
            Math.random() * 1200 - 600,
            800,
            Math.random() * 800 - 40
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random() * 360;
          cloud.material.opacity = 0.3;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
      }
    );

    const loader = new THREE.TextureLoader();
    loader.load(
      `${purple}`,
      (texture) => {
        const cloudGeometry = new THREE.PlaneGeometry(1500, 800);
        const cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true,
          color: new THREE.Color(0x6f36ff),
          emissive: new THREE.Color(0x6f36ff),
          emissiveIntensity: 0.5,
        });

        for (let i = 0; i < 15; i++) {
          const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
          cloud.position.set(
            Math.random() * 1200 - 600,
            1000,
            Math.random() * 800 - 40
          );
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random() * 360;
          cloud.material.opacity = 1;
          cloudParticles.push(cloud);
          scene.add(cloud);
        }
      },
      (progress) => {
        // 로딩 상태 표시
        console.log(
          `Loaded image: ${(progress.loaded / progress.total) * 100}%`
        );
      },
      (error) => {
        // 오류 처리 개선
        console.error("Error loading texture:", error);
        // 대체 이미지 사용 등의 처리 추가
      }
    );

    const rainGeometry = new THREE.BufferGeometry();
    const rainCount = 3000;
    const rainPositions = new Float32Array(rainCount * 3);

    for (let i = 0; i < rainCount; i++) {
      rainPositions[i * 3] = Math.random() * 400 - 200;
      rainPositions[i * 3 + 1] = Math.random() * 500 - 250;
      rainPositions[i * 3 + 2] = Math.random() * 400 - 200;
    }

    rainGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(rainPositions, 3)
    );

    const rainMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.1,
      transparent: true,
    });

    const rain = new THREE.Points(rainGeometry, rainMaterial);
    scene.add(rain);

    const fps = 300;

    const render = () => {
      cloudParticles.forEach((i: any) => {
        i.rotation.z -= 0.002;
        i.material.opacity = 0.7;
      });

      for (let i = 0; i < rainGeometry.attributes.position.count; i++) {
        rainPositions[i * 3 + 1] -= 0.1 + Math.random() * 0.1;
        if (rainPositions[i * 3 + 1] < -200) {
          rainPositions[i * 3 + 1] = 200;
        }
      }

      rainGeometry.attributes.position.needsUpdate = true;
      rain.rotation.y += 0.002;

      if (Math.random() > 0.98 || point.power > 100) {
        if (point.power < 100)
          point.position.set(
            Math.random() * 400,
            300 + Math.random() * 200,
            100
          );
        point.power = 50 + Math.random() * 500;
      }

      renderer.render(scene, camera);
      setTimeout(() => {
        requestAnimationFrame(render);
      }, 1000 / fps);
    };

    render();

    const onResize = () => {
      if (renderer && camera) {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const renderCanvas = () => {
    return <div ref={canvasRef} id="cloud"></div>;
  };

  return renderCanvas();
};

export default CloudAnimation;
