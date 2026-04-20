import { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function CardMesh({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let objectUrl: string | null = null;

    // Fetch image with no-referrer to bypass restrictions in iframe
    fetch(imageUrl, { referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(blob => {
        if (!isMounted) return;
        objectUrl = URL.createObjectURL(blob);
        new THREE.TextureLoader().load(objectUrl, (t) => {
          if (!isMounted) return;
          t.colorSpace = THREE.SRGBColorSpace;
          t.needsUpdate = true;
          setTexture(t);
        });
      })
      .catch(err => console.error('Failed to load texture:', err));

    return () => {
      isMounted = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [imageUrl]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth rotation towards mouse
    const targetX = hovered ? (state.mouse.y * 0.2) : 0;
    const targetY = hovered ? (state.mouse.x * 0.2) : 0;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.1);
    
    // Slight scale up on hover
    const targetScale = hovered ? 1.05 : 1;
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
  });

  if (!texture) {
    return (
      <RoundedBox
        args={[4, 2.5, 0.1]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial color="#f3f4f6" />
      </RoundedBox>
    );
  }

  return (
    <RoundedBox
      ref={meshRef}
      args={[4, 2.5, 0.1]} // Width, Height, Depth
      radius={0.1}
      smoothness={4}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial map={texture} />
    </RoundedBox>
  );
}

export function Property3D({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full h-64 cursor-pointer">
      <Suspense fallback={<div className="w-full h-full bg-gray-100 animate-pulse" />}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <CardMesh imageUrl={imageUrl} />
        </Canvas>
      </Suspense>
    </div>
  );
}
