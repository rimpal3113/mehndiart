import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-gradient-to-r from-[#653239] to-[#AF7A6D] fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/src/assets/myylogo.png"
              alt="Logo"
              className="h-10 w-10 mr-2 rounded-full border-2 border-[#E2D4BA]"
            />
            <Link to="/" className="text-[#E2D4BA] text-2xl font-bold">
              Rim mehndi art
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[#E2D4BA] hover:text-white font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E2D4BA] hover:text-white focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#653239] to-[#AF7A6D] shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-[#E2D4BA] hover:bg-[#E2D4BA] hover:text-[#653239] transition duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
