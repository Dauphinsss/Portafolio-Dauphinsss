"use client";

import { useEffect} from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { pressStart2P } from "../fonts/fonts";


const MagicText = () => {

  useEffect(() => {
    const text = new SplitType(".hero-title", { types: "words, chars" }) || {
      chars: [],
    };

    const rotate = () => {
      const char = text.chars ? gsap.utils.random(text.chars) : null;
      if (char) {
        gsap.to(char, {
          rotate: 360,
          duration: 1,
          ease: "back.out",
        });
      }
    };

    setInterval(rotate, 1000);

    if (text.chars) {
      text.chars.forEach((char, index) => {
        const charTl = gsap.timeline();
        charTl.from(char, {
          y: gsap.utils.random(-150, 150),
          x: gsap.utils.random(-200, 200),
          rotate: gsap.utils.random(-360, 360),
          scale: gsap.utils.random(0, 2),

          duration: 0.75,
          delay: index * 0.01,
          opacity: 0,
          ease: "back.out",
        });

        charTl.from(
          char,
          {
            color: `rgb(${gsap.utils.random(0, 255)},${gsap.utils.random(
              0,
              255
            )},${gsap.utils.random(0, 255)})`,
            duration: 1,
          },
          "-=0.25"
        );

        char.addEventListener("mouseenter", charsHover);

        function charsHover() {
          gsap
            .timeline()
            .to(char, {
              y: gsap.utils.random(-50, 50),
              x: gsap.utils.random(-50, 50),
              rotate: gsap.utils.random(-360, 360),
              scale: gsap.utils.random(0.5, 1.5),
              ease: "back",
              color: `rgb(${gsap.utils.random(0, 255)},${gsap.utils.random(
                0,
                255
              )},${gsap.utils.random(0, 255)})`,
              onStart: () => {
                char.removeEventListener("mouseenter", charsHover);
              },
              duration: 0.5,
            })
            .to(char, {
              y: 0,
              x: 0,
              rotate: 0,
              scale: 1,
              color: "#fffce1",
              delay: 0.25,
              ease: "back",
              onComplete: () => {
                char.addEventListener("mouseenter", charsHover);
              },
            });
        }
      });
    }
  }, []);

  return (
    <div className={` font-semibold ${pressStart2P.className}`}>
      <div className="text-center desktop-content hero-title text-6xl text-[170px]">
        Sueños & Ideas <br />
        Se hacen Realiad
        <br />
      </div>
      <div className="w-80 mobile-content text-4xl">
        <div className="text-start hero-title">Sueños</div>
        <div className="text-end hero-title">& Ideas</div>
        <div className="text-start hero-title">se hacen</div>
        <div className="text-end hero-title">Realiad</div>
      </div>
    </div>
  );
};

export default MagicText;
