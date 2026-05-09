// pages/Index.tsx (full file with hero fixes)
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Globe,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import communityImg from "@/assets/community.jpg";
import eventsImg from "@/assets/events.jpg";

// ─── Data (unchanged) ──────────────────────────────────────────────────────
const stats = [
  { number: "5K+", label: "Community Members", icon: Users },
  { number: "120+", label: "Events Hosted", icon: Calendar },
  { number: "50+", label: "Guest Speakers", icon: Star },
  { number: "30+", label: "Global Partners", icon: Globe },
];

const services = [
  {
    icon: Users,
    title: "Leadership Programs",
    desc: "Develop future leaders through mentoring and workshops designed for real-world impact.",
    color: "from-violet-500/10 to-purple-500/10",
    accent: "text-violet-600",
    badge: "Popular",
  },
  {
    icon: Calendar,
    title: "Community Events",
    desc: "Engaging gatherings that bring people together for meaningful connections and growth.",
    color: "from-cyan-500/10 to-teal-500/10",
    accent: "text-cyan-600",
    badge: null,
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    desc: "Access guides, materials, and learning opportunities to fuel your journey.",
    color: "from-amber-500/10 to-orange-500/10",
    accent: "text-amber-600",
    badge: "New",
  },
  {
    icon: Award,
    title: "Youth Empowerment",
    desc: "Programs designed to uplift and inspire the next generation of changemakers.",
    color: "from-rose-500/10 to-pink-500/10",
    accent: "text-rose-600",
    badge: null,
  },
  {
    icon: Target,
    title: "Strategic Partnerships",
    desc: "Collaborating with organizations for greater community reach and shared success.",
    color: "from-emerald-500/10 to-green-500/10",
    accent: "text-emerald-600",
    badge: null,
  },
  {
    icon: Sparkles,
    title: "Innovation Hub",
    desc: "A space for ideas, creativity, and transformative solutions to today's challenges.",
    color: "from-blue-500/10 to-indigo-500/10",
    accent: "text-blue-600",
    badge: "Coming Soon",
  },
];

const testimonials = [
  {
    name: "Amina Hassan",
    role: "Youth Leader",
    avatar: "AH",
    text: "Tanwiir completely changed my perspective on leadership. The community here is unlike anything else.",
    rating: 5,
  },
  {
    name: "Omar Farah",
    role: "Entrepreneur",
    avatar: "OF",
    text: "I found my co-founder and my best mentors through this forum. The connections are genuine and lasting.",
    rating: 5,
  },
  {
    name: "Safia Warsame",
    role: "Student",
    avatar: "SW",
    text: "The educational resources and workshops gave me the confidence to pursue my goals fearlessly.",
    rating: 5,
  },
];

const avatarColors = [
  "bg-violet-500",
  "bg-cyan-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-emerald-500",
];

const recentActivity = [
  { user: "Amina H.", action: "joined the Leadership Program", time: "2m ago" },
  { user: "Omar F.", action: "registered for the Summit 2025", time: "5m ago" },
  {
    user: "Safia W.",
    action: "completed a mentorship session",
    time: "12m ago",
  },
];

// ─── Animations ────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

