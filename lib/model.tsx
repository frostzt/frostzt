import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLTFModel = (
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) => {
  const { receiveShadow, castShadow } = options;
  return new Promise((res, rej) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        obj.name = 'dog';
        obj.position.x = 0;
        obj.position.y = 0;
        obj.castShadow = castShadow;
        obj.receiveShadow = receiveShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        res(obj);
      },
      undefined,
      function (error) {
        rej(error);
      }
    );
  });
};
