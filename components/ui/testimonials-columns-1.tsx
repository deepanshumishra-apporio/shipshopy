"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="w-full max-w-sm rounded-md border border-[#dcece6] bg-white p-7 shadow-none"
                key={`${name}-${i}`}
              >
                <div className="text-sm leading-7 text-[#52646f]">{text}</div>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    width={44}
                    height={44}
                    src={image}
                    alt={name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-[#07131f]/30"
                  />
                  <div className="flex flex-col">
                    <div className="font-extrabold leading-5 tracking-[-0.02em] text-[#07131f]">
                      {name}
                    </div>
                    <div className="text-sm leading-5 text-[#52646f]">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};