// ─── Sub-components ────────────────────────────────────────────────────────
const AvatarStack = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {avatarColors.map((color, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`relative w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm cursor-pointer`}
            style={{ zIndex: 5 - i }}
          >
            {["AH", "OF", "SW", "KM", "LB"][i]}
            {hoverIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
              >
                {
                  ["Ahmed H.", "Omar F.", "Safia W.", "Khalid M.", "Layla B."][
                    i
                  ]
                }
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-800">5,000+ members</p>
        <p className="text-xs text-slate-500">joined this year</p>
      </div>
    </div>
  );
};

const ActivityFeed = () => (
  <div className="bg-white/90 backdrop-blur-md border border-slate-100 rounded-2xl p-4 shadow-xl w-72">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
        Live Activity
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] text-emerald-600 font-medium">Live</span>
      </span>
    </div>
    {recentActivity.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 + i * 0.15 }}
        className="flex items-start gap-2.5 py-2.5 border-t border-slate-50 first:border-0"
      >
        <div
          className={`w-7 h-7 rounded-full ${avatarColors[i]} flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0`}
        >
          {item.user
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <p className="text-xs text-slate-700 leading-snug">
            <span className="font-semibold">{item.user}</span> {item.action}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">{item.time}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

// ─── Main Component with redesigned Hero ───────────────────────────────────
const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      className="bg-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .font-display { font-family: 'DM Serif Display', Georgia, serif; }
      `}</style>

      {/* ═══════════════════════════ HERO (Redesigned with pattern + image) ═══ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",
        }}
      >
        {/* Modern dot pattern – warm, network-like (stars connecting) */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0f172a 1.5px, transparent 1.5px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Subtle connecting lines effect (network feel) */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <motion.div style={{ y: heroY }} className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
              {/* Left side – text & CTAs */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Badge – subtle */}
                <motion.div variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Active community · 5,000+ members
                  </span>
                </motion.div>

                {/* Main headline – new text */}
                <motion.h1
                  variants={fadeUp}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 leading-[1.1]"
                >
                  Enlightening Minds,
                  <br />
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Empowering Futures.
                  </span>
                </motion.h1>

                {/* Subheadline – new text */}
                <motion.p
                  variants={fadeUp}
                  className="text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed font-light"
                >
                  Tanwiir Forum connects students, professionals, and
                  influential speakers to build impactful leaders who shape the
                  future in a dynamic, open environment.
                </motion.p>

                {/* CTAs with hover effects */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to="/events"
                      className="group inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-cyan-600 shadow-md hover:shadow-lg"
                    >
                      Explore Events
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/about"
                      className="group inline-flex items-center gap-2 text-slate-600 font-medium text-sm hover:text-slate-900 transition-colors"
                    >
                      Learn about us
                      <ChevronRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Avatar stack with hover tooltips */}
                <motion.div variants={fadeUp} className="pt-4">
                  <AvatarStack />
                </motion.div>
              </motion.div>

              {/* Right side – image (re-added) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/40">
                  <img
                    src={communityImg}
                    alt="Tanwiir community gathering"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent" />
                  {/* Optional floating badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
                    <Sparkles size={12} className="text-cyan-600" />
                    <span className="text-xs font-semibold text-slate-700">
                      Live community
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint – subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-px h-6 bg-slate-300" />
        </motion.div>
      </section>

      {/* ═══════════════════════ STATS (unchanged) ═══════════════════════ */}
      <section className="border-y border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-slate-100">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center text-center lg:px-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  <stat.icon size={18} className="text-cyan-600" />
                </div>
                <div
                  className="text-4xl font-bold text-slate-900 tracking-tight"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {stat.number}
                </div>
                <div className="text-xs text-slate-400 mt-1.5 font-semibold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES (unchanged) ═══════════════════ */}
      <section className="py-24 md:py-32 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-3">
                What we offer
              </p>
              <h2
                className="text-4xl md:text-5xl text-slate-900 leading-tight"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Built for your
                <br />
                <span
                  className="italic text-slate-500"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  growth & impact.
                </span>
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              View all programs
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="service-card group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  {service.badge && (
                    <span className="absolute top-0 right-0 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white">
                      {service.badge}
                    </span>
                  )}
                  <div className="service-icon w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-white border border-slate-100 flex items-center justify-center mb-5 transition-colors duration-300">
                    <service.icon size={20} className={service.accent} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <div
                    className={`flex items-center gap-1 mt-5 text-xs font-semibold ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    Learn more <ChevronRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ COMMUNITY (unchanged) ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-300/40">
                <img
                  src={communityImg}
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/25 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 w-52"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={13} className="text-amber-500" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    This Week
                  </span>
                </div>
                <div
                  className="text-3xl text-slate-900 font-bold"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  12 Events
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  across 5 cities
                </div>
                <div className="flex -space-x-1.5 mt-3">
                  {avatarColors.slice(0, 4).map((c, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-full ${c} border-2 border-white`}
                    />
                  ))}
                  <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-slate-500">
                    +99
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-5">
                Community First
              </p>
              <h2
                className="text-4xl md:text-5xl text-slate-900 leading-[1.1] mb-6"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Creating impact
                <br />
                through collective
                <br />
                <span
                  className="italic text-slate-400"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  action.
                </span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md font-light">
                Our community is at the heart of everything we do. Join a
                network of like-minded individuals focused on growth,
                leadership, and meaningful change.
              </p>
              {[
                "Access to exclusive workshops and speaker sessions",
                "Peer-to-peer mentorship and skill sharing",
                "A safe, inclusive space for all backgrounds",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-3.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronRight size={10} className="text-cyan-600" />
                  </div>
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
              <div className="flex items-center gap-4 mt-10">
                <Link
                  to="/community"
                  className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  Join Our Community
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS (unchanged) ═══════════════════ */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
              Community Stories
            </p>
            <h2
              className="text-4xl md:text-5xl text-white leading-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Voices from
              <span
                className="italic text-slate-400"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {" "}
                our members.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative p-6 rounded-2xl border bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star
                      key={si}
                      size={12}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${avatarColors[i]} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ EVENTS (unchanged) ═══════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-4">
                Upcoming Events
              </p>
              <h2
                className="text-4xl md:text-5xl text-slate-900 leading-[1.1] mb-6"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Don't miss
                <br />
                our next
                <br />
                <span
                  className="italic text-slate-400"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  gathering.
                </span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-md font-light">
                From inspiring keynotes to hands-on workshops — every Tanwiir
                event is an opportunity to connect, learn, and grow.
              </p>
              {[
                {
                  title: "Annual Leadership Summit",
                  date: "Jun 14, 2025",
                  type: "In-person",
                },
                {
                  title: "Youth Innovation Challenge",
                  date: "Jul 2, 2025",
                  type: "Hybrid",
                },
                {
                  title: "Mentorship Kickoff Night",
                  date: "Jul 18, 2025",
                  type: "Online",
                },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-4 py-4 border-b border-slate-100 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <Calendar size={15} className="text-cyan-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {event.date}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 rounded-full px-2.5 py-1 flex-shrink-0 uppercase tracking-wide">
                    {event.type}
                  </span>
                  <ChevronRight
                    size={14}
                    className="text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                  />
                </motion.div>
              ))}
              <Link
                to="/events"
                className="group inline-flex items-center gap-2 mt-9 bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                View All Events
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-300/40">
                <img
                  src={eventsImg}
                  alt="Community events"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
              >
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Next Event In
                </p>
                <div
                  className="text-3xl text-slate-900 font-bold"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  12 Days
                </div>
                <div className="text-xs text-cyan-600 font-semibold mt-0.5">
                  Annual Leadership Summit
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA (unchanged) ═══════════════════════ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-violet-800" />
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold tracking-wide mb-8">
              <Sparkles size={12} />
              Join the movement
            </span>
            <h2
              className="text-5xl md:text-6xl lg:text-[72px] text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Ready to start
              <br />
              <span
                className="italic text-cyan-200"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                your journey?
              </span>
            </h2>
            <p className="text-blue-100/80 text-base md:text-lg max-w-md mx-auto mb-10 font-light leading-relaxed">
              Join thousands making a real difference in their communities. Your
              seat at the table is waiting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-2.5 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-sm hover:bg-cyan-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                Get Involved Now
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/events"
                className="group flex items-center gap-2.5 bg-white/10 text-white border border-white/25 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-sm hover:bg-white/20 transition-all duration-300"
              >
                Browse Events
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <p className="text-blue-200/50 text-xs mt-8 font-medium tracking-wide">
              Free to join · No commitments · Open to everyone
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
