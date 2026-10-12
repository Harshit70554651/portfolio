import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080B12] py-20 text-white sm:py-24"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
            Contact Me
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Have a project, job opportunity, or any question? Feel free to
            reach out to me.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-[#0F141D] p-7 shadow-xl sm:p-8">
              <h3 className="text-2xl font-bold">
                Get In Touch
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                I'm open to frontend, React, MERN stack and junior developer
                opportunities. You can contact me through email or social
                platforms.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href="mailto:shakyaharshi72email@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500 group-hover:text-white">
                    <Mail size={21} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm text-slate-300">
                      shakyaharshit72@gamil.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm text-slate-300">
                      +91 9897027523                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm text-slate-300">
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-3">
                <a
                  href="https://github.com/Harshit70554651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-400"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/harshit-shakya-1b9b5a326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-400"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="rounded-2xl border border-white/10 bg-[#0F141D] p-7 shadow-xl sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#080B12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#080B12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#080B12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                />
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#080B12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white transition hover:bg-purple-500 sm:w-auto"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;