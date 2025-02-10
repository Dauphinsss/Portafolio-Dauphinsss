"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollBox() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    const boxes: HTMLElement[] = gsap.utils.toArray(".box-scroll") as HTMLElement[];

    boxes.forEach((box: HTMLElement) => {
      gsap.from(box, {
      x: 300,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Limpia animaciones
    };
  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center gap-10">
      <div className="w-20 h-20 bg-red-500 rounded-lg shadow-lg box-scroll"></div>  
    </div>
  );
}
