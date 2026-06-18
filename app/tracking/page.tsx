"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import routeMap from "../../assets/ChatGPT Image Jun 9, 2026, 02_05_12 PM.png";
import dashboardMockup from "../../assets/shipshopy-dashboard.png";

import { ease, fadeUp, scaleIn, slideLeft, staggerGrid, cardItem, vp } from "@/lib/motion";

const milestones = [
  { step: "01", title: "Order placed",       copy: "Booking confirmed, tracking ID generated, and courier assignment begins immediately." },
  { step: "02", title: "Pickup scheduled",   copy: "Courier is assigned and your pickup slot is confirmed at the origin address." },
  { step: "03", title: "In transit",         copy: "Parcel is moving through the network with live scan updates at every hub." },
  { step: "04", title: "Out for delivery",   copy: "Shipment is with the last-mile rider. Estimated delivery window sent to customer." },
  { step: "05", title: "Delivered",          copy: "Proof of delivery captured. Customer notified. Record updated in your dashboard." },
];

const features = [
  { eyebrow: "Real-time",           title: "Live scan updates",      copy: "Every hub scan — pickup, sort, dispatch, delivery — is pushed to your dashboard and the customer tracking link within seconds." },
  { eyebrow: "Notifications",       title: "SMS & email alerts",     copy: "Customers receive branded delivery updates at each milestone automatically. No manual follow-up needed from your team." },
  { eyebrow: "Accountability",      title: "Proof of delivery",      copy: "OTP confirmation, signature capture, and photo proof are logged per shipment and downloadable any time." },
  { eyebrow: "Exceptions",          title: "Delay & failure alerts",  copy: "Shipshopy surfaces stuck, returned, or failed delivery attempts in real time so you resolve issues before customers ask." },
  { eyebrow: "Visibility",          title: "Unified tracking view",  copy: "All couriers, all shipments, one screen. Filter by status, date, or region and export reports in one click." },
  { eyebrow: "Customer experience", title: "Branded tracking page",  copy: "Share a clean, branded tracking URL with every customer. No third-party redirects. Your name on the experience." },
];

const faqs = [
  ["How do I track a shipment?",                     "Open the branded live tracking link we send with every shipment. You'll see the full scan history, current location, and estimated delivery time — no tracking number to type."],
  ["Can I share a tracking link with my customers?", "Yes. Every shipment gets a branded tracking URL that you can send via SMS, email, or embed on your website order confirmation page."],
  ["How often is tracking updated?",                 "Tracking events refresh in real time as the courier scans the parcel at each hub, transit point, or delivery attempt."],
  ["What happens if a delivery attempt fails?",      "Shipshopy flags the failed attempt, logs the reason code, and schedules a re-delivery. You receive an instant notification to act if needed."],
  ["Which couriers are supported for tracking?",     "Shipshopy aggregates tracking data across all partner courier networks into one unified view. You don't need separate logins for each carrier."],
];

