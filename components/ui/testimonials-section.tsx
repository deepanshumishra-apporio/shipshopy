"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Shipshopy made our daily dispatch calm. We can compare courier rates, print labels, and answer customer tracking questions without switching tools.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    name: "Riya Malhotra",
    role: "Ecommerce Operations Lead",
  },
  {
    text: "The tracking experience feels premium. Our support calls dropped because buyers now get clear updates from pickup to delivery.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    name: "Arjun Mehta",
    role: "D2C Founder",
  },
  {
    text: "Bulk booking and COD visibility helped us remove manual spreadsheets. The team onboarded quickly and dispatches are faster.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
    name: "Neha Rao",
    role: "Marketplace Manager",
  },
  {
    text: "We ship fragile products and documents. Shipshopy gives our team a clean flow for packaging rules, labels, and courier allocation.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
    name: "Kabir Sharma",
    role: "Logistics Head",
  },
  {
    text: "The rate calculator is simple, fast, and trustworthy. It helps our team choose the right partner before confirming a shipment.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    name: "Ananya Sen",
    role: "Growth Manager",
  },
  {
    text: "We needed a shipping platform that looked professional to customers and worked for operators. Shipshopy delivered both.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    name: "Dev Patel",
    role: "Retail Director",
  },
  {
    text: "Support is responsive and the dashboard is clear. Our team now has one place for courier performance and delivery exceptions.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=120&q=80",
    name: "Sara Khan",
    role: "Customer Experience",
  },
  {
    text: "Shipshopy helped us standardize shipping for domestic orders and international requests without adding operational overhead.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    name: "Ishan Kapoor",
    role: "Business Owner",
  },
  {
    text: "The platform feels fast and polished. It gives our brand a better post-purchase experience while saving the ops team time.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    name: "Maya Thomas",
    role: "Brand Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-[var(--site-gutter)] py-24 text-[#07131f]">
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <div className="rounded-full border border-[#dcece6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d] shadow-none">
            Testimonials
          </div>
          <h2 className="mt-6 text-[clamp(2rem,3.25vw,3.25rem)] font-semibold leading-[1.14] max-[700px]:text-3xl">
            Shipping teams trust Shipshopy every day.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#52646f]">
            Clear tracking, faster booking, cleaner operations, and support that
            helps teams ship with confidence.
          </p>
        </motion.div>

        <div className="mt-14 flex max-h-[620px] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>
      </div>
    </section>
  );
}








