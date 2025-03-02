import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import InfiniteCarousel from "./components/InfiniteCarousel";
import MagicText from "./components/MagicText";
import AnimatedText from "./components/Text";
import Contador from "./components/Contador";
import About from "./components/About";

export default function Home() {
  const carouselItems = [
    { id: 1, content: "HTML" },
    { id: 2, content: "CSS" },
    { id: 3, content: "JavaScript" },
    { id: 4, content: "TypeScript" },
    { id: 5, content: "React" },
    { id: 6, content: "Next.js" },
    { id: 7, content: "Express.js" },
    { id: 8, content: "Node.js" },
    { id: 9, content: "Nest.js" },
    { id: 10, content: "PostgreSQL" },
    { id: 11, content: "SQLite" },
    { id: 12, content: "Git" },
    { id: 13, content: "GitHub" },
    { id: 14, content: "Railway" },
  ];
  return (
    <>
      <Header />
      <h1 className="text-center mobile-content mb-4">
        Holaaa! Yo soy Marcos Velasquez Vela<br></br>Diseñador & Desarrollador
        Web <br />
        Trayendote la Pagina Web donde tus
      </h1>
      <h1 className="text-center desktop-content">
        Holaaaaa!!! Yo soy Marcos Velasquez Vela, Diseñador & Desarrollador Web
        trayendote la Pagina Web donde tus:
      </h1>
      <div className="grid justify-items-center sm:p-8 space-y-2 gap-4">
        <MagicText />
        <p className="desktop-content">
          ¿Alguna vez quisiste tu propia Pagina Web? pues ahora es tu
          oportunidad, yo diseño y desarrrollo paginas web accesibles e
          innovadoras, pasando de tu imaginacion a lo que sera tu sitio web.
        </p>
        <AnimatedText />
        <Contador />
  
          <About />
       
      </div>
      <InfiniteCarousel items={carouselItems} />
    </>
  );
}
