import * as THREE from 'three';
import { Box, Spinner } from '@chakra-ui/react';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { loadGLTFModel } from '../../lib/model';

const easeOutCirc = (x: number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

const LowPolyIsland = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  // Component State
  const [loading, setLoading] = useState(true);

  /**
   * THREEJS
   */
  // Mutable
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [_camera, setCamera] = useState<THREE.OrthographicCamera>();
  const [_controls, setControls] = useState<OrbitControls>();

  // Non-Mutable
  const [initCameraPosition] = useState(
    new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))
  );
  const [target] = useState(new THREE.Vector3(-0.5, 3, 0));
  const [scene] = useState(new THREE.Scene());

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      // Create and set Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      // Set Scene Scaling
      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
      camera.position.copy(initCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffc786, 0.3);
      scene.add(ambientLight);

      const sunLight = new THREE.PointLight(0xffc786, 1, 200);
      sunLight.position.set(10, 50, 40);
      scene.add(sunLight);

      // Setup Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      // Load model
      loadGLTFModel(scene, '/floatingIsland.glb', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      // Animation
      let req: number = 0;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const pos = initCameraPosition;
          const rotationSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x = pos.x * Math.cos(rotationSpeed) + pos.z * Math.sin(rotationSpeed);
          camera.position.z = pos.z * Math.cos(rotationSpeed) - pos.x * Math.sin(rotationSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);

    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <Box
      ref={refContainer}
      className="low-poly-island"
      m="auto"
      at={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  );
};

export default LowPolyIsland;
