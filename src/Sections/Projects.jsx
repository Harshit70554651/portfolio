import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
  easeOut,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import news1 from "../assets/Images/news1.jpeg";
import news2 from "../assets/Images/news2.jpeg";
import port1 from "../assets/Images/port1.jpeg";
import port2 from "../assets/Images/port2.jpeg";
import job1 from "../assets/Images/job1.jpeg";
import jsb2 from "../assets/Images/jsb2.jpeg";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMobile;
};

const Project = () => {
  const isMobile = useIsMobile();
  const scenRef = useRef(null);

  const projects = [
    {
      title: "Task Management System",
      link: "https://moonlit-cascaron-75b5d3.netlify.app/",
      bgColor: "#0d4d3d",
      image: isMobile ? jsb2 : job1,
    },
    {
      title: "News Portal Website",
      link: "https://timely-florentine-4965fa.netlify.app/",
      bgColor: "#0d4d3d",
      image: isMobile ? news2 : news1,
    },
    {
      title: "Portfolio",
      link: "https://harshit-codes.netlify.app/",
      bgColor: "#0d4d3d",
      image: isMobile ? port2 : port1,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: scenRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      projects.length - 1,
      Math.floor(value * projects.length)
    );

    setActiveIndex(index);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={scenRef}
      className="text-white"
      style={{
        height: `${projects.length * 100}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <h2
          className={`z-10 text-center text-3xl font-semibold ${
            isMobile ? "mt-4" : "mt-8"
          }`}
        >
          My Work
        </h2>

        <div
          className={`relative flex w-full flex-1 flex-col items-center justify-center ${
            isMobile ? "mt-4" : ""
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
                activeIndex === index
                  ? "z-20 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
              style={{
                width: "85%",
                maxWidth: "1200px",
              }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.5,
                      ease: easeOut,
                    }}
                    className={`block text-center text-[clamp(2rem,6vw,5rem)] font-bold italic text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] ${
                      isMobile ? "-mt-24" : ""
                    }`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div
                className={`relative h-[62vh] w-full overflow-hidden rounded-xl bg-black/20 shadow-2xl md:h-[66vh] md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                  isMobile ? "mb-6" : "mb-10 sm:mb-12"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full rounded-xl object-cover"
                  style={{
                    filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2">
          <a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-gray-200"
            aria-label={`View ${activeProject.title}`}
          >
            View Live Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;