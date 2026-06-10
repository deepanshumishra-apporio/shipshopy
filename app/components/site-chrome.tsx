import Link from "next/link";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Tracking", href: "/tracking" },
  { label: "Shipping", href: "/shipping" },
  { label: "Locations", href: "/locations" },
  { label: "Support", href: "/support" },
];

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      className={`inline-flex items-center gap-2.5 text-base font-semibold ${inverse ? "text-white" : "text-[#07131f]"}`}
      href="/"
      aria-label="Shipshopy home"
    >
      <span className="grid h-8 w-8 rotate-[-45deg] place-items-center rounded-[50%_50%_50%_12%] bg-gradient-to-br from-[#7dd3fc] via-[#38c39f] to-[#0f8a7d] shadow-none">
        <span className="h-3 w-3 rounded border-[2.5px] border-white" />
      </span>
      <span>Shipshopy</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dcece6] bg-white">
      <div className="grid min-h-[54px] w-full grid-cols-[auto_1fr_auto] items-center gap-8 px-[var(--site-gutter)] max-[1050px]:grid-cols-[1fr_auto] max-[700px]:min-h-[52px]">
        <Logo />
        <nav className="mx-auto flex w-fit justify-center gap-9 text-sm font-medium text-[#284642] max-[1050px]:hidden">
          {navigation.map((item) => (
            <Link
              className="transition hover:text-[#0f8a7d]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm font-medium text-[#284642]">
          <Link className="transition hover:text-[#0f8a7d] max-[700px]:hidden" href="/support">
            Sign in
          </Link>
          <Link
          className="inline-flex min-h-8 items-center justify-center rounded-full bg-[#07131f] px-4 font-semibold text-white transition hover:bg-[#0f8a7d]"
            href="/support"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dcece6] bg-white px-[var(--site-gutter)] py-16 text-[#07131f]">
      <div className="grid grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr] gap-10 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1">
      <div>
        <Logo />
        <p className="mt-5 max-w-sm text-sm leading-7 text-[#52646f]">
          Fast, reliable shipping infrastructure for ecommerce teams.
        </p>
        <div className="mt-6 flex gap-3">
          {["IN", "COD", "GPS"].map((item) => (
            <span className="rounded-full border border-[#dcece6] bg-white px-3 py-1 text-xs font-bold text-[#07131f] shadow-none" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="grid content-start gap-3 text-sm">
        <h3 className="mb-2 font-semibold text-[#07131f]">Company</h3>
        {navigation.map((item) => (
          <Link className="w-fit font-medium text-[#52646f] transition hover:text-[#0f8a7d]" href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="grid content-start gap-3 text-sm">
        <h3 className="mb-2 font-semibold text-[#07131f]">Services</h3>
        {["Domestic courier", "International courier", "Medicine shipping", "Document shipping"].map((item) => (
          <span className="text-[#52646f]" key={item}>{item}</span>
        ))}
      </div>
      <address className="grid content-start gap-3 text-sm not-italic leading-7 text-[#52646f]">
        <h3 className="mb-2 font-semibold text-[#07131f]">Contact</h3>
        <a className="w-fit font-semibold text-[#07131f] transition hover:text-[#0f8a7d]" href="mailto:info@shipshopy.com">
          info@shipshopy.com
        </a>
        <a className="w-fit font-semibold text-[#07131f] transition hover:text-[#0f8a7d]" href="tel:+919218077124">
          +91 9218077124
        </a>
        <span>Office No 33 &amp; 34, Vsr Avenue, Sector 114 Gurugram, Haryana 122017</span>
        <span>CIN: U60230HR2023PTC108952</span>
        <span>GST: 06ABKCS1299R1ZE</span>
      </address>
      </div>
      <div className="mt-12 flex items-center justify-between border-t border-[#dcece6] pt-6 text-xs font-bold text-[#52646f] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-3">
        <span>© 2026 Shipshopy Private Limited. All rights reserved.</span>
        <span>Built for fast, reliable ecommerce logistics.</span>
      </div>
    </footer>
  );
}







