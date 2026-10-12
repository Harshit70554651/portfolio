import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/Images/Logo.png";
import OverlayMenu from "./OverlayManu";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 z-[500] w-full px-6 py-1 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center  text-white text-4xl font-bold">
            <img
              src={Logo}
              alt="Logo"
              className="h-15 w-20 shadow-cyan-800"
            
              
            />
         <p>arshit</p>
          </div>

          <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <button
              onClick={toggleMenu}
              className="text-3xl text-white focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <AiOutlineMenuFold />
            </button>
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2 font-medium text-black shadow-lg transition-opacity duration-300 hover:opacity-90"
            >
              Reach Out
            </a>
          </div>
        </div>
      </nav>

      <OverlayMenu
        isOpen={menuOpen}
        onClose={closeMenu}
      />
    </div>
  );
};

export default Navbar;