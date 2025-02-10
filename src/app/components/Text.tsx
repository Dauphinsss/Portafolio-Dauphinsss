"use client";

import { useEffect } from "react";
import gsap from "gsap";

const AnimatedText = () => {
  useEffect(() => {
    gsap.from(".div-item", {
      y: -100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
    });
  }, []);

  return (
    <div className="flex space-x-3">
      <p className="div-item">hola</p>
      <p className="div-item">hola</p>
      <p className="div-item">hola</p>
      <p className="div-item">hola</p>
    </div>
  );
};

export default AnimatedText;
