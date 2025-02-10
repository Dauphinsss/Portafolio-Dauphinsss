"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBox = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.from(boxRef.current, {
        color: "blue",
        backgroundColor: "yellow",
        x: -100,
        rotate: 360,
        scale: 3,
        duration: 1,
        ease: "back.out"
      });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
      }}
      className="text-xl grid items-center"
    >
      Animación
    </div>
  );
};

export default AnimatedBox;
