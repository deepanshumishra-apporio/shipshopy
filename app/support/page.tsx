"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { fadeUp, scaleIn, slideRight, slideLeft, staggerGrid, cardItem, vp } from "@/lib/motion";

const channels = [
  { eyebrow: "Email",  title: "info@shipshopy.com",     copy: "Send us your query, shipment ID, or issue details. Our team responds within 4 business hours.",              href: "mailto:info@shipshopy.com",                            cta: "Send email" },
  { eyebrow: "Phone",  title: "+91 9218077124",          copy: "Call us Monday–Saturday, 9 AM–7 PM IST for immediate assistance with active shipments.",                     href: "tel:+919218077124",                                    cta: "Call now" },
  { eyebrow: "Office", title: "Gurugram, Haryana",       copy: "Office No 33 & 34, 3rd Floor, VSR Avenue, Tower C, Sector 114, Gurugram, Haryana 122017.",                  href: "https://maps.google.com/?q=Sector+114+Gurugram+Haryana", cta: "Get directions" },
];

const topics = [
  "New account setup", "Bulk shipping integration", "COD remittance query", "Shipment delay",
  "Return pickup request", "Invoice or billing", "API / webhook support", "Enterprise onboarding",
];

const faqs = [
  ["How do I get started with Shipshopy?",                      "Email or call our team directly. We'll set up your account, configure your pickup address, and walk you through your first booking — usually within one business day."],
  ["What are your support hours?",                              "Our team is available Monday to Saturday, 9 AM to 7 PM IST. For urgent active-shipment issues, phone support is the fastest channel."],
  ["How do I report a missing or damaged shipment?",            "Email us at info@shipshopy.com with your tracking number and a description of the issue. We escalate to the courier and open a formal investigation within 24 hours."],
  ["Can Shipshopy integrate with my Shopify or WooCommerce store?", "Yes. We support API and webhook integrations with major ecommerce platforms. Reach out to our team for the integration guide and credentials."],
  ["What is the COD remittance cycle?",                         "COD amounts are remitted to your registered bank account on a T+2 or T+3 cycle depending on your plan. Remittance status is visible in your Shipshopy dashboard."],
  ["How do I raise a rate dispute?",                            "Log the shipment weight and dimensions at the time of booking. If the courier applies a different rate, email us with your booking reference and we'll resolve it with documented evidence."],
  ["Is there a minimum shipment volume requirement?",           "No minimum volume for standard accounts. Enterprise plans with dedicated account management are available from 500+ monthly shipments."],
];

