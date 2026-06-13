import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import appIcon from "@/assets/app-icon.png";
import mandalaBg from "@/assets/mandala-bg.jpg";
import diyaGlow from "@/assets/app-icon.png";
import malaShot from "@/assets/screenshots/Mala_Completion_celebration.png";
import goalShot from "@/assets/screenshots/Goal_completed_green_ring.png";
import settingsShot from "@/assets/screenshots/Settings.png";
import screen1 from "@/assets/screenshots/1. Main screen_1080x2400.png";
import screen2 from "@/assets/screenshots/2. Counting screen_1080x2400.png";
import screen3 from "@/assets/screenshots/3. Completion celebration_1080x2400.png";
import screen4 from "@/assets/screenshots/4. Goal completed green ring_1080x2400.png";
import screen5 from "@/assets/screenshots/5. Settings_1080x2400.png";
import screen6 from "@/assets/screenshots/6. About_1080x2400.png";
import screen7 from "@/assets/screenshots/7. Set beads_1080x2400.png";
import screen8 from "@/assets/screenshots/8. Jaap History_1080x2400.png";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.bhaktiwithekta.jaapkaro";

/* Stylized devotional phone mockup (no external screenshots needed) */
/*
const PhoneMockup = ({
  title,
  subtitle,
  count = 27,
  variant = "default",
}: {
  title: string;
  subtitle: string;
  count?: number;
  variant?: "default" | "history" | "goals" | "streak";
}) => (
  <div className="relative mx-auto" style={{ width: 240 }}>
    <div
      className="relative rounded-[2.5rem] p-3"
      style={{
        background: "linear-gradient(160deg, hsl(43 60% 45% / 0.4), hsl(0 0% 0%))",
        boxShadow: "0 30px 80px -20px hsl(0 0% 0% / 0.7), 0 0 40px -10px hsl(28 95% 49% / 0.3)",
      }}
    >
      <div
        className="relative overflow-hidden rounded-[2rem]"
        style={{
          aspectRatio: "9/19",
          background: "linear-gradient(180deg, hsl(0 43% 9%), hsl(0 13% 5%))",
        }}
      >
        
        <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black/80" />
        
        <div className="flex items-center justify-between px-5 pt-2 text-[9px] text-foreground/60">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="flex h-full flex-col items-center px-5 pt-6">
          <p className="font-devanagari text-[10px] text-accent/80">{subtitle}</p>
          <h4 className="mt-1 font-serif text-base text-foreground">{title}</h4>

          {variant === "default" && (
            <>
              <div
                className="relative mt-6 flex h-32 w-32 items-center justify-center rounded-full"
                style={{
                  background: "radial-gradient(circle at 30% 30%, hsl(28 95% 49% / 0.35), hsl(0 43% 7%) 70%)",
                  boxShadow: "inset 0 0 30px hsl(28 95% 49% / 0.3), 0 0 50px hsl(28 95% 49% / 0.25)",
                }}
              >
                <div className="text-center">
                  <div className="font-serif text-3xl text-gold-gradient">{count}</div>
                  <div className="text-[8px] uppercase tracking-widest text-foreground/50">/ 108</div>
                </div>
              </div>
              <div className="mt-5 flex w-full justify-center gap-1.5">
                {Array.from({ length: 18 }).map((_, i) => (
                  <span key={i} className="bead" style={{ opacity: i < count / 6 ? 1 : 0.3 }} />
                ))}
              </div>
              <p className="mt-4 font-devanagari text-[10px] text-foreground/70">ॐ नमः शिवाय</p>
              <div className="mt-auto mb-6 h-10 w-32 rounded-full" style={{ background: "linear-gradient(135deg, hsl(28 95% 52%), hsl(28 95% 38%))" }} />
            </>
          )}

          {variant === "streak" && (
            <div className="mt-4 w-full space-y-2">
              <div className="rounded-xl p-3" style={{ background: "hsl(28 95% 49% / 0.1)", border: "1px solid hsl(43 65% 52% / 0.3)" }}>
                <div className="text-[9px] text-foreground/60">Current Streak</div>
                <div className="font-serif text-2xl text-gold-gradient">21 दिन</div>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-sm" style={{ background: i < 21 ? "hsl(28 95% 49% / 0.7)" : "hsl(0 20% 18%)" }} />
                ))}
              </div>
              <div className="mt-3 text-[9px] text-foreground/50">Best: 41 days</div>
            </div>
          )}

          {variant === "goals" && (
            <div className="mt-4 w-full space-y-2">
              {["Morning Jaap", "Gayatri Mantra", "Hanuman Chalisa"].map((g, i) => (
                <div key={g} className="rounded-lg p-2.5" style={{ background: "hsl(0 30% 14% / 0.6)", border: "1px solid hsl(43 65% 52% / 0.15)" }}>
                  <div className="flex justify-between text-[9px] text-foreground/80"><span>{g}</span><span>{[108, 54, 21][i]}</span></div>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="h-full rounded-full" style={{ width: `${[80, 55, 100][i]}%`, background: "linear-gradient(90deg, hsl(28 95% 49%), hsl(43 65% 52%))" }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {variant === "history" && (
            <div className="mt-4 w-full space-y-1.5">
              {[
                ["आज", "324"],
                ["कल", "216"],
                ["रविवार", "432"],
                ["शनिवार", "108"],
                ["शुक्रवार", "270"],
              ].map(([d, n]) => (
                <div key={d} className="flex items-center justify-between rounded-lg px-3 py-2 text-[10px]" style={{ background: "hsl(0 30% 14% / 0.5)" }}>
                  <span className="font-devanagari text-foreground/80">{d}</span>
                  <span className="font-serif text-accent">{n}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
*/

