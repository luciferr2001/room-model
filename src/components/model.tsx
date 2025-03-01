import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, useGLTF } from "@react-three/drei";

export const EarthCanvas = () => {
  const earth = useGLTF("./models/vaviva_2.glb");
  return (
    <>
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [-2, 3, 6], fov: 45, near: 0.1, far: 200 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}      
      shadows // Enable shadows (if needed)
      performance={{ min: 0.5, max: 1 }} // Control rendering performance
    >
      <ambientLight />
      <OrbitControls enableZoom={true} enablePan={true} />
      <primitive object={earth.scene} scale={0.5} castShadow={false} receiveShadow={false} />
      <Stats />
    </Canvas>
    </>
  );
};

useGLTF.preload('./models/vaviva_2.glb')