'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  useEffect(() => {
    gsap.from('.fade-in', {
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    })
  }, [])

  return (
    <section className="fade-in relative h-[60vh] flex items-center justify-center text-center overflow-hidden bg-white dark:bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-white dark:text-white px-4">
        <h1 className="text-5xl font-bold">Live in Luxury</h1>
        <p className="mt-4 text-xl">Experience the new era of style</p>
      </div>
    </section>
  )
}
