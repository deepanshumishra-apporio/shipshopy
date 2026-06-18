"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import workflowBooking from "../../assets/workflow-booking-panel.png";
import workflowPacking from "../../assets/workflow-packing-panel.png";
import workflowTransportation from "../../assets/workflow-transportation-panel.png";
import workflowDelivery from "../../assets/workflow-delivery-panel.png";
import vanImage from "../../assets/shipshopy-van-premium.png";

import { ease, fadeUp, scaleIn, slideLeft, staggerGrid, cardItem, vp } from "@/lib/motion";

const services = [
  { number: "01", title: "Ecommerce parcel shipping", copy: "Book domestic shipments in bulk, auto-assign the fastest courier, and get labels generated in one click. Designed for daily dispatch volumes.", tags: ["Bulk upload", "Auto labels", "Rate compare"] },
  { number: "02", title: "Cash on delivery",          copy: "Collect COD amounts, track remittance status, and reconcile payments against orders — all within the same shipping platform.",                   tags: ["COD collection", "Remittance tracking", "Reconciliation"] },
  { number: "03", title: "International courier",     copy: "Ship documents, parcels, and medicines globally. Customs documentation, tariff codes, and compliance handled with every international booking.",  tags: ["Customs docs", "Global reach", "Medicine-safe"] },
  { number: "04", title: "Bulk order processing",     copy: "Upload hundreds of orders via CSV or API, validate addresses in bulk, assign pincodes to optimal couriers, and dispatch in minutes.",             tags: ["CSV import", "API ready", "Address validation"] },
  { number: "05", title: "Fragile & special handling",copy: "Set parcel-level handling rules — fragile markers, bubble wrap instructions, document sleeves — so every package arrives in the state it left.", tags: ["Fragile rules", "Document sleeves", "Safe packing"] },
  { number: "06", title: "Smart courier allocation",  copy: "Shipshopy scores available couriers by pincode coverage, SLA, cost, and real-time performance — then recommends the best route automatically.",  tags: ["Auto routing", "SLA scoring", "Cost optimise"] },
];

const steps = [
  { number: "01", title: "Booking",        copy: "Create shipments in seconds — single or bulk — with address validation, weight entry, and pickup slot selection.",          image: workflowBooking,       imageAlt: "Booking workflow panel" },
  { number: "02", title: "Packing",        copy: "Apply packaging rules, insurance options, fragile labels, and document protection before dispatch.",                      image: workflowPacking,       imageAlt: "Packing workflow panel" },
  { number: "03", title: "Transportation", copy: "Every order is routed to the best courier for speed, price, and pincode coverage automatically.",                          image: workflowTransportation,imageAlt: "Transportation workflow panel" },
  { number: "04", title: "Delivery",       copy: "Customers receive live tracking links, delivery window alerts, and OTP or signature-based proof of delivery.",             image: workflowDelivery,      imageAlt: "Delivery workflow panel" },
];

const highlights = [
  ["Rate calculator",         "Compare courier costs by weight, distance, and service speed before you commit to a booking."],
  ["API & webhooks",          "Connect Shipshopy to your store, WMS, or ERP with REST APIs and real-time delivery webhooks."],
  ["Return management",       "Initiate return pickups, track reverse logistics, and update order systems automatically."],
  ["Multi-warehouse",         "Ship from multiple pickup addresses and manage courier performance per location separately."],
  ["Weight dispute resolution","Uploaded weight proof is logged at booking. Disputes with couriers are handled with documented evidence."],
  ["Branded tracking",        "Every customer gets a tracking page with your branding — not the courier's — for a professional delivery experience."],
];

const faqs = [
  ["How do I book a shipment on Shipshopy?", "Log in, go to the Booking section, enter pickup and delivery details, choose courier preference, and confirm. Labels are generated instantly."],
  ["Can I upload orders in bulk?",           "Yes. Upload a CSV file with all order details. Shipshopy validates addresses, calculates rates, and generates labels for the entire batch."],
  ["What happens if the courier misses the pickup?", "Shipshopy flags missed pickups automatically and escalates to the courier. You receive an alert and can reschedule from the dashboard."],
  ["Does Shipshopy support returns?",        "Yes. Reverse pickups can be initiated per order or in bulk. The return journey is tracked with the same visibility as forward shipments."],
  ["Is there an API for integrating with my store?", "Yes. Shipshopy offers a REST API for order creation, rate fetching, label generation, and tracking. Webhooks push delivery events in real time."],
];

