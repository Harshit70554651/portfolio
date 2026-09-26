import React, { useEffect, useMemo, useState } from "react";
import ParticleBackground from "../Componants/ParticalBackground";
import { motion } from "framer-motion";
import like from "../assets/Images/like.png";

import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

const social = [
  {
    Icon: IoLogoInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    Icon: IoLogoGithub,
    label: "GitHub",
    href: "https://github.com/Harshit70554651",
  },
  {
    Icon: IoLogoLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harshit-shakya-1b9b5a326/",
  },
];

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0px rgba(0,0,0,0))",
  },

  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 20px rgba(16,185,129,0.8))",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },

  tap: {
    scale: 0.8,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
    },
  },
};

const Home = () => {
  const roles = useMemo(
    () => [
      "MERN Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Software Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subindex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // =========================
  // TYPING ANIMATION
  // =========================

  useEffect(() => {
    const currentRole = roles[index];
    let timeout;

    if (!deleting && subindex < currentRole.length) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 80);
    } else if (!deleting && subindex === currentRole.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1300);
    } else if (deleting && subindex > 0) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, 45);
    } else if (deleting && subindex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [subindex, index, deleting, roles]);

  return (
    <main className="w-full min-h-screen">

      <section
        id="home"
        className="relative w-full min-h-screen overflow-hidden bg-black text-white"
      >

    

        <ParticleBackground />


        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className=" absolute -top-32 -left-32 w-[420px] h-[420px] rounded-fullbg-gradient-to-r from-[#302b63] via-[#00bf8f]to-[#1cd8d2] opacity-30blur-[130px] animate-pulse
            "
          />

          <div
            className="
              absolute
              -bottom-32
              -right-32
              w-[420px]
              h-[420px]
              rounded-full
              bg-gradient-to-r
              from-[#302b63]
              via-[#00bf8f]
              to-[#1cd8d2]
              opacity-30
              blur-[130px]
              animate-pulse
            "
          />

        </div>


        <div
          className="
            relative
            z-10
            w-full
            min-h-screen
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            px-6
            sm:px-10
            lg:px-16
            py-20
            lg:py-0
          "
        >


          <div
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              min-h-screen
              lg:min-h-0
              text-center
              lg:text-left
            "
          >

            <div
              className="
                w-full
                max-w-[650px]
                lg:pr-10
              "
            >

              <motion.div
                className="
                  min-h-[32px]
                  sm:min-h-[38px]
                  mb-3
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-semibold
                  tracking-wide
                  text-white
                  flex
                  items-center
                  justify-center
                  lg:justify-start
                "
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span>
                  {roles[index].substring(0, subindex)}
                </span>

                <span
                  className="
                    inline-block
                    w-[2px]
                    h-[1.1em]
                    ml-1
                    bg-cyan-400
                    animate-pulse
                  "
                />
              </motion.div>


              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[52px]
                  font-bold
                  leading-[1.08]
                  tracking-tight
                "
              >

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#1cd8d2]
                    via-[#00bf8f]
                    to-[#302b63]
                  "
                >
                  Hello, I Am
                </span>

              

                <span
                  className="
                    block
                    mt-2
                    text-white
                    whitespace-nowrap
                  "
                >
                  Harshit Shakya
                </span>

              </motion.h1>


              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-gray-400
                  leading-7
                  max-w-[590px]
                  mx-auto
                  lg:mx-0
                "
              >
                I’m a passionate MERN Stack Developer skilled in
                building responsive, user-friendly web applications
                with modern technologies, clean code, and creative
                solutions.
              </motion.p>

          
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  lg:justify-start
                  gap-4
                "
              >


                <motion.a
                  href="#projects"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 25px rgba(0,191,143,0.35)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-6
                    py-3
                    rounded-full
                    font-medium
                    text-sm
                    sm:text-base
                    text-white
                    bg-gradient-to-r
                    from-[#1cd8d2]
                    via-[#00bf8f]
                    to-[#302b63]
                    transition-all
                  "
                >
                  View My Work
                </motion.a>

               
                <motion.a
                  href="/resume.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 20px rgba(255,255,255,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-6
                    py-3
                    rounded-full
                    font-medium
                    text-sm
                    sm:text-base
                    text-green-500
                    border
                    border-gray-600
                    bg-white
                    hover:bg-gray-100
                    transition-all
                  "
                >
                  My Resume
                </motion.a>

              </motion.div>

         

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.7,
                }}
                className="
                  mt-8
                  flex
                  justify-center
                  lg:justify-start
                  gap-5
                  text-2xl
                "
              >

                {social.map(({ Icon, label, href }) => (
                  <motion.a
                    href={href}
                    key={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    variants={glowVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="
                      text-gray-400
                      hover:text-white
                      transition-colors
                    "
                  >
                    <Icon />
                  </motion.a>
                ))}

              </motion.div>

            </div>
          </div>



          <div
            className="
              relative
              hidden
              lg:flex
              w-full
              h-full
              items-center
              justify-center
            "
          >

            {/* Image Glow */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[8%]
                top-1/2
                -translate-y-1/2
                w-[260px]
                h-[460px]
                rounded-full
                bg-gradient-to-b
                from-[#1cd8d2]
                via-[#00bf8f]
                to-[#302b63]
                opacity-25
                blur-[55px]
              "
            />



            <motion.img
              src={like}
              alt="Harshit Shakya"
              draggable="false"
              className="
                relative
                z-10
                object-contain
                pointer-events-none
                select-none
              "
              style={{
                width: "min(35vw, 560px)",
                maxHeight: "78vh",
              }}
              initial={{
                opacity: 0,
                x: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: "easeOut",
              }}
            />

          </div>

        </div>
      </section>
    </main>
  );
};

export default Home;