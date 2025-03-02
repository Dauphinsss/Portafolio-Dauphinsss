"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-base">
          Contáctame
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[370px] sm:max-w-[450px] text-zinc-900 rounded-lg bg-cremita">
        <DialogHeader>
          <DialogTitle className="text-center">Código, Diseño y Café</DialogTitle>
          <DialogDescription className="text-zinc-500 text-center">
            Los tres pilares de mi día a día
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-center">
          <p></p>
          <p>
            Como diseñador y desarrollador
            web, creo experiencias digitales que unen estética y funcionalidad.
            ¿Tienes un proyecto en mente? ¡Hagámoslo realidad! realidad!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
