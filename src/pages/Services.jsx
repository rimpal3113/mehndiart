import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Bridal Mehndi",
      image: "/src/assets/bridal.jpg",
      desc: "Beautiful, detailed, and elegant bridal mehndi designs to make your big day unforgettable."
    },
    {
      title: "Arabic Mehndi",
      image: "/src/assets/arbic.jpg",
      desc: "Bold strokes and flowing Arabic patterns perfect for any festive occasion."
    },
    {
      title: "Traditional Indian Mehndi",
      image: "/src/assets/traditional.webp",
      desc: "Classic and intricate Indian mehndi filled with culture, motifs, and elegance."
    },
    {
      title: "Modern Stylish Mehndi",
      image: "/src/assets/fancy.jpg",
      desc: "Trendy minimal and stylish mehndi patterns for modern fashion lovers."
    },
    {
      title: "Kids Mehndi Designs",
      image: "/src/assets/kids.webp",
      desc: "Cute and simple mehndi designs specially created for kids."
    },
    {
      title: "Mehndi Drawing Designs",
      image: "/src/assets/art.jpg",
      desc: "Creative mehndi drawing designs featuring a variety of artistic sketches, patterns, and intricate details."
    }
  ];

  // Framer Motion Variants for staggered animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="services" className="py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#653239] mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mehndi Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-[#E2D4BA] overflow-hidden hover:scale-105 transition-transform duration-300"
              variants={item}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover"
              />

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-[#653239] mb-2">
                  {service.title}
                </h3>

                <p className="text-[#653239]/80">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
