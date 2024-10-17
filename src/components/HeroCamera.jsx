import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

export default function HeroCamera({ children, isMobile }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.2, delta);

    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.2,
        delta
      );
    }
  });

  return (
    <group scale={isMobile ? 1 : 1.3} ref={groupRef}>
      {children}
    </group>
  );
}
