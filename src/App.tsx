import { useEffect, useState } from "react";
import { PowerEtentLogo } from "@/components/PowerEtentLogo";
import { PowerEtentDevice } from "@/components/PowerEtentDevice";
import { WaitlistForm } from "@/components/WaitlistForm";

const NAV = [
  { href: "#how", label: "How It Works" },
  { href: "#specs", label: "Specs" },
  { href: "#partners", label: "For Partners" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Specs />
        <WhyPowerEtent />
        <BuiltForRealConditions />
        <Partners />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <PowerEtentLogo />
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-paper-dim hover:text-paper transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#waitlist" className="btn-amber hidden sm:inline-flex">
            Join the Waitlist
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-paper"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-paper-dim hover:text-paper"
              >
                {n.label}
              </a>
            ))}
            <a href="#waitlist" onClick={() => setOpen(false)} className="btn-amber mt-2">
              Join the Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-outage)" }}>
      <div className="container-x pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="rise-in">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-amber amber-pulse" aria-hidden />
              Pre-launch · First production run
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02] text-paper text-balance">
              The lights go out.<br />
              <span className="text-amber">You don't.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-paper-dim text-pretty">
              PowerEtent is a smart extension cord with a built-in battery. When the grid cuts out,
              it switches over in under 10 milliseconds — your router, laptop and monitor never notice.
              Built for the daily reality of power in Nigeria, Kenya, Ghana and Ethiopia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#waitlist" className="btn-amber">Join the waitlist</a>
              <a href="#how" className="btn-ghost">See how it works</a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                { k: "<10ms", v: "Switchover" },
                { k: "~20 min", v: "Runtime at 40–50W" },
                { k: "3×", v: "Type G sockets" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-xl font-semibold text-paper">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-[2rem] blur-3xl"
              style={{
                background:
                  "radial-gradient(400px 220px at 60% 40%, color-mix(in oklab, var(--amber) 30%, transparent), transparent 70%)",
              }}
              aria-hidden
            />
            <PowerEtentDevice className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const stats = [
    { k: "< 12 hrs", title: "of grid electricity per day", body: "The average Nigerian household lives with fewer than half a day of reliable power — and the outages don't announce themselves." },
    { k: "1 cut", title: "= a dropped call, a lost draft, a router reboot", body: "Most outages hit in the middle of something that mattered. Your work resets. Your customer waits. Your day starts over." },
    { k: "2 options", title: "generators or lose the work", body: "The alternatives are a loud, expensive generator that needs fuel — or accepting the interruption as part of life. Neither is fine." },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-x py-20 sm:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">The daily reality</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-paper text-balance">
            Losing power isn't a rare event. It's a Tuesday.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.k} className="panel p-6">
              <div className="font-display text-4xl font-bold text-amber">{s.k}</div>
              <div className="mt-2 font-medium text-paper">{s.title}</div>
              <p className="mt-3 text-sm text-paper-dim">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Plug it in like any extension cord", body: "PowerEtent lives on your desk or under your TV. It powers your devices and quietly charges its internal battery in the background." },
    { n: "02", title: "The battery stops at 100% — automatically", body: "A built-in Battery Management System cuts off charging at full, protecting cell health so the pack still performs a year in." },
    { n: "03", title: "Power cuts. You keep working.", body: "An auto-switch relay flips to battery in under 10 milliseconds — faster than any device on your desk can notice. No flicker, no reboot, no dropped video call." },
    { n: "04", title: "Power returns, silently", body: "PowerEtent switches back to grid and starts refilling the battery. You didn't have to do anything. That's the whole point." },
  ];
  return (
    <section id="how" className="relative">
      <div className="container-x py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-paper text-balance">
            Plug in once. Forget about outages.
          </h2>
          <p className="mt-4 text-paper-dim">
            No configuration, no app, no switching modes. PowerEtent behaves like the extension cord
            you already own — until the moment it doesn't need to.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="panel p-6 relative">
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-amber">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-3 text-sm text-paper-dim">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 panel p-8 sm:p-10 flex flex-col items-center text-center">
          <span className="eyebrow">The moment</span>
          <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-3 w-3 rounded-full bg-surface-2" title="Grid" aria-hidden />
            <div className="h-px w-16 sm:w-32 bg-border" aria-hidden />
            <div className="relative">
              <div className="h-6 w-6 rounded-full bg-amber amber-pulse" aria-hidden />
            </div>
            <div className="h-px w-16 sm:w-32 bg-border" aria-hidden />
            <div className="h-3 w-3 rounded-full bg-amber power-flicker" aria-hidden />
          </div>
          <p className="mt-6 max-w-md text-paper-dim">
            Grid drops. In less time than a single frame of video, PowerEtent's relay hands off to the
            internal battery. Your devices stay on. Your work continues.
          </p>
        </div>
      </div>
    </section>
  );
}

