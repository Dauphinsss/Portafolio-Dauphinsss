"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const Logo: React.FC = () => {
  useEffect(() => {
    const element = document.querySelector(".duck");
     if (element) {
       element.addEventListener("mouseenter", () => {
         gsap.to(element, {
           scale: 1.3, // Aumenta el tamaño al 120% al hacer hover
           duration: 0.3,
           opacity: 0, // Duración de la animación
         });
       });

       element.addEventListener("mouseleave", () => {
         gsap.to(element, {
           scale: 1, // Vuelve al tamaño original
           rotation: 0, // Vuelve a la rotación original
           duration: 0.3,
           opacity: 1, // Duración de la animación
         });
       });
     }

    gsap.to(".duck", {
      rotate: 360,
      duration: 1,
      ease: "back.out",
      repeat: -1,
      repeatDelay: 1,
    });

    gsap.from(".logo-text", {
      y: -100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
    });
  }, []);
  return (
    <div className="flex items-center space-x-3 logo-text p-4">
      <p className="text-2xl font-bold desktop-content">Dauphinsss Dev</p>
      <p className=" font-bold text-xl mobile-content">Dauphinsss Dev</p>
      <Image
        src="/duck.svg"
        alt="Duck logo"
        width={35}
        height={35}
        className="duck desktop-content"
      />
      <Image
        src="/duck.svg"
        alt="Duck logo"
        width={25}
        height={25}
        className="duck mobile-content"
      />
    </div>
  );
};

export default Logo;
