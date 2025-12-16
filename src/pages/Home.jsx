import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const images = [
    "/src/assets/myms1.png",
    "/src/assets/myms2.jpg",
    "/src/assets/myys3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ---------------- SLIDER SECTION ---------------- */}
      <section className="mt-16 relative">
  <div
    className="
      w-full 
      h-[35vh]
      sm:h-[45vh]
      md:h-[60vh]
      lg:h-[70vh]
      xl:h-[80vh]
      relative 
      overflow-hidden
      bg-white
      flex items-center justify-center
      pb-8 sm:pb-10 md:pb-12  /* Added padding-bottom for dots */
    "
  >
    <AnimatePresence>
      {images.map(
        (img, index) =>
          index === currentIndex && (
            <motion.img
              key={index}
              src={img}
              alt="slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full object-contain md:object-cover rounded-md"
            />
          )
      )}
    </AnimatePresence>

    {/* Slider dots */}
    <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition 
            ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
        ></button>
      ))}
    </div>
  </div>
</section>


      {/* ---------------- WELCOME SECTION ---------------- */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#653239] mb-4">
              Welcome to Rim Mehndi Art
            </h2>

            <p className="text-[#653239]/80 leading-7 text-lg">
              At Rim Mehndi Art, we transform your special moments into beautiful memories 
              through elegant and artistic mehndi designs. With years of experience, we offer 
              a wide range of styles including Bridal, Arabic, Indian Traditional, and Modern 
              Stylish Mehndi.  
              <br /><br />
              Our designs are detailed, long-lasting, and made with pure natural henna. 
              Whether it’s a wedding, festival, party, or kids event — we bring creativity 
              and perfection to every hand.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/src/assets/mylogo.png"   /* Change image as needed */
              alt="Rim Mehndi Art"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Home;
