"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import routeMap from "../../assets/ChatGPT Image Jun 9, 2026, 02_05_12 PM.png";
import logisticsBanner from "../../assets/shipshopy-logistics-banner.png";

import { ease, fadeUp, scaleIn, slideLeft, staggerGrid, cardItem, vp } from "@/lib/motion";

const stats = [
  ["220+", "serviceable regions"],
  ["18K+", "monthly shipments"],
  ["48hr", "average delivery time"],
  ["98.7%", "on-time updates"],
];

const regions = [
  { name: "Gurugram",  state: "Haryana",     type: "Headquarters & primary hub", copy: "Same-day and next-day pickup coverage across all sectors. Home to the Shipshopy operations centre.",                    tags: ["Same-day pickup", "Next-day delivery", "COD"] },
  { name: "Delhi NCR", state: "Delhi",        type: "Metro hub",                 copy: "Full coverage across Delhi, Noida, Faridabad, and Ghaziabad with multiple daily courier sweeps.",                         tags: ["Metro coverage", "Multiple sweeps", "Express lanes"] },
  { name: "Pan Haryana",state: "Haryana",     type: "State coverage",            copy: "Pickup and delivery operations across all major districts — Faridabad, Ambala, Hisar, Rohtak, and more.",                tags: ["District-wide", "B2C & B2B", "COD ready"] },
  { name: "Mumbai",    state: "Maharashtra",  type: "Metro hub",                 copy: "Western metro coverage through partner courier networks with tracked last-mile and express delivery options.",             tags: ["Express delivery", "Last-mile", "Live tracking"] },
  { name: "Bengaluru", state: "Karnataka",    type: "Metro hub",                 copy: "Tech corridor and ecommerce seller hub. Full coverage with fast transit and real-time tracking.",                         tags: ["Ecommerce lanes", "Fast transit", "API ready"] },
  { name: "Hyderabad", state: "Telangana",    type: "Regional hub",              copy: "Reliable pickup and delivery across Hyderabad and Secunderabad with verified last-mile networks.",                        tags: ["Regional hub", "COD", "Next-day"] },
  { name: "Pune",      state: "Maharashtra",  type: "Regional hub",              copy: "Growing ecommerce and D2C brand hub. Shipshopy covers Pune city and surrounding pincode zones.",                          tags: ["D2C ready", "City coverage", "Returns"] },
  { name: "Pan India", state: "All states",   type: "National network",          copy: "26,000+ serviceable pincodes across India through Shipshopy's multi-courier routing engine.",                            tags: ["26K+ pincodes", "Multi-courier", "Domestic & intl"] },
];

