"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { circlearrow, lights, old1, old2, old3, old4 } from '../../../public/imports'
import { AnimatePresence, motion } from 'framer-motion'

export default function Hero() {
  const images = [
    old1,
    old2,
    old3,
    old4
  ]
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length])

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  return (
    <main className='hero-main'>
      <div className="carousel-container" id='carcont'>
        <div className='absdiv'></div>
        <AnimatePresence mode='wait'>
          {images.map((image, index) => (
            <motion.div
              className='hero-image'
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ opacity: { duration: 3 } }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <Image src={image} alt='shop-images' layout='fill' objectFit='cover' unoptimized="true" style={{ width: "100%", height: "100%" }} />
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="hero-title">
          <h1>Revolutionizing wellness with cutting edge-technology</h1>
          <p>Prife, meaning "Prime Life" embodies our mission to help clients achieve the prime of their health and well-being in their lives.</p>
          <div className="buttondiv">
            <button id='consultation-button'>Request consultation</button>
            <button>Contact</button>
          </div>
        </div>

        <div className="info-box">
          <div className="info" style={{ backgroundColor: "#162d64" }}>
            <Image src={lights} width={35} height={35} alt='logo' />
            <h4>Non-invasive</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius alias temporibus.</p>
          </div>

          <div className="info" style={{ backgroundColor: "#46e4f5" }}>
            <Image src={lights} width={35} height={35} alt='logo' />
            <h4>100% Natural</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius alias temporibus.</p>
          </div>

          <div className="info" style={{ backgroundColor: "#162d64" }}>
            <Image src={lights} width={35} height={35} alt='logo' />
            <h4>100% Drug-Free</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius alias temporibus.</p>
          </div>

        </div>

      </div>
    </main>
  )
}
