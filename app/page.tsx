"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import dashboardMockup from "../assets/shipshopy-dashboard.png";
import logisticsBanner from "../assets/shipshopy-logistics-banner.png";
import packageBoxes from "../assets/shipshopy-packages-premium.png";
import pricingCourier from "../assets/shipshopy-rate-calculator-premium.png";
import routeMap from "../assets/ChatGPT Image Jun 9, 2026, 02_05_12 PM.png";
import serviceGallery from "../assets/shipshopy-service-gallery-clean.png";
import workflowBooking from "../assets/workflow-booking-panel.png";
import workflowDelivery from "../assets/workflow-delivery-panel.png";
import workflowPacking from "../assets/workflow-packing-panel.png";
import workflowTransportation from "../assets/workflow-transportation-panel.png";
import vanImage from "../assets/shipshopy-van-premium.png";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ease, fadeUp, scaleIn, slideRight, slideLeft, staggerGrid, cardItem, vp } from "@/lib/motion";

// ── Data ──────────────────────────────────────────────────────────
const integrations = [
  ["SH",  "Shopify",      "#96bf48"],
  ["WC",  "WooCommerce",  "#7f54b3"],
  ["AMZ", "Amazon",       "#ff9900"],
  ["FK",  "Flipkart",     "#2874f0"],
  ["MS",  "Meesho",       "#f43397"],
  ["UC",  "Unicommerce",  "#0f8a7d"],
];

const serviceLabels = [
  "Home Courier Pickup",
  "Airport Courier",
  "Hotel Courier",
  "PG / Student Courier",
  "Ship from world to India",
  "Ship from India to the World",
  "Send medicines globally",
  "Send documents from India",
];

const processSteps = [
  { number: "01", title: "Booking",        copy: "Create shipments in seconds — single or bulk — with address validation, courier selection, and pickup slot booking.", link: "Start booking",      image: workflowBooking,        imageAlt: "3D calendar with a checked booking date"           },
  { number: "02", title: "Packing",        copy: "Set packaging rules, fragile labels, insurance options, and document protection before dispatch.",                  link: "Set packing rules",   image: workflowPacking,        imageAlt: "3D green parcel with handling labels"               },
  { number: "03", title: "Transportation", copy: "Every order is auto-routed to the best courier for speed, coverage, and price — no manual allocation.",             link: "Plan courier routes", image: workflowTransportation,  imageAlt: "3D teal delivery truck in motion"                   },
  { number: "04", title: "Delivery",       copy: "Customers receive live tracking links, delivery alerts, and OTP or signature-based proof of delivery.",             link: "Track deliveries",    image: workflowDelivery,       imageAlt: "3D parcel and location pin with delivery checkmark" },
];
const processAccents = ["#0f8a7d", "#38c39f", "#0f8a7d", "#38c39f"];

const specialties = [
  ["01", "Easy to order",     "Automated booking for domestic, ecommerce, and B2B shipments in seconds."],
  ["02", "Cash on delivery",  "COD collection, remittance tracking, and reconciliation in one view."],
  ["03", "Live tracking",     "Branded tracking links, status webhooks, and real-time delivery updates."],
  ["04", "Return management", "Reverse pickup booking, return tracking, and inventory update in one flow."],
  ["05", "Rate comparison",   "Compare courier cost by weight, distance, and speed before every booking."],
  ["06", "Bulk operations",   "CSV upload, bulk label generation, and mass dispatch for high-volume sellers."],
];

const stats = [
  ["18K+",  "Monthly shipments",   "Processed across India every month"],
  ["220+",  "Serviceable regions", "Domestic pincodes and international lanes"],
  ["98.7%", "On-time updates",     "Real-time scan events per shipment"],
];

// ── Shared section heading ────────────────────────────────────────
function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <motion.div
      className="relative z-10 mx-auto mb-12 max-w-3xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={vp}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">{eyebrow}</p>
      <h2 className="text-[clamp(2rem,3.25vw,3.25rem)] font-semibold leading-[1.12] text-[#07131f]">{title}</h2>
      {copy && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#52646f]">{copy}</p>}
    </motion.div>
  );
}

