import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Development Apprentice",
    company: "DUCAT, Noida",
    duration: "Ongoing",
    type: "Apprenticeship",
    description:
      "Currently developing practical software and web-development skills through guided learning, hands-on projects, and real-world development workflows.",
    skills: ["Web Development", "React.js", "JavaScript", "Software Development"],
  },
  {
    role: "MERN Stack Trainee",
    company: "Techpile Technology Pvt. Ltd., Lucknow",
    duration: "July 2025",
    type: "Summer Training",
    description:
      "Completed a 45-day MERN Stack training program covering HTML, CSS, JavaScript, React.js, and MongoDB. Applied frontend and database concepts through hands-on projects.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080B12] py-24 text-white"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
            My Journey
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My professional learning journey, development experience, and
            hands-on exposure to modern web technologies.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-purple-400/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                variants={cardVariants}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "sm:justify-start"
                    : "sm:justify-end"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="ml-12 w-full sm:ml-0 sm:w-[46%]"
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F141D]/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:shadow-purple-500/10 sm:p-7">
                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

                    <div className="relative">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                            {experience.type}
                          </p>

                          <h3 className="text-xl font-bold text-white sm:text-2xl">
                            {experience.role}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-slate-300">
                            {experience.company}
                          </p>
                        </div>

                        <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                          {experience.duration}
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-slate-400">
                        {experience.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-purple-400/10 bg-purple-500/5 px-3 py-1.5 text-xs font-medium text-purple-200 transition-colors duration-300 group-hover:border-purple-400/20 group-hover:bg-purple-500/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="absolute left-5 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#080B12] bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.7)] sm:left-1/2"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;