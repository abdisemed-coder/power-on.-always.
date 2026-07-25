import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const COUNTRIES = ["Nigeria", "Kenya", "Ghana", "Ethiopia", "Other"] as const;
const INTERESTS = [
  { value: "customer", label: "Customer" },
  { value: "retailer", label: "Retailer" },
  { value: "distributor", label: "Distributor" },
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState<(typeof COUNTRIES)[number]>("Nigeria");
  const [interest, setInterest] = useState<(typeof INTERESTS)[number]["value"]>("customer");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName || trimmedName.length > 120) {
      setStatus("error");
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmedEmail)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    const { error } = await supabase.from("waitlist_signups").insert({
      name: trimmedName,
      email: trimmedEmail,
      country,
      interest,
    });

    if (error) {
      setStatus("error");
      if (error.code === "23505") {
        setErrorMsg("You're already on the list — we'll be in touch.");
      } else {
        setErrorMsg("Something went wrong. Please try again in a moment.");
      }
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="panel p-8 text-center rise-in">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber/15 text-amber">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-paper">You're on the list.</h3>
        <p className="mt-2 text-paper-dim">
          We'll email <span className="text-paper">{email.toLowerCase()}</span> the moment the first
          production run ships. No spam, no forwarding.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel p-6 sm:p-8 space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-paper-dim">Full name</span>
          <input
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Adaeze Okafor"
            autoComplete="name"
            className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-paper placeholder:text-muted-foreground focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-paper-dim">Email</span>
          <input
            required
            type="email"
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@work.com"
            autoComplete="email"
            className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-paper placeholder:text-muted-foreground focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-paper-dim">Country</span>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value as (typeof COUNTRIES)[number])}
            className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-paper focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-paper-dim">I'm interested as a</span>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value as typeof interest)}
            className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-paper focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
          >
            {INTERESTS.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We use your email only to notify you at launch. Unsubscribe anytime.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-amber disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
    </form>
  );
}