const coverageFeatures = [
  { title: "Same-day pickup",      copy: "Available across priority zones. Book before the cutoff and your parcel is collected the same day." },
  { title: "Next-day delivery",    copy: "Express lanes connect metro-to-metro and major cities with guaranteed next-day delivery windows." },
  { title: "Pan-India reach",      copy: "26,000+ serviceable pincodes reached through Shipshopy's multi-courier routing engine." },
  { title: "International shipping",copy: "Ship to 220+ countries. Customs documentation, tariff handling, and international tracking included." },
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#07131f]">

      {/* Hero */}
      <section className="px-[var(--site-gutter)] pt-7 pb-0">
        <div className="grid min-h-[520px] grid-cols-[minmax(400px,0.9fr)_minmax(0,1.1fr)] items-center gap-16 pt-20 max-[1050px]:grid-cols-1 max-[700px]:min-h-0 max-[700px]:pt-14 max-[700px]:pb-10">
          <motion.div
            className="max-w-xl"
            variants={staggerGrid(0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex rounded-full border border-[#dcece6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#0f8a7d]">
              Delivery network
            </motion.div>
            <motion.h1 variants={fadeUp} className="mb-6 text-[clamp(2.25rem,3.5vw,3.85rem)] font-semibold leading-[1.1] text-[#07131f] max-[700px]:text-[clamp(2rem,9vw,2.75rem)]">
              Courier reach across India and beyond.
            </motion.h1>
            <motion.p variants={fadeUp} className="mb-8 max-w-lg text-[0.95rem] leading-7 text-[#52646f]">
              Shipshopy connects your business to dependable pickup and last-mile lanes across 220+ regions — from Gurugram to global destinations.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/shipping">
                  Start shipping
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#dcece6] bg-white px-6 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]" href="/support">
                  Check my pincode
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full max-w-[700px] justify-self-end max-[1050px]:justify-self-center"
            variants={slideLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.3, ease }}
            whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
          >
            <Image
              className="h-auto w-full rounded-md border border-[#dcece6]"
              src={routeMap}
              alt="India delivery network route map"
              priority
              sizes="(max-width: 900px) 92vw, 48vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section
        className="mx-[var(--site-gutter)] my-16 grid grid-cols-4 overflow-hidden rounded-md border border-[#dcece6] bg-white max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
        variants={staggerGrid(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        {stats.map(([value, label]) => (
          <motion.div
            className="grid justify-items-center gap-2 border-r border-[#dcece6] p-8 last:border-r-0 max-[1050px]:odd:border-r max-[1050px]:even:border-r-0 max-[700px]:border-r-0 max-[700px]:border-b max-[700px]:last:border-b-0"
            key={label}
            variants={fadeUp}
          >
            <strong className="text-3xl font-semibold text-[#07131f]">{value}</strong>
            <span className="text-sm font-medium text-[#52646f]">{label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* Coverage features */}
      <section className="bg-[#f7fffb] px-[var(--site-gutter)] py-16">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Coverage types</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Every delivery speed and distance covered
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-4 gap-4 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {coverageFeatures.map(({ title, copy }) => (
            <motion.article
              className="rounded-md border border-[#dcece6] bg-white p-6"
              key={title}
              variants={cardItem}
              whileHover={{ y: -5, borderColor: "#b8ddd5", transition: { duration: 0.2 } }}
            >
              <div className="mb-4 h-1.5 w-8 rounded-full bg-[#0f8a7d]" />
              <h3 className="mb-3 text-base font-semibold text-[#07131f]">{title}</h3>
              <p className="text-sm leading-6 text-[#52646f]">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Regions */}
      <section className="px-[var(--site-gutter)] py-20">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Service regions</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Key locations served
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#52646f]">
            Shipshopy covers these priority zones with dedicated courier sweeps and SLA commitments.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-4 gap-4 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {regions.map(({ name, state, type, copy, tags }) => (
            <motion.article
              className="rounded-md border border-[#dcece6] bg-[#f7fffb] p-6"
              key={name}
              variants={cardItem}
              whileHover={{ y: -5, backgroundColor: "#ffffff", borderColor: "#b8ddd5", transition: { duration: 0.2 } }}
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-[#07131f]">{name}</h3>
                  <p className="text-xs font-medium text-[#52646f]">{state}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#dcece6] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0f8a7d]">
                  {name === "Pan India" ? "National" : "Active"}
                </span>
              </div>
              <p className="mb-2 text-xs font-semibold text-[#0f8a7d]">{type}</p>
              <p className="mb-4 text-sm leading-6 text-[#52646f]">{copy}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span className="rounded-full border border-[#dcece6] bg-white px-2.5 py-0.5 text-xs font-semibold text-[#07131f]" key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Map image band */}
      <motion.section className="px-[var(--site-gutter)] pt-16 pb-6 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Logistics network</p>
        <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
          Built for India&apos;s fastest-growing commerce corridors
        </h2>
      </motion.section>
      <motion.section
        className="mx-[var(--site-gutter)] mb-16 overflow-hidden rounded-md border border-[#dcece6] bg-white p-4"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <Image
          className="h-auto max-h-[420px] w-full rounded-sm object-cover"
          src={logisticsBanner}
          alt="Shipshopy India logistics coverage map"
          sizes="100vw"
        />
      </motion.section>

      {/* CTA */}
      <motion.section
        className="mx-[var(--site-gutter)] mb-20 overflow-hidden rounded-md border border-[#dcece6] bg-[#f7fffb] px-12 py-14 text-center max-[700px]:px-6 max-[700px]:py-10"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Check coverage</p>
        <h2 className="mx-auto mb-4 max-w-xl text-[clamp(1.9rem,3vw,2.75rem)] font-semibold leading-[1.1] text-[#07131f]">
          Not sure if we cover your pincode?
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-[#52646f]">
          Contact our team with your origin and destination pincodes. We&apos;ll confirm coverage and recommend the best service tier.
        </p>
        <div className="flex justify-center gap-4 max-[700px]:flex-col max-[700px]:items-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/support">
              Check my pincode
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#dcece6] bg-white px-6 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]" href="/shipping">
              View services
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}
