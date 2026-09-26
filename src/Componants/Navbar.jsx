import React, { useEffect, useState } from "react";
import Logo from "../assets/Images/Logo.png";
import OverlayMenu from "./OverlayManu";
import { AiOutlineMenuFold } from "react-icons/ai";
import { time } from "framer-motion";
import { useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false)
  const lastScroll = useRef(0);
  const timeId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRect) {
          setForceVisible(true)
          setVisible(true)
        }
        else {
          setForceVisible(false)

        }
      }, { threshold : 0.1}
    )
    if (homeSection) observer.observe(homeSection)
    return () => {
      if (homeSection) observer.unobserve(homeSection)
    }
  }, [])

  // Open and close menu on button click
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true)
        return
      }

      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) {
        setVisible(true)

      } else 
        { setVisible(false)
        if(timeId.current) clearTimeout(timeId.current)
          timeId.current = setTimeout(()=>{
          setVisible(false)
          },3000)

       }
       lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, {passive:true})
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
      if(timeId.current) clearTimeout(timeId.current)
    }
  },[forceVisible])

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 px-6 py-1 z-[500]  w-full transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-50 h-20 shadow-cyan-800"
            />
          </div>

          {/* Menu Button */}
          <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <AiOutlineMenuFold />
            </button>
          </div>

          {/* Reach Out Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className=" bg-white text-black px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
            >
              Reach Out
            </a>
          </div>

        </div>
      </nav>

      {/* Overlay Menu */}
      <OverlayMenu
        isOpen={menuOpen}
        onClose={closeMenu}
      />
    </div>
  );
};

export default Navbar;