export default function ShippingPage() {
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
              Shipping platform
            </motion.div>
            <motion.h1 variants={fadeUp} className="mb-6 text-[clamp(2.25rem,3.5vw,3.85rem)] font-semibold leading-[1.1] text-[#07131f] max-[700px]:text-[clamp(2rem,9vw,2.75rem)]">
              Ship faster with dependable courier workflows.
            </motion.h1>
            <motion.p variants={fadeUp} className="mb-8 max-w-lg text-[0.95rem] leading-7 text-[#52646f]">
              Book pickups, create labels, compare courier rates, and manage every delivery through a structured shipping platform built for growing sellers.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/support">
                  Start shipping
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#dcece6] bg-white px-6 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]" href="/tracking">
                  Track a shipment
                </Link>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-[#52646f]">
              {["COD ready", "Bulk upload", "API access", "Returns"].map((item) => (
                <span className="rounded-full border border-[#dcece6] bg-white px-4 py-2" key={item}>{item}</span>
              ))}
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
              src={vanImage}
              alt="Shipshopy delivery van"
              priority
              sizes="(max-width: 900px) 92vw, 48vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="px-[var(--site-gutter)] py-20">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Our services</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Every shipping need, one platform
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#52646f]">
            From same-day domestic to international medicine shipping — Shipshopy covers every use case with clear workflows.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 gap-4 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {services.map(({ number, title, copy, tags }) => (
            <motion.article
              className="rounded-md border border-[#dcece6] bg-[#f7fffb] p-6"
              key={number}
              variants={cardItem}
              whileHover={{ y: -5, backgroundColor: "#ffffff", borderColor: "#b8ddd5", transition: { duration: 0.2 } }}
            >
              <span className="mb-5 inline-grid h-10 w-10 place-items-center rounded-md bg-[#0f8a7d] text-sm font-bold text-white">
                {number}
              </span>
              <h3 className="mb-3 text-lg font-semibold text-[#07131f]">{title}</h3>
              <p className="mb-5 text-sm leading-6 text-[#52646f]">{copy}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span className="rounded-full border border-[#dcece6] bg-white px-3 py-1 text-xs font-semibold text-[#07131f]" key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* How it works */}
      <section className="bg-[#f7fffb] px-[var(--site-gutter)] py-20">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">How it works</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Four steps from booking to delivery
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-4 gap-4 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {steps.map(({ number, title, copy, image, imageAlt }, index) => (
            <motion.div
              className={`group overflow-hidden rounded-md border border-[#dcece6] bg-white ${index % 2 === 1 ? "translate-y-6 max-[700px]:translate-y-0" : ""}`}
              key={number}
              variants={cardItem}
              whileHover={{ y: index % 2 === 1 ? 18 : -4, borderColor: "#b8ddd5", transition: { duration: 0.25 } }}
            >
              <Image
                className="aspect-[1.55] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                src={image}
                alt={imageAlt}
                sizes="(max-width: 700px) 92vw, (max-width: 1050px) 45vw, 27vw"
              />
              <div className="p-5">
                <span className="mb-3 inline-grid h-9 w-9 place-items-center rounded-md bg-[#0f8a7d] text-xs font-bold text-white">{number}</span>
                <h3 className="mb-2 text-base font-semibold text-[#07131f]">{title}</h3>
                <p className="text-sm leading-6 text-[#52646f]">{copy}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="px-[var(--site-gutter)] py-20">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Platform capabilities</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Built for teams that ship every day
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 gap-3 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {highlights.map(([title, copy]) => (
            <motion.article
              className="rounded-md border border-[#dcece6] bg-white p-6"
              key={title}
              variants={cardItem}
              whileHover={{ y: -5, borderColor: "#b8ddd5", transition: { duration: 0.2 } }}
            >
              <div className="mb-3 h-1.5 w-8 rounded-full bg-[#0f8a7d]" />
              <h3 className="mb-2 text-base font-semibold text-[#07131f]">{title}</h3>
              <p className="text-sm leading-6 text-[#52646f]">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7fffb] px-[var(--site-gutter)] py-16">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">FAQ</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Shipping questions answered
          </h2>
        </motion.div>
        <motion.div
          className="mx-auto max-w-3xl grid gap-3"
          variants={staggerGrid(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {faqs.map(([question, answer]) => (
            <motion.details className="group rounded-md border border-[#dcece6] bg-white" key={question} variants={cardItem}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-sm font-semibold text-[#07131f] marker:content-none">
                {question}
                <span className="ml-auto shrink-0 text-[#0f8a7d] transition group-open:rotate-45">＋</span>
              </summary>
              <p className="border-t border-[#dcece6] px-6 py-4 text-sm leading-7 text-[#52646f]">{answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        className="mx-[var(--site-gutter)] my-20 overflow-hidden rounded-md border border-[#dcece6] bg-[#f7fffb] px-12 py-14 text-center max-[700px]:px-6 max-[700px]:py-10"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Get started</p>
        <h2 className="mx-auto mb-4 max-w-xl text-[clamp(1.9rem,3vw,2.75rem)] font-semibold leading-[1.1] text-[#07131f]">
          Ready to simplify your shipping operations?
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-[#52646f]">
          Talk to the Shipshopy team for onboarding, courier integrations, and enterprise shipping setup.
        </p>
        <div className="flex justify-center gap-4 max-[700px]:flex-col max-[700px]:items-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/support">
              Contact support
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#dcece6] bg-white px-6 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]" href="/tracking">
              Track a shipment
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}
