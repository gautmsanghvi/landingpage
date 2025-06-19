"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
    tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
    tl.fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5");
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 ref={titleRef} className="text-5xl font-bold text-gray-900">
        Elevate Your Everyday Style
      </h1>
      <p ref={descRef} className="mt-4 text-lg text-gray-600 max-w-xl">
        Handpicked products that combine fashion and function.
      </p>
    </section>
  );
}
