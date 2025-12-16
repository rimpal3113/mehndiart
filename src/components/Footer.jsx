import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#653239] to-[#AF7A6D] text-[#E2D4BA] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#E2D4BA]">
            Rim mehndi art<span className="text-[#E2D4BA]">.</span>
          </h2>
          <p className="mt-4 text-[#E2D4BA]/90">
            Explore the creativity with our premium mehndi designs!  
            Beautiful designs for every occasion.
          </p>

          <div className="flex space-x-4 mt-4">
           
           
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#E2D4BA]">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/About" className="hover:text-white transition">About</a></li>
            <li><a href="/Services" className="hover:text-white transition">Services</a></li>
            <li><a href="/Gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="/Contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#E2D4BA]">Contact Us</h3>
          <p>Email: rimmehndiart31@gmail.com</p>
          <p>Phone: +91 8488904795</p>
          <p>Address: Anand, Gujarat, India</p>
        </div>
      </div>

      <div className="border-t border-[#E2D4BA]/40 text-center py-4 text-[#E2D4BA]/80">
        &copy; {new Date().getFullYear()} Rim Mehndi Art. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
