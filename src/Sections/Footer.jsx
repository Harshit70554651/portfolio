import React from "react";
import { motion } from "framer-motion";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoMailOutline,
  IoArrowUp,
  IoLocationOutline,
  IoCodeSlash,
} from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <IoLogoGithub />,
      name: "GitHub",
      href:"https://github.com/Harshit70554651"
      
    },
    {
      icon: <IoLogoLinkedin />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
    {
      icon: <IoLogoInstagram />,
      name: "Instagram",
      href: "https://www.instagram.com/your_harshit_3.0?exln=MWp1bGxnOHhqbTJnYg==",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#030712] text-white">

      {/* =================================================
          TOP ANIMATED LINE
      ================================================= */}

      <div className="relative h-[2px] w-full overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]"
        />

        {/* Small floating particles */}

        {[...Array(15)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-cyan-300"
            style={{
              left: `${(index * 73) % 100}%`,
              top: `${(index * 47) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        {/* =================================================
            CTA
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-xl"
        >

          {/* CTA Glow */}

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-[80px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>
              <div className="mb-3 flex items-center gap-2">

                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm font-medium text-emerald-400">
                  Available for opportunities
                </span>

              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Let's build something{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  amazing.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-gray-400">
                Have a project, opportunity or idea? Let's connect and create
                something meaningful together.
              </p>
            </div>

            <motion.a
              href="mailto:yourmail@gmail.com"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 35px rgba(34,211,238,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-7 py-4 font-semibold text-black transition-all"
            >
              <IoMailOutline className="text-xl" />
              Contact Me
            </motion.a>

          </div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >

            <div className="mb-5 flex items-center gap-3">

              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-400"
              >
                <IoCodeSlash />
              </motion.div>

              <div>
                <h3 className="text-xl font-bold">
                  Harshit<span className="text-cyan-400">.</span>
                </h3>

                <p className="text-xs text-gray-500">
                  MERN Stack Developer
                </p>
              </div>

            </div>

            <p className="max-w-md leading-7 text-gray-400">
              A passionate developer focused on creating modern, responsive
              and interactive web experiences using modern web technologies.
            </p>

            {/* Location */}

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <IoLocationOutline className="text-cyan-400" />
              Noida, India
            </div>

          </motion.div>

          {/* QUICK LINKS */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-5 font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {navLinks.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    onClick={(e) =>
                      scrollToSection(e, link.href)
                    }
                    className="group flex w-fit items-center gap-2 text-gray-400 transition-colors hover:text-cyan-400"
                  >

                    <span className="h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />

                    {link.name}

                  </a>

                </li>
              ))}

            </ul>

          </motion.div>

          {/* SOCIAL */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-5 font-semibold">
              Connect With Me
            </h3>

            <div className="flex gap-3">

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{
                    y: -6,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-gray-400 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  {social.icon}
                </motion.a>
              ))}

            </div>

            <p className="mt-5 text-sm text-gray-500">
              Let's connect and grow together.
            </p>

          </motion.div>

        </div>


        <div className="mt-14 border-t border-white/10 pt-7">

          <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-500 sm:flex-row">

            <p>
              © {currentYear} Harshit Shakya. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              Built with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="text-red-500"
              >
                ♥
              </motion.span>
              using React
            </div>

          </div>

        </div>

      </div>



      <motion.button
        onClick={scrollToTop}
        whileHover={{
          y: -5,
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        aria-label="Scroll to top"
        className="absolute bottom-7 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400 backdrop-blur-md transition-all hover:bg-cyan-400/20 sm:right-10"
      >
        <IoArrowUp />
      </motion.button>

    </footer>
  );
};

export default Footer;