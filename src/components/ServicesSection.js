"use client";

import { useState } from "react";
import { services } from "@/data/services";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(1);

  const activeService = services.find((s) => s.id === activeId);

  const toggleService = (id) => {
    setActiveId(id);
  };

  return (
    <section id="services" className="w-full bg-white">
      {/* 🔥 HEADING (subtle fade up) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-6 lg:px-20 pt-16 lg:pt-24 pb-10"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Services
        </p>

        <h2 className="text-2xl lg:text-4xl text-black">What We Do Best</h2>
      </motion.div>

      {/* MAIN LAYOUT */}
      <div className="flex h-screen w-full flex-col lg:flex-row overflow-hidden">
        {/* LEFT */}
        <div className="flex w-full lg:w-[45%] bg-white lg:px-20 px-6">
          <div className="flex flex-1 flex-col justify-center">
            {services.map((service, index) => {
              const isActive = service.id === activeId;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="border-b border-neutral-200"
                >
                  <div
                    onClick={() => toggleService(service.id)}
                    className="flex cursor-pointer items-center justify-between py-4 lg:py-5"
                  >
                    <span
                      className={`transition-colors duration-300 text-base lg:text-[22px] ${
                        isActive ? "text-black" : "text-neutral-800"
                      }`}
                    >
                      {service.title}
                    </span>

                    <span
                      className={`flex h-8 w-8 items-center justify-center text-2xl font-light transition-transform duration-300 ${
                        isActive ? "text-black rotate-45" : "text-neutral-400"
                      }`}
                    >
                      +
                    </span>
                  </div>

                  {/* subtle expand (no harsh animation) */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="pb-4 text-sm leading-relaxed text-neutral-500">
                        {service.description}
                      </p>

                      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden lg:hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden w-full bg-white lg:block lg:w-[55%] overflow-hidden">
          <div className="absolute inset-10">
            {services.map((service) => (
              <motion.div
                key={service.id}
                animate={{
                  opacity: service.id === activeId ? 1 : 0,
                  scale: service.id === activeId ? 1 : 1.02,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="55vw"
                  priority={service.id === 1}
                />
              </motion.div>
            ))}

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Bottom label */}
            <motion.div
              key={activeService?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end"
            >
              <span className="text-xs uppercase tracking-[0.15em] opacity-80">
                Project
              </span>

              <span className="text-sm font-medium flex items-center gap-2">
                {activeService?.title}
                <span className="opacity-70">↗</span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