// ── Outside-card heading (used in multiple sections) ──────────────
function OutsideHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.section
      className="px-[var(--site-gutter)] pb-6 pt-8 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={vp}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">{eyebrow}</p>
      <h2 className="mx-auto max-w-3xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">{title}</h2>
    </motion.section>
  );
}

// ── Animated CTA button ───────────────────────────────────────────
function Btn({ href, primary, children }: { href: string; primary?: boolean; children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
      <Link
        href={href}
        className={
          primary
            ? "inline-flex min-h-12 items-center justify-center rounded-full bg-[#0f8a7d] px-7 text-sm font-bold text-white transition hover:bg-[#087f72]"
            : "inline-flex min-h-12 items-center justify-center rounded-full border border-[#dcece6] bg-white px-7 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]"
        }
      >
        {children}
      </Link>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ffffff] text-[#07131f]">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#ffffff] px-[var(--site-gutter)] pb-24 pt-7 max-[700px]:pb-16">
        {/* Animated background glows */}
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute -top-40 left-1/3 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[#0f8a7d]/[0.06] blur-3xl" />
          <div className="absolute right-0 top-0 h-[480px] w-[480px] rounded-full bg-[#38c39f]/[0.07] blur-3xl" />
        </motion.div>

        <div className="relative z-10 grid min-h-[720px] grid-cols-[minmax(430px,0.92fr)_minmax(0,1.08fr)] items-center gap-20 pt-24 max-[1050px]:grid-cols-1 max-[1050px]:gap-14 max-[700px]:min-h-0 max-[700px]:pt-14">

          {/* Left — staggered entrance */}
          <motion.div
            className="max-w-xl"
            variants={staggerGrid(0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#dcece6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#0f8a7d]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0f8a7d]" />
              Courier platform for growing sellers
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-6 text-[clamp(2.6rem,4.2vw,4.6rem)] font-semibold leading-[1.05] tracking-tight text-[#07131f] max-[700px]:text-[clamp(2.2rem,9vw,3rem)]"
            >
              Ship smarter.<br />
              <span className="text-[#0f8a7d]">Deliver better.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mb-8 max-w-lg text-base leading-7 text-[#52646f]">
              Book pickups, compare courier rates, track every order, and keep customers updated — all from one polished logistics platform built for Indian ecommerce.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-3">
              <Btn href="/support" primary>Start shipping free</Btn>
              <Btn href="/shipping">See how it works &rarr;</Btn>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#8aa09b]">Already have a shipment?</p>
              <motion.div whileHover={{ x: 4 }} className="w-fit">
                <Link
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#dcece6] bg-[#f7fffb] px-6 text-sm font-bold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]"
                  href="/tracking"
                >
                  Track your shipment
                  <span className="text-[#0f8a7d]">→</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#dcece6] pt-7"
            >
              {[["18K+", "monthly shipments"], ["220+", "regions covered"], ["98.7%", "on-time updates"]].map(([value, label]) => (
                <div key={label}>
                  <p className="text-xl font-semibold text-[#07131f]">{value}</p>
                  <p className="mt-0.5 text-xs font-medium text-[#52646f]">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image slides in */}
          <motion.div
            className="relative w-full max-w-[760px] justify-self-end max-[1050px]:justify-self-center"
            variants={slideLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            {/* Floating card — top left */}
            <motion.div
              className="absolute -left-5 top-8 z-10 rounded-xl border border-[#dcece6] bg-white/95 p-4 backdrop-blur max-[700px]:hidden"
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease }}
            >
              <p className="text-xs font-medium text-[#52646f]">Today shipped</p>
              <p className="text-2xl font-semibold text-[#07131f]">1,286</p>
              <p className="mt-1 text-xs font-semibold text-[#38c39f]">↑ 12% vs yesterday</p>
            </motion.div>

            {/* Floating card — bottom right */}
            <motion.div
              className="absolute -bottom-5 right-4 z-10 rounded-xl border border-[#dcece6] bg-white/95 p-4 backdrop-blur max-[700px]:hidden"
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.5, ease }}
            >
              <div className="mb-1.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#38c39f]" />
                <p className="text-xs font-semibold text-[#07131f]">On-time delivery</p>
              </div>
              <p className="text-2xl font-semibold text-[#07131f]">98.7%</p>
            </motion.div>

            <Image
              className="h-auto w-full rounded-2xl border border-[#dcece6]"
              src={dashboardMockup}
              alt="Shipshopy shipping dashboard interface"
              priority
              sizes="(max-width: 900px) 92vw, 48vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── INTEGRATIONS ──────────────────────────────────────────── */}
      <section className="border-y border-[#dcece6] bg-[#f7fffb] px-[var(--site-gutter)] py-16">
        <motion.div
          className="mb-10 flex items-end justify-between gap-6 max-[700px]:block"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Integrations</p>
            <h2 className="max-w-xl text-[clamp(1.75rem,2.5vw,2.5rem)] font-semibold leading-[1.15] text-[#07131f]">
              Plugs into the platforms your store already runs on
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#52646f] max-[700px]:mt-4">
            Connect Shopify, WooCommerce, Amazon, Flipkart, and more. Orders sync automatically — no manual entry.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-6 gap-4 max-[1050px]:grid-cols-3 max-[700px]:grid-cols-2"
          variants={staggerGrid(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {integrations.map(([mark, label, color]) => (
            <motion.article
              className="group cursor-default rounded-xl border border-[#dcece6] bg-white p-5"
              key={label}
              variants={cardItem}
              whileHover={{ y: -5, borderColor: "#b8ddd5", transition: { duration: 0.2 } }}
            >
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-lg text-xs font-bold text-white" style={{ backgroundColor: color }}>
                {mark}
              </span>
              <h3 className="text-sm font-semibold text-[#07131f]">{label}</h3>
              <p className="mt-1 text-xs text-[#52646f]">Connected</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── COURIER SERVICES ──────────────────────────────────────── */}
      <section className="bg-[#ffffff] px-[var(--site-gutter)] pb-20 pt-24 max-[700px]:pt-16">
        <SectionHeading
          eyebrow="Domestic and international"
          title="Courier services for every move, package, and customer"
          copy="A complete service portfolio — home pickups, travel courier, student relocation, global medicine shipping, and document delivery."
        />
        <motion.div
          className="overflow-hidden rounded-xl border border-[#dcece6] bg-white p-4"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <Image
            className="h-auto max-h-[560px] w-full rounded-lg object-cover"
            src={serviceGallery}
            alt="Domestic and international courier service gallery"
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          className="mt-4 grid grid-cols-4 gap-3 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {serviceLabels.map((label) => (
            <motion.div
              className="flex cursor-default items-center justify-between rounded-lg border border-[#dcece6] bg-[#f7fffb] px-5 py-3.5 text-sm font-semibold text-[#07131f]"
              key={label}
              variants={cardItem}
              whileHover={{ x: 4, borderColor: "#b8ddd5", backgroundColor: "#ffffff", transition: { duration: 0.18 } }}
            >
              {label}
              <span className="text-[#0f8a7d]">→</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PACKAGE HANDLING ──────────────────────────────────────── */}
      <OutsideHeading eyebrow="Package handling" title="Boxes, medicines, documents, bulk orders. Packed for confidence." />
      <section className="mx-[var(--site-gutter)] mb-16 grid grid-cols-[0.75fr_1.25fr] items-center gap-12 overflow-hidden rounded-xl border border-[#dcece6] bg-[#f7fffb] px-10 py-10 max-[1050px]:grid-cols-1 max-[700px]:mx-5 max-[700px]:gap-6 max-[700px]:px-5 max-[700px]:py-7">
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <p className="max-w-sm text-base leading-7 text-[#52646f]">
            Shipshopy supports smart packaging rules, fragile handling, medicine-ready care, document protection, and scalable parcel workflows for teams of any size.
          </p>
          <motion.div
            className="mt-7 grid gap-3"
            variants={staggerGrid(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {["Fragile parcel rules", "Document sleeves", "Medicine-safe packing", "Bulk label flow"].map((item) => (
              <motion.span
                className="flex items-center gap-3 text-sm font-medium text-[#07131f]"
                key={item}
                variants={cardItem}
              >
                <span className="h-5 w-5 shrink-0 rounded-full bg-[#dcece6] text-center text-[10px] font-bold leading-5 text-[#0f8a7d]">✓</span>
                {item}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="mt-8" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/shipping">
              View packaging options
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-xl border border-[#dcece6] bg-white"
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
        >
          <Image className="h-auto w-full" src={packageBoxes} alt="Shipshopy package boxes" sizes="(max-width: 900px) 92vw, 58vw" />
        </motion.div>
      </section>

      {/* ── WORKFLOW ──────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#f7fffb] px-[var(--site-gutter)] py-24">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-[0.9fr_1.1fr] items-center gap-14 max-[1050px]:grid-cols-1">
          <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={vp}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Simple operation</p>
            <h2 className="max-w-xl text-[clamp(2rem,3.25vw,3.25rem)] font-semibold leading-[1.12] text-[#07131f]">
              Four steps. One clean command flow.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#52646f]">
              Booking, packing, courier routing, and delivery updates work as a single repeatable operating lane — so your team ships consistently every day.
            </p>
            <motion.div className="mt-8" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <Link className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#dcece6] bg-white px-6 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]" href="/shipping">
                See all shipping features &rarr;
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1"
            variants={staggerGrid(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {processSteps.map(({ title, image, imageAlt }, index) => (
              <motion.div
                className={`group overflow-hidden rounded-xl border border-[#dcece6] bg-white ${index % 2 === 1 ? "translate-y-8 max-[700px]:translate-y-0" : ""}`}
                key={title}
                variants={cardItem}
                whileHover={{ y: index % 2 === 1 ? 28 : -4, borderColor: "#b8ddd5", transition: { duration: 0.25 } }}
              >
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-semibold text-[#07131f]">{title}</span>
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: processAccents[index] }} />
                </div>
                <Image
                  className="aspect-[1.55] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  src={image}
                  alt={imageAlt}
                  sizes="(max-width: 700px) 92vw, (max-width: 1050px) 45vw, 27vw"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 mx-auto mt-16 max-w-7xl overflow-hidden rounded-xl border border-[#dcece6] bg-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <div className="grid grid-cols-4 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1">
            {processSteps.map(({ number, title, copy, link }, index) => (
              <motion.article
                className="relative border-r border-[#dcece6] p-7 last:border-r-0 max-[1050px]:border-b max-[1050px]:even:border-r-0 max-[700px]:border-r-0"
                key={title}
                whileHover={{ backgroundColor: "#f7fffb", transition: { duration: 0.2 } }}
              >
                <span className="mb-6 inline-grid h-10 w-10 place-items-center rounded-lg text-xs font-bold text-white" style={{ backgroundColor: processAccents[index] }}>
                  {number}
                </span>
                <h3 className="text-lg font-semibold text-[#07131f]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#52646f]">{copy}</p>
                <Link className="mt-5 inline-flex text-sm font-bold text-[#0f8a7d] transition hover:opacity-70" href="/shipping">
                  {link} &rarr;
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── NETWORK REACH ─────────────────────────────────────────── */}
      <OutsideHeading eyebrow="Network reach" title="We have the largest delivery network for modern commerce" />
      <section className="mx-[var(--site-gutter)] mb-16 grid grid-cols-[1.22fr_0.78fr] items-center gap-12 overflow-hidden rounded-xl border border-[#dcece6] bg-[#f7fffb] px-10 py-10 max-[1050px]:grid-cols-1 max-[700px]:mx-5 max-[700px]:gap-6 max-[700px]:px-5 max-[700px]:py-7">
        <motion.div
          className="overflow-hidden rounded-xl border border-[#dcece6] bg-white"
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
        >
          <Image className="h-auto w-full object-cover" src={vanImage} alt="Green Shipshopy delivery van" sizes="(max-width: 900px) 92vw, 58vw" />
        </motion.div>
        <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={vp}>
          <p className="text-base leading-7 text-[#52646f]">
            Connect to dependable pickup and last-mile lanes across India, reduce manual courier follow-ups, and give every customer a shipment experience that feels calm and professional.
          </p>
          <motion.div
            className="mt-7 grid grid-cols-2 gap-4"
            variants={staggerGrid(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {[["26K+", "Pincodes served"], ["15+", "Courier partners"], ["220+", "Cities covered"], ["48hr", "Avg delivery"]].map(([val, lbl]) => (
              <motion.div
                className="rounded-lg border border-[#dcece6] bg-white p-4"
                key={lbl}
                variants={cardItem}
                whileHover={{ y: -3, borderColor: "#b8ddd5", transition: { duration: 0.2 } }}
              >
                <p className="text-xl font-semibold text-[#0f8a7d]">{val}</p>
                <p className="mt-0.5 text-xs font-medium text-[#52646f]">{lbl}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="mt-7" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/locations">
              View coverage &rarr;
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SPECIALTIES ───────────────────────────────────────────── */}
      <section className="px-[var(--site-gutter)] py-20">
        <SectionHeading
          eyebrow="Our specialties"
          title="Built for shipping teams that need speed and clarity"
          copy="Every feature is designed around the real problems high-volume ecommerce and B2B sellers face every day."
        />
        <motion.div
          className="grid grid-cols-3 gap-3 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {specialties.map(([number, title, copy]) => (
            <motion.article
              className="rounded-xl border border-[#dcece6] bg-[#f7fffb] p-6"
              key={number}
              variants={cardItem}
              whileHover={{ y: -5, backgroundColor: "#ffffff", borderColor: "#b8ddd5", transition: { duration: 0.2 } }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#0f8a7d] text-xs font-bold text-white">
                  {number}
                </span>
                <h3 className="text-base font-semibold text-[#07131f]">{title}</h3>
              </div>
              <p className="text-sm leading-6 text-[#52646f]">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── RATE CALCULATOR ───────────────────────────────────────── */}
      <OutsideHeading eyebrow="Instant estimate" title="Know the cost before pickup." />
      <motion.section
        className="mx-[var(--site-gutter)] mb-20 grid grid-cols-[0.72fr_1.28fr] items-stretch gap-0 overflow-hidden rounded-xl border border-[#dcece6] bg-white max-[1050px]:grid-cols-1"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <div className="border-r border-[#dcece6] p-8 max-[1050px]:border-b max-[1050px]:border-r-0 max-[700px]:p-5">
          <p className="mb-4 max-w-sm text-sm leading-6 text-[#52646f]">
            Compare parcel type, pickup date, destination, and service speed before you confirm.
          </p>
          <div className="mb-6 grid grid-cols-3 gap-2">
            {["Fast ETA", "COD ready", "Bulk rates"].map((item) => (
              <span className="rounded-lg border border-[#dcece6] bg-[#f7fffb] px-3 py-2 text-center text-xs font-semibold text-[#07131f]" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-3">
            {[
              ["Weight & dimensions", "Priced on volumetric or actual weight — whichever is higher."],
              ["Pickup & destination", "Zone-based pricing across 220+ serviceable regions."],
              ["Service speed", "Standard, express, or same-day — you pick at booking."],
            ].map(([title, copy]) => (
              <div className="rounded-lg border border-[#dcece6] bg-[#f7fffb] p-4" key={title}>
                <p className="text-sm font-semibold text-[#07131f]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-[#52646f]">{copy}</p>
              </div>
            ))}
            <motion.div className="mt-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#0f8a7d] text-sm font-bold text-white transition hover:bg-[#087f72]"
                href="/shipping"
              >
                Get an instant quote
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="overflow-hidden bg-[#f7fffb]">
          <Image className="h-full w-full object-cover" src={pricingCourier} alt="Shipshopy rate calculator interface" sizes="(max-width: 900px) 92vw, 58vw" />
        </div>
      </motion.section>

      {/* ── GPS TRACKING ──────────────────────────────────────────── */}
      <OutsideHeading eyebrow="GPS visibility" title="Follow every shipment from pickup to doorstep" />
      <section className="mx-[var(--site-gutter)] mb-16 grid grid-cols-[0.72fr_1.28fr] items-center gap-12 overflow-hidden rounded-xl border border-[#dcece6] bg-[#f7fffb] px-10 py-10 max-[1050px]:grid-cols-1 max-[700px]:mx-5 max-[700px]:gap-6 max-[700px]:px-5 max-[700px]:py-7">
        <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={vp}>
          <p className="text-base leading-7 text-[#52646f]">
            Shipment milestones, current courier location, and estimated delivery window are visible in a customer-friendly tracking view — with no login required.
          </p>
          <motion.div
            className="mt-7 grid gap-3"
            variants={staggerGrid(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {["Branded tracking page for customers", "SMS & email delivery alerts", "Proof of delivery with OTP or signature", "Exception & delay notifications"].map((item) => (
              <motion.span
                className="flex items-center gap-3 text-sm font-medium text-[#07131f]"
                key={item}
                variants={cardItem}
              >
                <span className="h-5 w-5 shrink-0 rounded-full bg-[#dcece6] text-center text-[10px] font-bold leading-5 text-[#0f8a7d]">✓</span>
                {item}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="mt-8" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/tracking">
              Track a shipment &rarr;
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-xl border border-[#dcece6] bg-white"
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          whileHover={{ scale: 1.015, transition: { duration: 0.3 } }}
        >
          <Image className="h-auto w-full" src={routeMap} alt="Global shipment route tracking dashboard" sizes="(max-width: 900px) 92vw, 58vw" />
        </motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <motion.section
        className="mx-[var(--site-gutter)] mb-20 overflow-hidden rounded-xl border border-[#dcece6] bg-[#07131f]"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <motion.div
          className="grid grid-cols-3 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {stats.map(([value, label, sub], index) => (
            <motion.div
              className={`p-10 ${index < stats.length - 1 ? "border-r border-white/10 max-[700px]:border-b max-[700px]:border-r-0" : ""}`}
              key={label}
              variants={fadeUp}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)", transition: { duration: 0.2 } }}
            >
              <p className="text-[clamp(2.5rem,4vw,3.5rem)] font-semibold leading-none text-[#38c39f]">{value}</p>
              <p className="mt-3 text-base font-semibold text-white">{label}</p>
              <p className="mt-1 text-sm text-white/50">{sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <OutsideHeading eyebrow="Get started" title="Ready to simplify shipping with Shipshopy?" />
      <motion.section
        className="mx-[var(--site-gutter)] mb-24 mt-6 grid grid-cols-[0.72fr_1.28fr] items-stretch gap-0 overflow-hidden rounded-xl border border-[#dcece6] max-[1050px]:grid-cols-1 max-[700px]:mx-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <div className="flex flex-col justify-center bg-[#f7fffb] p-10 max-[700px]:p-7">
          <p className="text-base leading-7 text-[#52646f]">
            Talk to our team for onboarding, enterprise shipping workflows, and courier integrations. We&apos;ll have you shipping within one business day.
          </p>
          <motion.div
            className="mt-7 grid gap-3"
            variants={staggerGrid(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {["Free account setup", "Dedicated onboarding call", "Same-day courier activation"].map((item) => (
              <motion.span
                className="flex items-center gap-3 text-sm font-medium text-[#07131f]"
                key={item}
                variants={cardItem}
              >
                <span className="h-5 w-5 shrink-0 rounded-full bg-[#dcece6] text-center text-[10px] font-bold leading-5 text-[#0f8a7d]">✓</span>
                {item}
              </motion.span>
            ))}
          </motion.div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="/support" primary>Contact support</Btn>
            <Btn href="/shipping">View services</Btn>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            className="h-full min-h-[360px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            src={logisticsBanner}
            alt="Shipshopy logistics route and parcels illustration"
            sizes="(max-width: 900px) 92vw, 52vw"
          />
        </div>
      </motion.section>

    </main>
  );
}
