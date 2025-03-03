"use client"; // Necesario para usar hooks en Next.js 15

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Contador = () => {
  const [visitas, setVisitas] = useState(0);
  const [num, setNum] = useState(0);
  const [animando, setAnimando] = useState(false);
  const [digitosMostrados, setDigitosMostrados] = useState([
    0, 0, 0, 0, 0, 0, 0,
  ]);
  const timerRefs = useRef<Array<NodeJS.Timeout>>([]);

  const crearVisita = async () => {
    try {
      const {
        data: { id },
      } = await axios.post("/api/visitas");
      setNum(id);
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerVisitas = async () => {
    try {
      const { data } = await axios.get("/api/visitas");
      const totalVisitas = data.length;
      setVisitas(totalVisitas);
      animarContador(totalVisitas);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    crearVisita();
    obtenerVisitas();

    // Limpieza de timers al desmontar
    return () => {
      timerRefs.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const animarContador = (valor: number): void => {
    setAnimando(true);

    // Limpiar timers previos
    timerRefs.current.forEach((timer) => clearTimeout(timer));
    timerRefs.current = [];

    const digitosFinales = String(valor).padStart(7, "0").split("").map(Number);

    // Animar cada dígito con tiempos diferentes para un efecto escalonado
    digitosFinales.forEach((digito, index) => {
      // Duración basada en la posición (más larga para los dígitos más significativos)
      const duracion = 1000 + index * 300;
      const iteraciones = 10 + index * 5;
      const intervalo = duracion / iteraciones;

      for (let i = 0; i < iteraciones; i++) {
        const timer = setTimeout(() => {
          setDigitosMostrados((prevDigitos) => {
            const nuevosDigitos = [...prevDigitos];

            // Durante la animación, mostrar números aleatorios
            if (i < iteraciones - 1) {
              nuevosDigitos[index] = Math.floor(Math.random() * 10);
            } else {
              // Al final mostrar el valor correcto
              nuevosDigitos[index] = digito;

              // Si este es el último dígito y su última iteración, terminar la animación
              if (
                index === digitosFinales.length - 1 &&
                i === iteraciones - 1
              ) {
                setAnimando(false);
              }
            }

            return nuevosDigitos;
          });
        }, i * intervalo);

        timerRefs.current.push(timer);
      }
    });
  };

  const incrementarVisitas = () => {
    const nuevoValor = visitas + 1;
    setVisitas(nuevoValor);
    animarContador(nuevoValor);
  };

  return (
    <div className="bg-zinc-950 p-4 rounded-lg shadow-lg text-center grid gap-4 pt-2">
      <h2 className="text-xl font-mono">¡Bienvenido!</h2>
      <p>Visitas</p>
      <div className="flex space-x-2 justify-center">
        {digitosMostrados.map((digito, index) => (
          <div
            key={index}
            className={`relative overflow-hidden w-9 h-12 sm:w-10 sm:h-14 text-2xl sm:text-3xl md:text-4xl  bg-zinc-900 rounded flex items-center justify-center font-mono`}
          >
            <span
              className={`transition-transform duration-100 ${
                animando ? "transform" : ""
              }`}
            >
              {digito}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm sm:text-base md:text-lg">
        ¡Felicidades! eres la visita n.° {num}
      </p>
      <button
        onClick={incrementarVisitas}
        disabled={animando}
        className={`px-4 py-2 sm:px-6 sm:py-2 rounded transition duration-300 ${
          animando
            ? "bg-zinc-700 cursor-not-allowed"
            : "bg-zinc-800 hover:bg-zinc-900"
        }`}
      >
        {animando ? "Animando..." : "Incrementar"}
      </button>
    </div>
  );
};

export default Contador;
