
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FloatingGeometry from './FloatingGeometry';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00d4ff" />
        
        <FloatingGeometry
          position={[-3, 2, -2]}
          geometry="box"
          color="#00d4ff"
          scale={0.8}
        />
        <FloatingGeometry
          position={[3, -1, -3]}
          geometry="sphere"
          color="#ff6b6b"
          scale={0.6}
        />
        <FloatingGeometry
          position={[1, 3, -1]}
          geometry="torus"
          color="#4ecdc4"
          scale={0.7}
        />
        <FloatingGeometry
          position={[-2, -2, -4]}
          geometry="box"
          color="#ffe66d"
          scale={0.5}
        />
        <FloatingGeometry
          position={[4, 1, -2]}
          geometry="sphere"
          color="#a8e6cf"
          scale={0.4}
        />

        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
