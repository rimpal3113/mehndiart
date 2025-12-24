import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- SNOW COMPONENT ---------------- */
const Snow = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {[...Array(35)].map((_, i) => (
        <span
          key={i}
          className="absolute top-[-10px] bg-white rounded-full opacity-80"
          style={{
            width: Math.random() * 3 + 2 + "px",
            height: Math.random() * 3 + 2 + "px",
            left: Math.random() * 100 + "%",
            animation: `snowFall ${Math.random() * 6 + 6}s linear infinite`,
            animationDelay: Math.random() * 5 + "s",
          }}
        />
      ))}

      {/* Inline animation (Tailwind-safe) */}
      <style>
        {`
          @keyframes snowFall {
            to {
              transform: translateY(110vh);
            }
          }
        `}
      </style>
    </div>
  );
};

/* ---------------- HOME COMPONENT ---------------- */
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
        <div className="w-full h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] relative overflow-hidden bg-white flex items-center justify-center pb-12">

          <AnimatePresence>
            {images.map(
              (img, index) =>
                index === currentIndex && (
                  <motion.img
                    key={index}
                    src={img}
                    alt="slider"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-contain md:object-cover"
                  />
                )
            )}
          </AnimatePresence>

          {/* ❄ Snow Effect */}
          <Snow />

          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300
                  ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WELCOME SECTION ---------------- */}
      <section className="py-16 px-6 md:px-20 bg-white">
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
              At Rim Mehndi Art, we transform your special moments into beautiful
              memories through elegant and artistic mehndi designs.
              <br /><br />
              We specialize in Bridal, Arabic, Indian Traditional and Modern
              Stylish Mehndi using pure natural henna for long-lasting results.
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
              src="/src/assets/mylogo.png"
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
