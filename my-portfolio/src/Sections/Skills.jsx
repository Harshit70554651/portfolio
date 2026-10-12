import React, { useEffect, useRef, useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTypescript, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Skills = () => {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(1);

  const startX = useRef(0);
  const scrollStart = useRef(0);

  const skills = [
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
      color: "text-yellow-400",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      color: "text-orange-500",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      color: "text-blue-500",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      color: "text-cyan-400",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind CSS",
      color: "text-cyan-300",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      color: "text-blue-400",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "text-green-500",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      color: "text-gray-200",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDB",
      color: "text-green-400",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      color: "text-purple-500",
    },
  ];

 
  const duplicatedSkills = [...skills, ...skills];

  // Auto scrolling
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let animationFrame;

    const autoScroll = () => {
      if (!isDragging) {
        slider.scrollLeft += direction * 0.7;

        // Infinite loop
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }

        if (slider.scrollLeft <= 0 && direction === -1) {
          slider.scrollLeft = slider.scrollWidth / 2;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [direction, isDragging]);

  // Mouse down
  const handleMouseDown = (e) => {
    const slider = sliderRef.current;

    setIsDragging(true);

    startX.current = e.pageX - slider.offsetLeft;
    scrollStart.current = slider.scrollLeft;
  };

  // Mouse move
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const slider = sliderRef.current;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    // Detect drag direction
    if (walk > 0) {
      setDirection(-1);
    } else if (walk < 0) {
      setDirection(1);
    }

    slider.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full overflow-hidden bg-[#050816] text-white flex flex-col justify-center py-10"
    >
 

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 -right-32 w-[400px] h-[300px] rounded-full bg-emerald-500/10 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_60%)]" />
      </div>

      

      <div className="relative z-10 text-center mb-10 px-5">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-sm tracking-[5px] uppercase"
        >
          Technologies
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 max-w-xl mx-auto"
        >
          Technologies and tools I use to build modern, responsive and
          interactive web applications.
        </motion.p>
      </div>

      

      <div className="relative z-10 w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none bg-gradient-to-r from-[#050816] to-transparent" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 pointer-events-none bg-gradient-to-l from-[#050816] to-transparent" />

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex gap-5 overflow-x-auto px-10 sm:px-20 select-none scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: (index % skills.length) * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.08,
              }}
              className="group relative flex-shrink-0 w-[180px] sm:w-[210px] h-[180px] sm:h-[210px]"
            >
              <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              
              <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center gap-5 overflow-hidden transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-white/[0.08]">
                {/* Top shine */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <motion.div
                  whileHover={{
                    rotate: [0, -8, 8, 0],
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`text-6xl ${skill.color} drop-shadow-[0_0_15px_currentColor]`}
                >
                  {skill.icon}
                </motion.div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 mt-10 text-center text-gray-500 text-sm"
      >
        <span className="text-cyan-400">←</span>{" "}
        Drag to explore skills{" "}
        <span className="text-cyan-400">→</span>
      </motion.div>
    </section>
  );
};

export default Skills;