"use client"; // Necesario para usar hooks en Next.js 15

import React, { useState, useEffect } from "react";
import axios from "axios";

const Contador = () => {
  const [visitas, setVisitas] = useState(0);
  const [num, setNum] = useState(0);


  const crearVisita = async () => { 
    try {
      const { data: { id } } = await axios.post("/api/visitas");
      setNum(id);
      
    } catch (error) {
      console.error(error);
    }
  }
  const obtenerVisitas = async () => {
    try {
      const { data } = await axios.get("/api/visitas");
      setVisitas(data.length);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    crearVisita();
    obtenerVisitas();

    
  }, []);

    

  const incrementarVisitas = () => {
      setVisitas(visitas + 1);
  };

  const formatoVisitas = String(visitas).padStart(7, "0");

  return (
    <div className="bg-zinc-950 p-4 rounded-lg shadow-lg text-center grid gap-4">
      <h1 className="text-xl font-bold ">¡Bienvenido!</h1>
      <p>Visitas</p>
      <div className="flex space-x-2">
        {formatoVisitas.split("").map((digito, index) => (
          <span
            key={index}
            className="text-3xl sm:text-4xl font-mono bg-zinc-900 p-2 rounded"
          >
            {digito}
          </span>
        ))}
      </div>
      <p>¡Felicidades! eres la visita n.° {num}</p>
      <button
        onClick={incrementarVisitas}
        className="px-6 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-900 transition duration-300"
      >
        Incrementar
      </button>
    </div>
  );
};

export default Contador;
