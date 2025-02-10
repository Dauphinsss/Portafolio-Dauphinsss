"use client"
import { useEffect } from "react";
import gsap from "gsap";

const AnimatedComponent = () => {
  useEffect(() => {
    const element = document.querySelector(".animated-element");

    // Función de animación
    const animateElement = () => {
      gsap.to(element, { opacity: 0, x: 100, duration: 1 });
      gsap.to(element, { opacity: 1, x: 0, duration: 1, delay: 1 });
    };

    // Llamar a la animación cada 3 segundos
    const intervalId = setInterval(animateElement, 3000);

    // Limpiar intervalos cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        className="animated-element"
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
      >
        ¡Animación!
      </div>
    </div>
  );
};

export default AnimatedComponent;
