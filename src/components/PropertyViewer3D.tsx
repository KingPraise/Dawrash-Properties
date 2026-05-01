import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Environment, Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { Loader2, X, Maximize2, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PropertyViewer3DProps {
  imageUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

function PropertyModel({ imageUrl }: { imageUrl: string }) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(imageUrl, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      setTexture(tex);
    });
  }, [imageUrl]);

  if (!texture) return null;

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Main House Structure - Modern Cubic Design */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[4, 3, 4]} />
          <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.05} />
        </mesh>
        
        {/* Second Floor Offset */}
        <mesh position={[0.5, 2.5, 0]} castShadow>
          <boxGeometry args={[3, 1.5, 3.5]} />
          <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.05} />
        </mesh>

        {/* Accent Wall / Wood Panel */}
        <mesh position={[-2.05, 0.5, 0]}>
          <boxGeometry args={[0.1, 3, 2]} />
          <meshStandardMaterial color="#3d2b1f" roughness={0.8} />
        </mesh>

        {/* Roof - Flat Modern Style with Overhang */}
        <mesh position={[0, 3.3, 0]} castShadow>
          <boxGeometry args={[4.5, 0.2, 4.5]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} />
        </mesh>

        {/* Large Window with Property Image (The "View") */}
        <mesh position={[0, 0.5, 2.01]}>
          <planeGeometry args={[3.6, 2.6]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        
        {/* Window Frame */}
        <mesh position={[0, 0.5, 2.02]}>
          <boxGeometry args={[3.8, 2.8, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" wireframe />
        </mesh>

        {/* Balcony Railing */}
        <mesh position={[0.5, 3.5, 1.7]} castShadow>
          <boxGeometry args={[3, 0.8, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" transparent opacity={0.3} />
        </mesh>

        {/* Pool Area */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.95, 4]}>
          <planeGeometry args={[6, 4]} />
          <meshStandardMaterial color="#0077be" roughness={0.1} metalness={0.5} />
        </mesh>

        {/* Base/Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[15, 15]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

export function PropertyViewer3D({ imageUrl, title, isOpen, onClose }: PropertyViewer3DProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full h-full max-w-6xl bg-white dark:bg-black overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-6 flex items-center justify-between bg-linear-to-b from-black/50 to-transparent pointer-events-none">
              <div className="pointer-events-auto">
                <h2 className="text-white text-2xl font-serif italic">{title}</h2>
                <p className="text-white/60 text-[10px] uppercase tracking-[2px]">Interactive 3D Experience</p>
              </div>
              <button 
                onClick={onClose}
                className="pointer-events-auto p-3 bg-white/10 hover:bg-white/20 text-white transition-colors rounded-none border border-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Controls Info */}
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none hidden md:block">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-white/40 text-[9px] uppercase tracking-[1px]">
                  <span className="px-2 py-1 border border-white/20">Left Click</span>
                  <span>Rotate View</span>
                </div>
                <div className="flex items-center gap-3 text-white/40 text-[9px] uppercase tracking-[1px]">
                  <span className="px-2 py-1 border border-white/20">Scroll</span>
                  <span>Zoom In/Out</span>
                </div>
                <div className="flex items-center gap-3 text-white/40 text-[9px] uppercase tracking-[1px]">
                  <span className="px-2 py-1 border border-white/20">Right Click</span>
                  <span>Pan View</span>
                </div>
              </div>
            </div>

            {/* Canvas */}
            <div className="w-full h-full bg-off-white dark:bg-[#0a0a0a]">
              <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={45} />
                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.5} adjustCamera={false}>
                    <PropertyModel imageUrl={imageUrl} />
                  </Stage>
                  <Environment preset="city" />
                  <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={15} blur={2.5} far={4} />
                </Suspense>
                <OrbitControls 
                  enablePan={true} 
                  enableZoom={true} 
                  minPolarAngle={Math.PI / 4} 
                  maxPolarAngle={Math.PI / 2}
                  makeDefault
                />
              </Canvas>
            </div>

            {/* Loading Overlay */}
            <Suspense fallback={
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm z-20">
                <Loader2 className="text-gold animate-spin mb-4" size={40} />
                <p className="text-white text-[10px] uppercase tracking-[3px]">Initializing 3D Environment</p>
              </div>
            }>
            </Suspense>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

