import React, { useEffect, useMemo, useState } from 'react';
import ParticleBackground from '../Componants/ParticalBackground';
import { motion } from 'framer-motion';
import like from "../assets/Images/like.jpeg"
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5';

const social = [
  {
    Icon: IoLogoInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  {
    Icon: IoLogoGithub,
    label: 'GitHub',
    href: 'https://github.com/Harshit70554651',
  },
  {
    Icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harshit-shakya-1b9b5a326/',
  },
];

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))',
  },

  hover: {
    scale: 1.2,
    y: -3,
    filter:
      'drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },

  tap: {
    scale: 0.8,
    y: 0,
    filter: 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 35,
    },
  },
};

const Home = () => {
  const roles = useMemo(
    () => ['MERN Full Stack Developer', 'Software Developer'],
    []
  );

  const [index, setIndex] = useState(0);
  const [subindex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!deleting && subindex < current.length) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 100);
    } else if (!deleting && subindex === current.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1200);
    } else if (deleting && subindex > 0) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, 50);
    } else if (deleting && subindex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [subindex, index, deleting, roles]);

  return (
    <div className="w-full min-h-screen">

      <section
        id="home"
        className="relative w-full min-h-screen bg-black overflow-hidden"
      >

        {/* Particle Background */}
        <ParticleBackground />

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">

          <div
            className="absolute -top-32 -left-32
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vh] sm:h-[50vh] md:h-[40vh]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-40
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse"
          />

          <div
            className="absolute bottom-0 right-0
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vh] sm:h-[50vh] md:h-[40vh]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-40
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse"
          />

        </div>

        {/* Main Content */}
        <div
          className="relative z-10 w-full min-h-screen max-w-7xl
          mx-auto grid grid-cols-1 lg:grid-cols-2
          items-center px-6 sm:px-10 lg:px-16"
        >

          {/* Left Content */}
          <div
            className="flex flex-col justify-center
            min-h-screen text-center lg:text-left
            relative py-20"
          >

            <div
              className="w-full max-w-[48rem] mx-auto
              lg:mx-0 lg:pr-12"
            >

              {/* Typing Animation */}
              <motion.div
                className="mb-4 text-lg sm:text-2xl md:text-3xl
                font-semibold text-white tracking-wide min-h-[2.5rem]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span>{roles[index].substring(0, subindex)}</span>

                <span
                  className="inline-block w-[3px] h-[1em]
                  ml-1 bg-white animate-pulse align-middle"
                />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl
                lg:text-5xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
                drop-shadow-lg leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay:0.2 }}
              >
                Hello, I Am

                <br />

                <motion.span
                  className="text-white text-5xl sm:text-6xl
                  md:text-7xl lg:text-6xl inline-block mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                >
                  Harshit Shakya
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="mt-6 text-base sm:text-lg md:text-xl
                text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.2 }}
              >
                I’m a passionate MERN Stack Developer skilled in
                building responsive, user-friendly web applications
                with modern technologies, clean code, and creative
                solutions.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-8 flex flex-wrap items-center
                justify-center lg:justify-start gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >

                <a
                  href="#project"
                  className="px-6 py-3 rounded-full font-medium
                  text-base sm:text-lg text-white
                  bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
                  shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  View My Work
                </a>

                <a
                  href="/resume.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-medium
                  text-green-400 text-base sm:text-lg
                  border border-gray-500
                  hover:bg-white hover:text-black
                  transition-all duration-300 bg-white"
                >
                  My Resume
                </a>

              </motion.div>

              {/* Social Icons */}
              <div
                className="mt-10 flex justify-center
                lg:justify-start gap-6 text-2xl md:text-3xl"
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
                    className="text-gray-300 hover:text-white"
                  >
                    <Icon />
                  </motion.a>
                ))}

              </div>

            </div>
          </div>
<div className='relative hidden lg:block w-full h-full'>
   <div 
   className='absolute top-1/2 translate-y-1/2 pointer-events-none'
   style={{
    right: "10px", width: "min(22vw, 410px)", height: "min(40vh, 760px)", borderRadius: "50%",
    filter: "blur(30px) ", opacity: 0.32, background:"conic-gradient( from 0deg, #1cd8d2, #00bf8f, #303b63, #1cd8d2)"
   }}
   />
  <motion.img 
    src={like} 
    alt="Harshit" 
    className='absolute top-1/2 -translate-y-1/2 object-contain pointer-events-none'
    style={{
      right: "-30px",
      width: "min(45vw, 780px)",
      maxHeight: "90vh"
    }}
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  />
</div>

          <div>
            < motion.img src="" alt="" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;