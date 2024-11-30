import React, { useState } from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-secondary text-primary px-base">
      {/* Default Nav Bar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink className="no-underline" content="Uly" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink content="Projects" />
          <NavLink content="About Me" />
        </div>

        {/* Mobile Closed Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          <span className="text-primary text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Nav Bar with Menu Open  */}
      {/* Test */}
      {isOpen && (
        <div className="md:hidden p-4 mt-2">
          <NavLink content="Projects" />
          <NavLink content="About Me" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
