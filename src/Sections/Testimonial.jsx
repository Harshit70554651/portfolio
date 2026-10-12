import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Project Collaborator",
    message:
      "Harshit is a dedicated developer who focuses on creating clean, responsive and user-friendly interfaces.",
  },
  {
    name: "Aman Verma",
    role: "Development Mentor",
    message:
      "Harshit has a strong learning attitude and continuously improves his React, JavaScript and problem-solving skills.",
  },
  {
    name: "Priya Singh",
    role: "Project Teammate",
    message:
      "Harshit pays attention to UI details, takes feedback positively and always tries to improve the final product.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080B12] py-20 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300"
          >
            Testimonials
          </motion.span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What People Say
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Feedback from people I've worked and learned with.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F141D] p-6 shadow-xl transition-all duration-300 hover:border-purple-400/30 hover:shadow-purple-500/10 sm:p-7"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20"
              />

              <div className="relative flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Quote size={22} />
                </div>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <p className="relative mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                "{testimonial.message}"
              </p>

              <div className="relative mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-purple-500 to-fuchsia-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                }}
              />
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;