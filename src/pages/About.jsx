import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#653239] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Rim Mehndi Art
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="text-lg md:text-xl text-[#653239]/90 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Welcome to <span className="font-semibold">Rim Mehndi Art</span> — 
          where creativity meets tradition.  
          We create beautiful and detailed mehndi designs for  
          <strong> weddings, festivals, engagements, baby showers, and parties.</strong>
        </motion.p>

        {/* Main Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Left Image */}
          <motion.img
            src="/src/assets/m2.jpg"
            alt="Mehndi Art"
            className="w-72 h-72 object-cover rounded-xl shadow-xl border-4 border-[#AF7A6D]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Services List */}
          <motion.div
            className="max-w-md text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-[#653239] mb-4">
              What We Offer
            </h3>

            <ul className="space-y-2 text-lg text-[#653239]/90">
              <li>✔ Bridal Mehndi</li>
              <li>✔ Arabic Mehndi</li>
              <li>✔ Traditional Indian Mehndi</li>
              <li>✔ Modern Stylish Mehndi</li>
              <li>✔ Kids Mehndi Designs</li>
            </ul>
          </motion.div>
        </div>

        {/* ⭐ Mehndi Artist Section */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6 rounded-xl bg-white shadow-lg border border-[#E2D4BA]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          
          {/* Artist Image */}
          <motion.img
            src="/src/assets/mypic.jpeg"
            alt="Mehndi Specialist"
            className="
              w-40 h-40
              sm:w-48 sm:h-48
              rounded-full
              object-contain
              bg-white
              shadow-md
              border-4 border-[#AF7A6D]
              mx-auto
            "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />

          {/* Artist Details */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-[#653239]">Rimpal Thakor</h3>
            <p className="text-[#653239]/90 mt-2 text-lg">
              Professional Mehndi Artist with over <strong>5+ years of experience</strong>.
              Specialized in creating elegant, detailed, and stunning mehndi patterns 
              that make every occasion memorable.
            </p>

            <p className="mt-4 text-[#653239] font-semibold">
              “Every design is crafted with love, patience, and creativity.”
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