function Specs() {
  const rows: [string, string][] = [
    ["Battery", "15–20 Wh lithium pack with BMS (auto-cutoff at 100%)"],
    ["Runtime", "~20 minutes at 40–50 W (router + laptop charger)"],
    ["Switchover", "Under 10 ms — no flicker, no dropped connection"],
    ["Sockets", "3 × Type G sockets"],
    ["Indicators", "4-segment LED battery status"],
    ["Protection", "Surge (MOV) + overload + flame-retardant casing"],
    ["Dimensions", "≈ 280 × 160 × 55 mm"],
    ["Finish", "Matte, rubber feet, low-profile"],
  ];
  return (
    <section id="specs" className="border-y border-border bg-surface">
      <div className="container-x py-20 sm:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Specs</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-paper text-balance">
            Engineered for the common case. Not the catalogue.
          </h2>
          <p className="mt-4 text-paper-dim">
            Twenty minutes of runtime is a deliberate choice. Most African outages are brief
            fluctuations, not multi-hour blackouts — enough time to save, sync, and shut down for the
            longer ones, without the bulk, weight or cost of a full UPS.
          </p>
        </div>

        <div className="mt-12 panel overflow-hidden">
          <dl className="divide-y divide-border">
            {rows.map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 px-6 py-4 sm:grid-cols-[220px_minmax(0,1fr)]"
              >
                <dt className="text-sm uppercase tracking-widest text-muted-foreground">{k}</dt>
                <dd className="text-right sm:text-left text-paper">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function WhyPowerEtent() {
  const cols = [
    { name: "Generator", rows: ["Loud", "Needs fuel", "Outdoor install", "Manual start", "Expensive to run"], tone: "muted" as const },
    { name: "Traditional UPS", rows: ["Bulky beige box", "Technical setup", "Beeps loudly", "Bad user experience", "Mostly ignored"], tone: "muted" as const },
    { name: "PowerEtent", rows: ["Looks like an extension cord", "Silent, always on", "Plug-and-play", "<10ms auto-switchover", "Priced for daily life"], tone: "amber" as const },
  ];
  return (
    <section className="relative">
      <div className="container-x py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Why PowerEtent</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-paper text-balance">
            Not a UPS. Not a generator. Just the cord that has your back.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cols.map((c) => (
            <div
              key={c.name}
              className={`panel p-6 ${c.tone === "amber" ? "border-amber/40 shadow-[0_0_0_1px_var(--amber)/0.15]" : ""}`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`font-display text-lg font-semibold ${c.tone === "amber" ? "text-amber" : "text-paper"}`}>
                  {c.name}
                </h3>
                {c.tone === "amber" && (
                  <span className="text-[10px] uppercase tracking-widest text-amber">Our take</span>
                )}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.rows.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-paper-dim">
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.tone === "amber" ? "bg-amber" : "bg-border-strong"}`}
                      aria-hidden
                    />
                    <span className={c.tone === "amber" ? "text-paper" : ""}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuiltForRealConditions() {
  const items = [
    { title: "Flame-retardant casing", body: "V-0 rated polymer housing. If something goes wrong upstream, PowerEtent won't make it worse." },
    { title: "Surge + overload protection", body: "MOV-based surge suppression and overload cutoff protect the pack — and everything plugged into it." },
    { title: "Certification path in-country", body: "SONCAP (Nigeria), KEBS (Kenya), Ghana Standards Authority testing planned pre-launch." },
    { title: "Designed for African grid patterns", body: "Sized around the brief fluctuations that make up most outages, not adapted from a Western product built for rare emergencies." },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-x py-20 sm:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Built for real conditions</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-paper text-balance">
            Safe enough to leave running. Simple enough to forget about.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((i) => (
            <div key={i.title} className="panel p-6">
              <h3 className="font-display text-lg font-semibold text-paper">{i.title}</h3>
              <p className="mt-2 text-sm text-paper-dim">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="relative">
      <div className="container-x py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">For ISPs, retailers &amp; distributors</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-paper text-balance">
              Customers who stay connected during outages don't cancel their subscription.
            </h2>
            <p className="mt-5 text-paper-dim">
              PowerEtent is a retention product for internet service providers, a high-margin
              attach for consumer electronics retailers, and a fast-moving SKU for distributors
              across West and East Africa. Wholesale pricing, co-branding options, and
              structured distribution partnerships are available for the initial 200-unit
              production run and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#waitlist" className="btn-amber">Partner with us</a>
              <a href="mailto:hello@poweretent.com" className="btn-ghost">
                hello@poweretent.com
              </a>
            </div>
          </div>

          <div className="panel p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                ["Wholesale", "Volume pricing from 100 units"],
                ["Co-branding", "ISP-branded units on request"],
                ["Fulfilment", "Lagos-first, expanding to Nairobi, Accra, Addis"],
                ["Support", "Direct line to founding team"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-xs uppercase tracking-widest text-amber">{k}</div>
                  <div className="mt-1 text-paper">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section
      id="waitlist"
      className="relative border-y border-border"
      style={{ background: "var(--gradient-outage)" }}
    >
      <div className="container-x py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Waitlist</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-paper text-balance">
            Be first in line when PowerEtent launches.
          </h2>
          <p className="mt-4 text-paper-dim">
            The first production run is capped at 200 units. Waitlist members get first allocation,
            launch pricing, and a direct line to the founding team.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <PowerEtentLogo />
            <p className="mt-4 max-w-sm text-sm text-paper-dim">
              The power stays on. Even when the grid doesn't.
            </p>
            <a
              href="mailto:hello@poweretent.com"
              className="mt-4 inline-block text-sm text-paper hover:text-amber transition-colors"
            >
              hello@poweretent.com
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Product</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-paper-dim hover:text-paper">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#waitlist" className="text-paper-dim hover:text-paper">
                  Waitlist
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Instagram", "#"],
                ["TikTok", "#"],
                ["X / Twitter", "#"],
                ["WhatsApp Business", "#"],
              ].map(([n, href]) => (
                <li key={n}>
                  <a href={href} className="text-paper-dim hover:text-paper">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PowerEtent. Made for the realities of African power grids.
          </p>
          <p className="text-xs text-muted-foreground">Lagos · Nairobi · Accra · Addis Ababa</p>
        </div>
      </div>
    </footer>
  );
}
