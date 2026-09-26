import { AnimatePresence, useMotionValueEvent, useScroll, motion, easeOut } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import news1 from "../assets/Images/news1.jpeg";
import news2 from "../assets/Images/news2.jpeg";
import port1 from "../assets/Images/port1.jpeg";
import port2 from "../assets/Images/port2.jpeg";
import job1 from "../assets/Images/job1.jpeg";
import jsb2 from "../assets/Images/jsb2.jpeg";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

const Project = () => {
  const isMobile = useIsMobile();
  const scenRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Job Seeker Application",
        link: "",
        bgColor: "#0d4d3d",
        image: isMobile ? jsb2 : job1,
      },
      {
        title: "News Portal Website",
        link: "",
        bgColor: "#0d4d3d",
        image: isMobile ? news2 : news1,
      },
      {
        title: "Portfolio",
        link: "",
        bgColor: "#0d4d3d",
        image: isMobile ? port2 : port1,
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: scenRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map(
    (_, i) => (i + 1) / projects.length
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={scenRef}
      className="text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2
          className={`text-3xl font-semibold z-10 text-center ${
            isMobile ? "mt-4" : "mt-8"
          }`}
        >
          My Work
        </h2>

        <div className={`relative w-full flex-1 items-center justify-center flex-col ${isMobile ? "mt-4 " : ""}`}>
          {projects.map((project, idx) => (
            <div  
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                activeIndex === idx? "opacity-100 z-20": "opacity-0 z-0 sm:z-10"
              }`}
              style={{width:"85%" , maxWidth: "1200px"}}
              
            >
  <AnimatePresence mode="wait">
    {activeIndex === idx && (
      <motion.h3
       key={project.title}
       initial={{opacity:0, y:-30}}
       animate={{opacity:1, y:0}}
        exit={{opacity:0, y:30}}
        transition={{duration:0.5 , ease: easeOut}}
       
        className={`block text-center text-[clamp(2rem,6vW,5rem)] text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0 italic font-samibold ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"} ${isMobile ? "-mt-24" : ""}`}
        // style={{width:"85%", maxWidth: "1200px"}}
        style={{
          zIndex:5,
          textAlign: isMobile ? "center" : "left",
          
        }}
      >
        {project.title}
      </motion.h3>
    )}

  </AnimatePresence>

              {/* <img
                src={project.image}
                alt={project.title}
                className="max-w-[90vw] max-h-[70vh] object-contain rounded-xl"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;