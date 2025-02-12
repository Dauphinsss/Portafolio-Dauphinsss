"use client";

import { useEffect } from "react";
import gsap from "gsap";

const AnimatedText = () => {
  useEffect(() => {
    gsap.from(".div-item", {
      y: -100,
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.25,
    });
  }, []);

  return (
    <div className="flex space-x-3">
      <p className="div-item">Esta</p>
      <p className="div-item">pagina</p>
      <p className="div-item">aun</p>
      <p className="div-item">esta</p>
      <p className="div-item">en</p>
      <p className="div-item">Desarrrollo...</p>
    </div>
  );
};

export default AnimatedText;
