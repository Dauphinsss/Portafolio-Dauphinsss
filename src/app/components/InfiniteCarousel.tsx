"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface CarouselItem {
  id: number;
  content: string;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  speed?: number;
  gap?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  speed = 30,
  gap = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const slider = sliderRef.current;
    const itemWidth =
      slider.firstElementChild?.getBoundingClientRect().width || 0;
    const totalWidth = (itemWidth + gap) * items.length;

    // Clone items for infinite effect
    const sliderContent = slider.innerHTML;
    slider.innerHTML = sliderContent + sliderContent + sliderContent;

    // Set initial position
    gsap.set(slider, {
      x: 0,
    });

    // Create infinite animation
    const animation = gsap.to(slider, {
      x: -totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      onReverseComplete: () => {
        gsap.set(slider, { x: 0 });
      },
    });

    // Pause animation on hover
    containerRef.current.addEventListener("mouseenter", () =>
      animation.pause()
    );
    containerRef.current.addEventListener("mouseleave", () => animation.play());

    return () => {
      animation.kill();
    };
  }, [items, speed, gap]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{ touchAction: "none" }}
    >
      <div ref={sliderRef} className="inline-flex" style={{ gap: `${gap}px` }}>
        {items.map((item) => (
          <div
            key={item.id}
            className=" rounded-lg shadow-md p-6 min-w-[100px]"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
