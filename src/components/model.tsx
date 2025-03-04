import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

export const EarthCanvas = () => {
  const [model, setModel] = useState("ruby");
  const { scene } = useGLTF(`./models/${model}.glb`);

  // Cleanup previous model to prevent WebGL context loss
  useEffect(() => {
    return () => {
      scene.remove(scene);
    };
  }, [model, scene]);

  return (
    <>
      <div className="absolute top-0 right-4 p-4 text-white text-2xl font-bold z-10">
        <select
          id="models"
          name="models"
          style={{
            background: "white",
            color: "black",
            padding: "0.2rem 1rem",
            borderRadius: "10px",
            fontSize: "22px",
            cursor: "pointer",
          }}
          onChange={(e) => {
            setModel(e.target.value);
          }}
        >
          <option value="ruby">Ruby</option>
          <option value="technology-room">Technology Room</option>
          <option value="vaviva-2">Vaviva</option>
        </select>
      </div>
      <Suspense fallback={<div className="text-2xl text-center w-100">Please Wait loading</div>}>
        <Canvas
          key={model}
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
          shadows
          performance={{ min: 0.5, max: 1 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight />
          <OrbitControls enableZoom={true} enablePan={true} />
          <primitive object={scene} key={model} scale={0.5} />
          <Stats />
        </Canvas>
      </Suspense>
    </>
  );
};
