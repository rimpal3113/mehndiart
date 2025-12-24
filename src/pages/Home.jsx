import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- IMPORT IMAGES ---------------- */
import myLogo from "../assets/mylogo.png";
import img1 from "../assets/myms1.png";
import img2 from "../assets/myms2.jpg";
import img3 from "../assets/myys3.jpg";

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

/* ---------------- FLOATING ICONS ---------------- */
const FloatingIcons = () => {
  const icons = [
    { symbol: "🌸", top: "10%", left: "5%" },
    { symbol: "✨", top: "20%", left: "80%" },
    
    { symbol: "🌿", top: "50%", left: "85%" },
    { symbol: "👰", top: "60%", left: "10%" },
    { symbol: "💐", top: "70%", left: "75%" },
  
    { symbol: "🎀", top: "45%", left: "60%" },
    { symbol: "🌼", top: "15%", left: "60%" },
    { symbol: "🌺", top: "80%", left: "25%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl sm:text-3xl md:text-4xl"
          style={{ top: icon.top, left: icon.left }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 0.2,
          }}
        >
          {icon.symbol}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- HOME COMPONENT ---------------- */
const Home = () => {
  const images = [img1, img2, img3];
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
                    alt={`slider ${index}`}
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
                  ${index === currentIndex ? "bg-white scale-125" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WELCOME SECTION ---------------- */}
      <section className="relative py-16 px-6 md:px-20 bg-white overflow-hidden">
        {/* Floating Icons */}
        <FloatingIcons />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={myLogo}
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