const stats = [
  ["18K+",  "monthly shipments tracked"],
  ["98.7%", "on-time status updates"],
  ["220+",  "serviceable regions"],
];

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#07131f]">

      {/* Hero */}
      <section className="px-[var(--site-gutter)] pt-7 pb-0">
        <div className="grid min-h-[560px] grid-cols-[minmax(400px,0.9fr)_minmax(0,1.1fr)] items-center gap-16 pt-20 max-[1050px]:grid-cols-1 max-[700px]:min-h-0 max-[700px]:pt-14 max-[700px]:pb-10">
          <motion.div
            className="max-w-xl"
            variants={staggerGrid(0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex rounded-full border border-[#dcece6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#0f8a7d]">
              Live tracking
            </motion.div>
            <motion.h1 variants={fadeUp} className="mb-6 text-[clamp(2.25rem,3.5vw,3.85rem)] font-semibold leading-[1.1] text-[#07131f] max-[700px]:text-[clamp(2rem,9vw,2.75rem)]">
              Track every shipment in real time.
            </motion.h1>
            <motion.p variants={fadeUp} className="mb-8 max-w-lg text-[0.95rem] leading-7 text-[#52646f]">
              Every Shipshopy shipment comes with a branded live tracking link — full scan history, current location, courier movement, and expected delivery window. Nothing to type in.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0f8a7d] px-7 text-sm font-bold text-white transition hover:bg-[#087f72]"
                  href="/shipping"
                >
                  Book &amp; track a shipment
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dcece6] bg-white px-7 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]"
                  href="/support"
                >
                  Get a tracking link
                </Link>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-[#52646f]">
              {["Live GPS", "SMS alerts", "Delivery proof"].map((item) => (
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
          >
            <Image
              className="h-auto w-full rounded-md border border-[#dcece6]"
              src={routeMap}
              alt="Live shipment route tracking map"
              priority
              sizes="(max-width: 900px) 92vw, 48vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section
        className="mx-[var(--site-gutter)] my-16 grid grid-cols-3 overflow-hidden rounded-md border border-[#dcece6] bg-white max-[700px]:grid-cols-1"
        variants={staggerGrid(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        {stats.map(([value, label]) => (
          <motion.div
            className="grid justify-items-center gap-2 border-r border-[#dcece6] p-8 last:border-r-0 max-[700px]:border-r-0 max-[700px]:border-b max-[700px]:last:border-b-0"
            key={label}
            variants={fadeUp}
          >
            <strong className="text-3xl font-semibold text-[#07131f]">{value}</strong>
            <span className="text-sm font-medium text-[#52646f]">{label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* Milestones */}
      <section className="px-[var(--site-gutter)] py-16">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Shipment journey</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Five milestones from booking to doorstep
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-5 gap-3 max-[1050px]:grid-cols-3 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {milestones.map(({ step, title, copy }, index) => (
            <motion.article
              className="relative rounded-md border border-[#dcece6] bg-[#f7fffb] p-6"
              key={step}
              variants={cardItem}
              whileHover={{ y: -5, borderColor: "#b8ddd5", backgroundColor: "#ffffff", transition: { duration: 0.2 } }}
            >
              <span
                className="mb-5 inline-grid h-10 w-10 place-items-center rounded-md text-sm font-bold text-white"
                style={{ backgroundColor: index % 2 === 0 ? "#0f8a7d" : "#38c39f" }}
              >
                {step}
              </span>
              <h3 className="mb-3 text-base font-semibold text-[#07131f]">{title}</h3>
              <p className="text-sm leading-6 text-[#52646f]">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="bg-[#f7fffb] px-[var(--site-gutter)] py-20">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Platform features</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Everything your team needs for shipment visibility
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-3 gap-4 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1"
          variants={staggerGrid(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {features.map(({ eyebrow, title, copy }) => (
            <motion.article
              className="rounded-md border border-[#dcece6] bg-white p-6"
              key={title}
              variants={cardItem}
              whileHover={{ y: -5, borderColor: "#b8ddd5", transition: { duration: 0.2 } }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">{eyebrow}</p>
              <h3 className="mb-3 text-lg font-semibold text-[#07131f]">{title}</h3>
              <p className="text-sm leading-6 text-[#52646f]">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Dashboard image band */}
      <motion.section className="px-[var(--site-gutter)] pt-16 pb-6 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Dashboard</p>
        <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
          All your shipments in one command view
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
          className="h-auto w-full rounded-sm"
          src={dashboardMockup}
          alt="Shipshopy tracking dashboard"
          sizes="100vw"
        />
      </motion.section>

      {/* FAQ */}
      <section className="px-[var(--site-gutter)] py-16">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">FAQ</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-[1.1] text-[#07131f]">
            Tracking questions answered
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
        className="mx-[var(--site-gutter)] mb-20 overflow-hidden rounded-md border border-[#dcece6] bg-[#f7fffb] px-12 py-14 text-center max-[700px]:px-6 max-[700px]:py-10"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0f8a7d]">Get started</p>
        <h2 className="mx-auto mb-4 max-w-xl text-[clamp(1.9rem,3vw,2.75rem)] font-semibold leading-[1.1] text-[#07131f]">
          Ready to give customers a better tracking experience?
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-[#52646f]">
          Book your first shipment and see live tracking, branded links, and delivery proof in action.
        </p>
        <div className="flex justify-center gap-4 max-[700px]:flex-col max-[700px]:items-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0f8a7d] px-6 text-sm font-bold text-white transition hover:bg-[#087f72]" href="/shipping">
              Book a shipment
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#dcece6] bg-white px-6 text-sm font-semibold text-[#07131f] transition hover:border-[#0f8a7d] hover:text-[#0f8a7d]" href="/support">
              Talk to support
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}