const TempleDivider = () => (
  <div className="container-sacred my-16 sm:my-24">
    <div className="divider-temple" />
  </div>
);


const PhoneMockup = ({
  image,
}: {
  image: string;
}) => (
  <div className="relative mx-auto" style={{ width: 240 }}>
    <div
      className="relative rounded-[2.5rem] p-3"
      style={{
        background:
          "linear-gradient(160deg, hsl(43 60% 45% / 0.4), hsl(0 0% 0%))",
        boxShadow:
          "0 30px 80px -20px hsl(0 0% 0% / 0.7), 0 0 40px -10px hsl(28 95% 49% / 0.3)",
      }}
    >
      <div
        className="relative overflow-hidden rounded-[2rem]"
        style={{
          aspectRatio: "9/19",
          background:
            "linear-gradient(180deg, hsl(0 43% 9%), hsl(0 13% 5%))",
        }}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-black/90" />

        {/* Screenshot */}
        <img
          src={image}
          alt="Jaap Karo app screenshot"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);




const Section = ({ id, children, eyebrow, title, hindi }: { id?: string; children: React.ReactNode; eyebrow?: string; title?: string; hindi?: string }) => (
  <section id={id} className="container-sacred py-12 sm:py-20">
    {(eyebrow || title || hindi) && (
      <header className="mb-10 text-center sm:mb-14">
        {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent/80">{eyebrow}</p>}
        {hindi && <p className="font-devanagari mb-2 text-lg text-foreground/70">{hindi}</p>}
        {title && <h2 className="font-serif text-3xl sm:text-5xl text-gold-gradient">{title}</h2>}
      </header>
    )}
    {children}
  </section>
);

const features = [
  { h: "Traditional 108 Bead Counter", d: "Authentic 108-bead jaap mala counter that honours the sacred number of completion in Sanatan tradition." },
  { h: "Custom Bead Counts", d: "Set custom counts — 11, 21, 27, 54, 108 or 1008 — to match your sankalp and chosen mantra." },
  { h: "Daily Devotional Goals", d: "Set a daily jaap goal and let Jaap Karo gently guide your sadhana with calm reminders." },
  { h: "Streak & Discipline Tracking", d: "Build unbroken bhakti — track daily streaks and watch your spiritual consistency grow." },
  { h: "Jaap History & Insights", d: "Review your complete jaap history, day by day, to reflect on your spiritual journey." },
  { h: "Bell & Vibration Feedback", d: "Subtle temple bell or gentle vibration on each bead — never lose count, eyes closed in dhyana." },
  { h: "Works Completely Offline", d: "Jaap anywhere — temple, train, mountain. No internet needed for your bhakti." },
  { h: "Distraction-Free Sacred UI", d: "A calm, ad-respectful interface designed to feel like your personal mandir." },
];

const faqs = [
  {
    q: "Is Jaap Karo a replacement for my physical mala?",
    a: "Not at all. A physical mala holds sacred energy that can never be replaced. Jaap Karo is a spiritual companion for continuity — for moments when your mala is unavailable, when you are travelling, or when you simply wish to continue your daily jaap with discipline.",
  },
  { q: "Does the mala counter app work offline?", a: "Yes. Jaap Karo is built as an offline mala counter — your jaap, streaks, and history work fully without internet, so your bhakti is never interrupted." },
  { q: "Can I count more than 108 beads?", a: "Absolutely. Jaap Karo supports custom bead counts including 11, 21, 27, 54, 108 and 1008, so you can match the traditional sankhya of your chosen mantra." },
  { q: "Is Jaap Karo free to use?", a: "Yes, Jaap Karo is free for every devotee. Our intent is to serve the bhakti community with a clean, respectful digital mala app." },
  { q: "Does the app support Hindi?", a: "Yes — Jaap Karo is designed for Hindu devotees with Hindi-friendly typography and a devotional tone throughout the experience." },
  { q: "Will it disturb my chanting with notifications?", a: "No. The interface is intentionally distraction-free. Only gentle, optional bell or vibration feedback on each bead — nothing else." },
];

const Index = () => {
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };


  

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ===== HERO ===== */}
      <header ref={heroRef} className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${mandalaBg})`, backgroundSize: "120% auto", backgroundPosition: "center -10%", backgroundRepeat: "no-repeat", mixBlendMode: "screen" }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-warmth)" }} />

        <nav className="container-sacred relative z-10 flex items-center justify-between py-5">
          <div className="flex items-center gap-2.5">
            <img src={appIcon} alt="Jaap Karo app icon" width={36} height={36} className="rounded-lg" />
            <span className="font-serif text-lg tracking-wide">Jaap Karo</span>
          </div>
          <a href={PLAY_URL} target="_blank" rel="noopener" className="hidden sm:inline-flex btn-ghost-gold text-sm">
            Install Free
          </a>
        </nav>

        <div className="container-sacred relative z-10 grid items-center gap-12 pb-16 pt-8 sm:gap-16 sm:pb-24 sm:pt-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-center lg:text-left animate-fade-up">
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-8 bg-accent/50" />
              <span className="font-devanagari text-sm text-accent/90">🙏 आपकी डिजिटल माला</span>
              <span className="h-px w-8 bg-accent/50" />
            </div>

            <h1 className="font-serif text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-foreground">Continue your</span>{" "}
              <span className="text-gold-gradient">daily jaap</span>
              <span className="text-foreground">, anywhere.</span>
            </h1>

            <p className="font-devanagari mt-6 text-xl sm:text-2xl text-foreground/85">
              आपकी डिजिटल माला — हमेशा साथ 🙏
            </p>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg lg:mx-0">
              Jaap Karo is a Hindu devotional mala counter app — a quiet spiritual companion for daily jaap, mantra chanting and unbroken bhakti. Count 108 beads, set sankalp, track your streak, and stay devoted even when your physical mala isn't with you.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href={PLAY_URL} target="_blank" rel="noopener" className="btn-sacred w-full sm:w-auto">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d="M3.6 2.3C3.2 2.6 3 3.1 3 3.8v16.4c0 .7.2 1.2.6 1.5l9.1-9.7L3.6 2.3zM14.5 13.4l2.6 2.6 4.4-2.5c1-.6 1-1.6 0-2.2L17 8.9l-2.5 2.6 0 1.9zM4.7 1.7l9.2 9.8 2.3-2.4L5.6 1.3c-.3-.1-.6-.1-.9.4zM4.7 22.3c.3.5.6.5.9.4L16.2 14.9l-2.3-2.4-9.2 9.8z"/></svg>
                Get it on Google Play
              </a>
              <a href="#features" className="btn-ghost-gold w-full sm:w-auto">Explore Features</a>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-3 text-xs text-foreground/70 sm:grid-cols-4 sm:text-sm">
              {["Works Offline", "Daily Streak", "108 Mala Experience", "Free to Use"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-accent">✦</span> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero visual */}
          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-diya)" }} />
            <div className="relative">
              <img
                src={appIcon}
                alt="Jaap Karo digital mala counter app icon with rudraksha and Om"
                width={220}
                height={220}
                className="mx-auto mb-[-40px] rounded-3xl animate-pulse-glow"
                style={{ filter: "drop-shadow(0 20px 40px hsl(0 0% 0% / 0.6))" }}
              />
              <div className="flex items-end gap-3 sm:gap-5">
                <div className="hidden sm:block opacity-70" style={{ transform: "translateY(20px) rotate(-6deg)" }}>
                    <PhoneMockup image={goalShot} />
                </div>

                <div className="relative z-10">
                    <PhoneMockup image={malaShot} />
                </div>

                <div className="hidden sm:block opacity-70" style={{ transform: "translateY(20px) rotate(6deg)" }}>
                    <PhoneMockup image={settingsShot} />
                </div>
            </div>
            </div>
          </div>
        </div>
      </header>

      <TempleDivider />

      {/* ===== PROBLEM ===== */}
      <Section eyebrow="A familiar feeling" hindi="कभी भूल जाते हो माला घर पर? अब नहीं।">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-5xl text-gold-gradient">
            When your mala isn't with you, your bhakti shouldn't pause.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/75 sm:text-lg">
            We have all felt it — the metro ride without your mala, the long workday, the unexpected travel. The intention to chant is there, but the count slips. Days break. Streaks fade. The mind wanders.
          </p>
          <p className="font-devanagari mt-5 text-lg text-foreground/85">
            जप टूटने न दीजिए। Jaap Karo आपके साथ है — हर समय, हर जगह।
          </p>
        </div>
      </Section>

      {/* ===== WHAT IS ===== */}
      <Section id="about" eyebrow="What is Jaap Karo" title="A digital mala built with reverence">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="card-sacred">
            <p className="leading-relaxed text-foreground/80">
              <strong className="text-foreground">Jaap Karo</strong> is a Hindu devotional mala counter app crafted for serious bhakts who want to keep their daily sadhana unbroken. It brings the traditional <em>108 bead mala experience</em> — the sacred sankhya of completion in Sanatan Dharma — into a calm, distraction-free digital form for your Android device.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              It is not a replacement for your rudraksha or tulsi mala. It is a humble companion for continuity — an offline mala counter that travels with you, so your jaap, your mantra, and your discipline stay alive wherever you are.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Count 11, 21, 27, 54, 108 or 1008. Set your daily goal. Build your streak. Reflect on your history. Return to your physical mala when you can — Jaap Karo will be waiting, quietly, for the next time you need it.
            </p>
          </div>
          <figure className="relative overflow-hidden rounded-3xl">
          <a href={PLAY_URL} target="_blank" rel="noopener">
            <img
              src={diyaGlow}
              alt="Jaap Karo digital mala counter app icon"
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover"
              style={{ filter: "saturate(0.9) brightness(0.85)" }}
            />
            </a>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 40%, hsl(0 13% 5% / 0.8))" }} />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 font-devanagari text-sm text-accent/90 text-center">
              "जहाँ श्रद्धा, वहाँ ईश्वर।"
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* ===== WHO FOR ===== */}
      <Section eyebrow="Made for the devoted" title="Who is Jaap Karo for?">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Daily Jaap Sadhaks", "For those who chant a fixed sankhya every day and want their discipline preserved."],
            ["Traveling Bhakts", "For pilgrims, professionals and students far from their home mandir."],
            ["Mantra Sadhana Seekers", "For those undertaking a 40-day, 108-day or 1008-mala anushthan."],
            ["Beginners in Bhakti", "For new sadhaks learning to build a daily spiritual practice with gentleness."],
            ["Elders & Caregivers", "For anyone who finds counting on fingers tiring and wants a soft, simple aid."],
            ["Anyone Honouring Tradition", "For every devotee who believes consistency is the truest form of bhakti."],
          ].map(([h, d]) => (
            <div key={h} className="card-sacred">
              <h3 className="font-serif text-xl text-foreground">{h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <TempleDivider />

      {/* ===== FEATURES ===== */}
      <Section id="features" eyebrow="Premium Features" title="Crafted for unbroken bhakti" hindi="सादगी में ही समर्पण है">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <article key={f.h} className="card-sacred">
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: "linear-gradient(135deg, hsl(28 95% 49% / 0.2), hsl(43 65% 52% / 0.15))", border: "1px solid hsl(43 65% 52% / 0.4)" }}
              >
                <span className="font-serif text-accent">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-serif text-lg text-foreground">{f.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{f.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ===== HOW IT WORKS ===== */}
      <Section eyebrow="How it works" title="Begin your jaap in three steps">
        <ol className="grid gap-6 sm:grid-cols-3">
          {[
            ["Set your sankalp", "Choose your mantra and daily bead goal — 108, 540 or 1008."],
            ["Tap each bead", "Chant softly and tap. Feel the gentle bell or vibration with every count."],
            ["Build your streak", "Watch your daily discipline grow into weeks, months and lifelong sadhana."],
          ].map(([h, d], i) => (
            <li key={h} className="card-sacred relative">
              <div className="mb-3 font-serif text-5xl text-gold-gradient">०{i + 1}</div>
              <h3 className="font-serif text-xl">{h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ===== SCREENSHOTS CAROUSEL ===== */}
      <Section eyebrow="Inside the app" title="A sacred space, in your pocket">
        <div className="-mx-5 overflow-x-auto pb-6 sm:mx-0">
          <div className="flex min-w-max gap-5 px-5 sm:gap-7 sm:px-0">
            {[screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8].map((img, i) => (
              <div key={i}>
                <PhoneMockup image={img} />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-foreground/50">← swipe to explore →</p>
      </Section>

      <TempleDivider />

      {/* ===== WHY DAILY JAAP ===== */}
      <Section eyebrow="The spiritual essence" title="Why daily jaap matters">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
          <p>
            In Sanatan Dharma, <strong className="text-foreground">jaap</strong> is the loving repetition of a divine name or mantra. It is not just counting — it is the slow, steady tuning of the mind to a higher frequency. Each bead is a small offering. Each round of 108 is a complete circle of devotion.
          </p>
          <p>
            Rishis from time immemorial have spoken of the power of <em>nāma-smaraṇa</em> — that the mere remembrance of the Divine, repeated with shraddha, purifies the chitta, calms the prana and softens the heart. Whether it is "ॐ नमः शिवाय", the Gayatri Mantra, the Hanuman Chalisa or any name dear to your ishta-devta, the consistency of jaap shapes the inner life.
          </p>
          <p>
            <strong className="text-foreground">The discipline is the sadhana.</strong> Five minutes today, five minutes tomorrow, five minutes for years. This is how bhakti deepens. Jaap Karo exists for one quiet purpose — to help that thread of daily devotion stay unbroken.
          </p>
        </div>
      </Section>

      {/* ===== SPIRITUAL GUIDANCE ===== */}
      <Section eyebrow="Spiritual Guidance" title="Listen — a gentle reflection on jaap">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="font-devanagari mb-3 text-lg text-accent/90">श्रद्धा से सुनिए 🙏</p>
            <p className="leading-relaxed text-foreground/80">
              Spiritual guidance has always flowed from the heart of a guru to the heart of a sadhak. This short reflection — shared with deep respect — touches on the inner attitude of jaap: why it is not the count that matters, but the <em>bhāva</em> behind it.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/75">
              We share it as an offering, not a teaching. Hold it lightly, let it settle, and let your own sadhana speak.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 shadow-[var(--shadow-soft)]" style={{ aspectRatio: "9/16", maxWidth: 360, marginInline: "auto", width: "100%" }}>
            <iframe
              src="https://www.youtube.com/embed/B8nFVgjdY3E"
              title="Spiritual guidance on jaap"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </Section>

      {/* ===== QUOTE ===== */}
      <Section>
        <blockquote className="card-sacred mx-auto max-w-3xl text-center">
          <p className="font-devanagari text-2xl text-gold-gradient sm:text-3xl leading-relaxed">
            "जप से बढ़कर कोई साधना नहीं, और निरंतरता से बढ़कर कोई जप नहीं।"
          </p>
          <p className="mt-4 text-sm text-foreground/60">— Anonymous, from the tradition</p>
        </blockquote>
      </Section>

      <TempleDivider />

      {/* ===== FAQ ===== */}
      <Section id="faq" eyebrow="Questions, gently answered" title="Frequently Asked">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="card-sacred !p-0 border">
                <AccordionTrigger className="px-6 py-5 text-left font-serif text-lg hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-foreground/75 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ===== TESTIMONIALS ===== */}
      <Section eyebrow="From the bhakti community" title="Words from fellow devotees">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "Ramesh K.", l: "Pune", q: "Travelling for work, I'd often miss my evening jaap. Jaap Karo has kept my 11-month streak alive. Truly a humble companion." },
            { n: "Priya S.", l: "Delhi", q: "मुझे सबसे अच्छी बात यह लगी कि app में कोई शोर नहीं है — बस माला, बस मंत्र। बहुत शुद्ध अनुभव।" },
            { n: "Anand M.", l: "Bengaluru", q: "The 1008 custom count and offline mode make my Mahamrityunjaya anushthan effortless. Quiet, respectful, beautifully made." },
            { n: "Sushila Devi", l: "Varanasi", q: "उम्र के साथ उँगलियों पर गिनना मुश्किल था। अब रोज़ का जप आसान है, और मन भी शांत रहता है।" },
            { n: "Vikram J.", l: "Jaipur", q: "Finally a Hindu devotional app that respects the tradition. No flashy ads, no gimmicks — just a clean mala counter." },
            { n: "Neha A.", l: "Mumbai", q: "The streak tracking gently keeps me accountable without ever feeling like a fitness app. Perfect balance." },
          ].map((t) => (
            <figure key={t.n} className="card-sacred">
              <p className="text-foreground/85 leading-relaxed">"{t.q}"</p>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-accent/15 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full font-serif text-accent" style={{ background: "hsl(43 65% 52% / 0.12)", border: "1px solid hsl(43 65% 52% / 0.3)" }}>
                  {t.n[0]}
                </div>
                <div>
                  <div className="text-sm text-foreground">{t.n}</div>
                  <div className="text-xs text-foreground/55">{t.l}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <TempleDivider />

      {/* ===== ABOUT BHAKTI WITH EKTA ===== */}
      <Section eyebrow="Behind Jaap Karo" title="BhaktiWithEkta">
        <div className="card-sacred mx-auto max-w-3xl text-center">
          <p className="leading-relaxed text-foreground/80">
            Jaap Karo is lovingly built by <strong className="text-foreground">BhaktiWithEkta</strong> — a small devotional initiative dedicated to sharing the depth of Sanatan Dharma through gentle, modern means. We make tools, write reflections and share spiritual conversations for the modern Hindu seeker.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              ["Google Play Store", PLAY_URL],
              ["YouTube", "https://www.youtube.com/@BhaktiWithEkta"],
              ["Blog", "https://bhaktiwithekta.blogspot.com"],
              ["Instagram", "https://instagram.com/bhaktiwithekta"],
              ["Facebook", "https://www.facebook.com/share/1GzCaLnsUF/"],
            ].map(([n, u]) => (
              <a key={n} href={u} target="_blank" rel="noopener" className="btn-ghost-gold text-sm">{n}</a>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== ALSO BY US ===== */}
      <Section eyebrow="Also by us" title="The Weight of Dharma">
        <div className="card-sacred mx-auto grid max-w-4xl gap-8 sm:grid-cols-[180px_1fr] sm:items-center">
          <div
            className="mx-auto flex aspect-[2/3] w-40 items-center justify-center rounded-lg p-6 text-center font-serif text-xl text-foreground"
            style={{
              background: "linear-gradient(160deg, hsl(0 50% 18%), hsl(0 13% 5%))",
              border: "1px solid hsl(43 65% 52% / 0.3)",
              boxShadow: "var(--shadow-bead)",
            }}
          >
            <div>
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-accent/80">A Book</div>
              <div className="text-gold-gradient">The Weight of Dharma</div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-2xl text-foreground">A reflective journey through duty, devotion and the modern Hindu life.</h3>
            <p className="mt-3 leading-relaxed text-foreground/75">
              From the team behind Jaap Karo — a thoughtful book exploring what it means to carry dharma in today's world. If our app speaks to your bhakti, this book may speak to your buddhi.
            </p>
            <a href="https://amzn.in/d/8KwUFVP" target="_blank" rel="noopener" className="btn-sacred mt-5">
              View on Amazon →
            </a>
          </div>
        </div>
      </Section>

      {/* ===== FOOTER CTA ===== */}
      <footer className="relative mt-12 overflow-hidden border-t" style={{ borderColor: "hsl(43 65% 52% / 0.2)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: `url(${mandalaBg})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "screen" }} />
        <div className="container-sacred relative z-10 py-16 text-center sm:py-24">
          <p className="font-devanagari mb-3 text-lg text-accent/90">🪔 आज से शुरू कीजिए</p>
          <h2 className="font-serif text-3xl text-gold-gradient sm:text-5xl">Your digital mala — always with you.</h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground/75">
            Free. Offline. Built with reverence. Begin your daily jaap with Jaap Karo today.
          </p>
          <a href={PLAY_URL} target="_blank" rel="noopener" className="btn-sacred mt-8">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d="M3.6 2.3C3.2 2.6 3 3.1 3 3.8v16.4c0 .7.2 1.2.6 1.5l9.1-9.7L3.6 2.3z"/></svg>
            Install Jaap Karo Free
          </a>

          <div className="mt-14 flex flex-col items-center gap-3 text-xs text-foreground/55">
            <div className="flex items-center gap-2.5">
              <img src={appIcon} alt="" width={28} height={28} className="rounded-md" />
              <span className="font-serif text-base text-foreground/80">Jaap Karo</span>
            </div>
            <p className="flex items-center gap-2 flex-wrap justify-center">
              <span>Contact: <a href="mailto:bhaktiwithekta@gmail.com" className="text-accent/80 hover:text-accent">bhaktiwithekta@gmail.com</a></span>
              <span>·</span>
              
            // Inside your index.tsx or your Footer component
            <a href="https://bhaktiwithekta.blogspot.com/p/jaap-karo-privacy-policy-bhaktiwithekta.html" target="_blank" rel="noopener noreferrer" className="text-sm underline text-foreground/50 hover:text-accent">Privacy Policy</a>
            </p>
            
            <p className="mt-2 max-w-md font-devanagari text-foreground/55">
              "सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।"
            </p>
            <p className="mt-4">© {new Date().getFullYear()} BhaktiWithEkta · Made with shraddha in India 🇮🇳</p>
          </div>
        </div>
      </footer>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all sm:hidden ${
          showSticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ background: "linear-gradient(180deg, transparent, hsl(0 13% 5% / 0.95) 30%)" }}
      >
        <a href={PLAY_URL} target="_blank" rel="noopener" className="btn-sacred w-full">
          🙏 Install Jaap Karo — Free
        </a>
      </div>
    </>
  );
};

export default Index;
