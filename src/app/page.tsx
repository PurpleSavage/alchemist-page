'use client'
import Lenis from "lenis";
import Main from "@/components/landing/Main";
import Subscribe from "@/components/landing/Subscribe";
import { useEffect, useRef } from "react";
import Sports from "@/components/landing/Sports";
import End from "@/components/landing/End";
export default function Home() {
  const lenisRef= useRef<Lenis | null>(null)

  useEffect(()=>{
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1, // Controla la suavidad del scroll (0 a 1)
      wheelMultiplier: 1, // Ajusta la sensibilidad del scroll
      infinite: false, // Evita que el scroll sea infinito
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy(); 
    };
  },[])
  return (
    <div className="min-h-screen bg-black pb-10 space-y-24">
      <Main/>
      <Subscribe/>
      <Sports/>
      <End/>
    </div>
  );
}