const slaItems = [
  ["Email response",          "Within 4 business hours"],
  ["Phone support",           "Mon–Sat, 9 AM–7 PM IST"],
  ["Shipment investigation",  "Opened within 24 hours"],
  ["Onboarding setup",        "Within 1 business day"],
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#07131f]">

      {/* Hero */}
      <section className="px-[var(--site-gutter)] pt-7 pb-16">
        <motion.div
          className="max-w-3xl pt-20 max-[700px]:pt-14"
          variants={staggerGrid(0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex rounded-full border border-[#dcece6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#0f8a7d]">
            Support
          </motion.div>
          <motion.h1 variants={fadeUp} className="mb-6 text-[clamp(2.25rem,3.5vw,3.85rem)] font-semibold leading-[1.1] text-[#07131f] max-[700px]:text-[clamp(2rem,9vw,2.75rem)]">
            We&apos;re here to help you ship better.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-[0.95rem] leading-7 text-[#52646f]">
            Get help with onboarding, courier setup, shipment tracking, billing, COD remittance, and enterprise shipping workflows. Our team responds fast.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact channels */}
      <section className="px-[var(--site-gutter)] pb-16">
        <motion.div
          className="grid grid-cols-3 gap-4 max-[1050px]:grid-cols-1"
          variants={staggerGrid(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {channels.map(({ eyebrow, title, copy, href, cta }) => (
            <motion.article
              className="rounded-md border border-[#dcece6] bg-[#f7fffb] p-7"
              key={eyebrow}
              variants={cardItem}
              whileHover={{ y: -5, borderColor: "#b8ddd5", backgroundColor: "#ffffff", transition: { duration: 0.2 } }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">{eyebrow}</p>
              <h2 className="mb-3 text-lg font-semibold text-[#07131f]">{title}</h2>
              <p className="mb-6 text-sm leading-6 text-[#52646f]">{copy}</p>
              <motion.a
                className="inline-flex min-h-9 items-center justify-center rounded-md bg-[#0f8a7d] px-5 text-sm font-bold text-white transition hover:bg-[#087f72]"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                {cta}
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Form + info */}
      <section className="px-[var(--site-gutter)] py-16">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Reach us directly</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            No forms. Just talk to a real person.
          </h2>
        </motion.div>
        <div className="grid grid-cols-[1fr_380px] gap-8 max-[1050px]:grid-cols-1">
          <motion.div
            className="grid content-start gap-7 rounded-md border border-[#dcece6] bg-white p-8 max-[700px]:p-5"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold text-[#07131f]">Skip the paperwork</h3>
              <p className="max-w-md text-sm leading-7 text-[#52646f]">
                Pick what you need and message us directly — your topic is pre-filled, so you just hit send. We reply within 4 business hours.
              </p>
            </div>

            <div className="grid gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Popular topics</p>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <motion.a
                    key={t}
                    href={`mailto:info@shipshopy.com?subject=${encodeURIComponent(t)}`}
                    className="rounded-full border border-[#dcece6] bg-[#f7fffb] px-4 py-2 text-sm font-medium text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {t}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">
              <motion.a
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#0f8a7d] px-5 text-sm font-bold text-white transition hover:bg-[#087f72]"
                href="mailto:info@shipshopy.com"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              >
                Email us
              </motion.a>
              <motion.a
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#dcece6] bg-white px-5 text-sm font-bold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]"
                href="tel:+919218077124"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              >
                Call now
              </motion.a>
            </div>
          </motion.div>

          <motion.aside
            className="grid content-start gap-4"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {/* SLA card */}
            <div className="rounded-md border border-[#dcece6] bg-[#f7fffb] p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Response times</p>
              <div className="grid gap-3">
                {slaItems.map(([label, value]) => (
                  <div className="flex items-start justify-between gap-4 border-b border-[#dcece6] pb-3 last:border-b-0 last:pb-0" key={label}>
                    <span className="text-sm font-medium text-[#52646f]">{label}</span>
                    <span className="text-right text-sm font-semibold text-[#07131f]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company info */}
            <address className="rounded-md border border-[#dcece6] bg-white p-6 not-italic">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Company details</p>
              <div className="grid gap-2 text-sm leading-7 text-[#52646f]">
                <span className="font-semibold text-[#07131f]">Shipshopy Private Limited</span>
                <span>Office No 33 &amp; 34, 3rd Floor, VSR Avenue, Tower C, Sector 114, Gurugram, Haryana 122017</span>
                <span>CIN: U60230HR2023PTC108952</span>
                <span>GST: 06ABKCS1299R1ZE</span>
              </div>
            </address>

            {/* Quick links */}
            <div className="rounded-md border border-[#dcece6] bg-white p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Quick links</p>
              <div className="grid gap-2">
                {[
                  ["Track a shipment",    "/tracking"],
                  ["Book a pickup",       "/shipping"],
                  ["View service locations", "/locations"],
                ].map(([label, href]) => (
                  <motion.div key={label} whileHover={{ x: 4, transition: { duration: 0.18 } }}>
                    <Link
                      className="flex items-center justify-between rounded-md border border-[#dcece6] px-4 py-3 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]"
                      href={href}
                    >
                      {label}
                      <span className="text-[#0f8a7d]">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7fffb] px-[var(--site-gutter)] py-16">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">FAQ</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Common questions
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
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Start today</p>
        <h2 className="mx-auto mb-4 max-w-xl text-[clamp(1.9rem,3vw,2.75rem)] font-semibold leading-[1.1] text-[#07131f]">
          Ready to ship with Shipshopy?
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-[#52646f]">
          Our team will onboard you, configure your couriers, and have you shipping within one business day.
        </p>
        <div className="flex justify-center gap-4 max-[700px]:flex-col max-[700px]:items-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/shipping">
              View shipping services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#dcece6] bg-white px-6 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]" href="tel:+919218077124">
              Call us now
            </a>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}
