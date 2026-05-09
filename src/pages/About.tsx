// pages/About.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  Eye,
  Globe,
  Heart,
  MapPin,
  Quote,
  Target,
  Users,
} from "lucide-react";
import { useEffect } from "react";

// ─── Data (easily replaceable by CMS later) ────────────────────────────────
const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Community Members",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Calendar,
    value: "45+",
    label: "Events Hosted",
    color: "from-purple-500 to-violet-400",
  },
  {
    icon: MapPin,
    value: "12",
    label: "African Countries",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Award,
    value: "15+",
    label: "Partner Orgs",
    color: "from-amber-500 to-orange-400",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission‑Driven",
    desc: "Every initiative is guided by our commitment to community upliftment and leadership development.",
  },
  {
    icon: Eye,
    title: "Visionary",
    desc: "We build systems that prepare tomorrow's leaders, today.",
  },
  {
    icon: Heart,
    title: "Inclusive",
    desc: "We welcome all backgrounds, fostering diversity and unity.",
  },
  {
    icon: Globe,
    title: "Pan‑African",
    desc: "We think continent‑wide, act locally, and connect globally.",
  },
];

const team = [
  {
    name: "Ahmed Hassan",
    role: "Founder & Director",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Former community organizer turned ecosystem builder.",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Fatima Ali",
    role: "Community Manager",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Passionate about creating safe, engaging spaces for growth.",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Mohamed Omar",
    role: "Events Coordinator",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Turned online connections into offline magic for 3+ years.",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Amina Yusuf",
    role: "Programs Lead",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Designs leadership curricula that actually stick.",
    social: { twitter: "#", linkedin: "#" },
  },
];

const testimonials = [
  {
    name: "Grace Mwangi",
    role: "Youth Leader, Kenya",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    quote:
      "Tanwiir gave me the tools and network to launch my own community initiative. The mentorship is unmatched.",
  },
  {
    name: "Oumar Diallo",
    role: "Tech Entrepreneur, Senegal",
    photo:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
    quote:
      "I've attended events across Africa – Tanwiir’s vibe is special. It’s where real connections happen.",
  },
];

const partners = [
  "https://placehold.co/120x60?text=Partner+1",
  "https://placehold.co/120x60?text=Partner+2",
  "https://placehold.co/120x60?text=Partner+3",
  "https://placehold.co/120x60?text=Partner+4",
];

// ─── Helper – simple SEO using useEffect ───────────────────────────────────
const useSEO = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Optional: Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      (ogTitle as HTMLMetaElement).setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    (ogTitle as HTMLMetaElement).setAttribute("content", title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      (ogDesc as HTMLMetaElement).setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    (ogDesc as HTMLMetaElement).setAttribute("content", description);
  }, [title, description]);
};

// ─── Main Component ────────────────────────────────────────────────────────
const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  useSEO(
    "About Us | Tanwiir Forum – Building Africa’s Next Leaders",
    "Tanwiir Forum is a community platform connecting young leaders across Africa. Learn our story, values, and meet the team behind the movement.",
  );

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ═══ HERO – Dynamic with parallax ═══════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-200/30 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-200/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        />

        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-cyan-600" />
              Who we are
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-slate-900 leading-[1.1]">
              Illuminating paths to{" "}
              <span className="italic bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                leadership
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mt-6 leading-relaxed">
              Tanwiir Forum is more than an organization – it's a movement. We
              connect, train, and empower a new generation of African leaders
              through events, mentorship, and community.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/join"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Join the community <ArrowRight size={16} />
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium hover:border-slate-300 hover:shadow-sm transition-all"
              >
                Read our story
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ IMPACT STATS – Real numbers, real trust ════════════════════════ */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-md`}
                >
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STORY + MISSION – Visual storytelling ═════════════════════════ */}
      <section id="story" className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-cyan-600 text-sm font-bold uppercase tracking-wider">
                Our story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 mt-2 mb-5">
                From a small gathering to a
                <span className="italic"> continent‑wide</span> movement.
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  In 2019, a group of friends in Mogadishu decided to host a
                  leadership workshop. 30 people showed up. The energy was
                  electric – young people hungry for connection and skills.
                </p>
                <p>
                  That spark became Tanwiir (meaning "illumination" in Somali).
                  Today, we've connected over 2,500 leaders across 12 African
                  countries, hosted 45+ events, and built a community where
                  ideas become action.
                </p>
                <p>
                  We don't just talk about change – we create the spaces where
                  change agents are born.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {team.slice(0, 4).map((t) => (
                    <img
                      key={t.name}
                      src={t.photo}
                      alt={t.name}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-500">+ thousands more</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-2xl opacity-30" />
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop"
                alt="Tanwiir community gathering"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES – Clean, scannable, meaningful ════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-cyan-600 text-sm font-bold uppercase tracking-wider">
              Our guiding principles
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 mt-2">
              What drives us, every day.
            </h2>
            <p className="text-slate-500 mt-4">
              These values aren't just words on a wall – they shape every
              decision, event, and partnership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-4">
                  <value.icon size={22} className="text-cyan-700" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM – Human, relatable, with real faces ══════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-cyan-600 text-sm font-bold uppercase tracking-wider">
              The people
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 mt-2">
              Meet the team behind Tanwiir.
            </h2>
            <p className="text-slate-500 mt-4">
              We're a small but mighty group of community builders, designers,
              and dreamers.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">
                  {member.name}
                </h3>
                <p className="text-cyan-600 text-sm font-medium">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm mt-1">{member.bio}</p>
                <div className="flex gap-2 mt-3">
                  <a
                    href={member.social.twitter}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS – Social proof, emotional ════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-cyan-600 text-sm font-bold uppercase tracking-wider">
              Voices from the community
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-slate-900 mt-2">
              Don't take our word for it.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <Quote size={28} className="text-cyan-200 mb-4" />
                <p className="text-slate-600 leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA – Join the movement ══════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4">
              Ready to lead?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join thousands of young Africans who are shaping the future –
              starting today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/join"
                className="inline-flex items-center gap-2 bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition-all shadow-lg hover:shadow-xl"
              >
                Become a member <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Partner with us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
