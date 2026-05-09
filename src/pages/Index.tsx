// import Section from "@/components/Section";
// import { motion, Variants } from "framer-motion";
// import {
//   ArrowRight,
//   Award,
//   BookOpen,
//   Calendar,
//   ChevronRight,
//   Sparkles,
//   Target,
//   Users,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // Import your assets
// import communityImg from "@/assets/community.jpg";
// import eventsImg from "@/assets/events.jpg";

// const stats = [
//   { number: "5K+", label: "Community Members" },
//   { number: "120+", label: "Events Hosted" },
//   { number: "50+", label: "Guest Speakers" },
//   { number: "30+", label: "Partners" },
// ];

// const services = [
//   {
//     icon: Users,
//     title: "Leadership Programs",
//     desc: "Develop future leaders through mentoring and workshops designed for real-world impact.",
//   },
//   {
//     icon: Calendar,
//     title: "Community Events",
//     desc: "Engaging gatherings that bring people together for meaningful connections and growth.",
//   },
//   {
//     icon: BookOpen,
//     title: "Educational Resources",
//     desc: "Access guides, materials, and learning opportunities to fuel your journey.",
//   },
//   {
//     icon: Award,
//     title: "Youth Empowerment",
//     desc: "Programs designed to uplift and inspire the next generation of changemakers.",
//   },
//   {
//     icon: Target,
//     title: "Strategic Partnerships",
//     desc: "Collaborating with organizations for greater community reach and shared success.",
//   },
//   {
//     icon: Sparkles,
//     title: "Innovation Hub",
//     desc: "A space for ideas, creativity, and transformative solutions to today's challenges.",
//   },
// ];

// const Index = () => {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 24 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   return (
//     <div className="bg-white selection:bg-cyan-100 selection:text-cyan-900 min-h-screen font-sans">
//       {/* HERO SECTION - Preserved original background with optimized typography */}
//       <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-24 md:pt-28">
//         {/* MASKED GRID - Smooth fade transition */}
//         <div
//           className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"
//           style={{
//             maskImage:
//               "linear-gradient(to bottom, black 60%, transparent 100%)",
//             WebkitMaskImage:
//               "linear-gradient(to bottom, black 60%, transparent 100%)",
//           }}
//         />

//         {/* Dynamic Background Glow - preserved */}
//         <motion.div
//           animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-200/40 blur-[120px] rounded-full pointer-events-none"
//         />

//         <div className="container-max px-6 md:px-8 relative z-10 mx-auto text-center">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="max-w-4xl mx-auto"
//           >
//             {/* Badge - Clean and subtle */}
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm mb-6 md:mb-8"
//             >
//               <Sparkles size={14} className="text-cyan-500" />
//               <span className="text-xs md:text-sm font-medium text-slate-600 tracking-wide">
//                 Connect. Learn. Lead.
//               </span>
//             </motion.div>

//             {/* Main headline - Optimized responsive typography: 36px mobile → 60px desktop */}
//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] sm:leading-[1.15] tracking-tight text-slate-900 mb-4 md:mb-6"
//             >
//               Enlightening Minds,
//               <br />
//               <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
//                 Empowering Futures.
//               </span>
//             </motion.h1>

//             {/* Subheadline - 16px mobile, 18px desktop with comfortable line height */}
//             <motion.p
//               variants={itemVariants}
//               className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed md:leading-relaxed font-normal"
//             >
//               Tanwiir Forum connects students, professionals, and influential
//               speakers to build impactful leaders who shape the future in a
//               dynamic, open environment.
//             </motion.p>

//             {/* CTA Buttons - Enhanced padding and hover effects */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-wrap justify-center gap-3 md:gap-4"
//             >
//               <Link
//                 to="/events"
//                 className="group bg-slate-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:bg-cyan-600 shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2"
//               >
//                 Explore Events
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//               </Link>
//               <Link
//                 to="/about"
//                 className="bg-white text-slate-700 border border-slate-200 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
//               >
//                 Learn More
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* STATS SECTION - Elevated card with spacing */}
//       <section className="relative z-20 -mt-12 md:-mt-16 pb-16 md:pb-20">
//         <div className="container-max mx-auto px-6 md:px-8">
//           <div className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 md:p-10 shadow-lg shadow-slate-200/50 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: i * 0.1, duration: 0.4 }}
//                 className="text-center"
//               >
//                 <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
//                   {stat.number}
//                 </div>
//                 <div className="text-[11px] md:text-xs font-medium text-slate-400 uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION - Clean cards with hover lift effect */}
//       <Section className="bg-white py-16 md:py-24">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
//             Our Core Services
//           </h2>
//           <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
//             Comprehensive programs designed to foster growth and lasting impact
//           </p>
//           <div className="w-12 h-0.5 bg-cyan-500 mx-auto mt-5 md:mt-6 rounded-full" />
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ delay: i * 0.06, duration: 0.4 }}
//               whileHover={{ y: -6 }}
//               className="group p-5 md:p-6 rounded-xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-cyan-50 transition-colors duration-300">
//                 <service.icon size={20} className="text-cyan-600" />
//               </div>
//               <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-slate-500 leading-relaxed text-sm">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* COMMUNITY SECTION - Clean two-column layout with spacing */}
//       <Section className="bg-slate-50/50 rounded-2xl my-6 md:my-8 mx-4 py-12 md:py-16">
//         <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center px-4 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative group"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl blur-xl" />
//             <img
//               src={communityImg}
//               alt="Community gathering"
//               className="rounded-xl shadow-lg relative z-10 w-full object-cover aspect-[4/3]"
//             />
//           </motion.div>
//           <div>
//             <span className="text-cyan-600 font-medium uppercase tracking-wider text-xs">
//               Building Bridges
//             </span>
//             <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-3 mb-4 text-slate-900 leading-tight">
//               Creating Impact through Collective Action
//             </h2>
//             <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
//               Our community is at the heart of everything we do. Join a network
//               of like-minded individuals focused on growth, leadership, and
//               meaningful change.
//             </p>
//             <Link
//               to="/community"
//               className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:gap-3 transition-all duration-300 text-sm group"
//             >
//               Join Our Community
//               <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
//             </Link>
//           </div>
//         </div>
//       </Section>

//       {/* EVENTS SECTION - Mirror layout with preserved colors */}
//       <Section className="bg-white py-16 md:py-24">
//         <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center px-4 md:px-8">
//           <div className="order-2 lg:order-1">
//             <span className="text-cyan-600 font-medium uppercase tracking-wider text-xs">
//               Upcoming Events
//             </span>
//             <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-3 mb-4 text-slate-900 leading-tight">
//               Don't Miss Our Next Gathering
//             </h2>
//             <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
//               From keynote speeches to interactive workshops, our events are
//               crafted to educate, inspire, and connect. Be part of something
//               meaningful.
//             </p>
//             <Link
//               to="/events"
//               className="inline-flex items-center gap-2 bg-cyan-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium text-sm hover:bg-cyan-700 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
//             >
//               View All Events
//               <ArrowRight size={14} />
//             </Link>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="order-1 lg:order-2 relative group"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl blur-xl" />
//             <img
//               src={eventsImg}
//               alt="Community events"
//               className="rounded-xl shadow-lg relative z-10 w-full object-cover aspect-[4/3]"
//             />
//           </motion.div>
//         </div>
//       </Section>

//       {/* FINAL CTA - Clean and minimal with proper spacing */}
//       <Section className="py-16 md:py-20 lg:py-24 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="max-w-2xl mx-auto px-6"
//         >
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-slate-900 tracking-tight">
//             Ready to start your journey?
//           </h2>
//           <p className="text-slate-500 mb-6 md:mb-8 max-w-md mx-auto text-sm md:text-base">
//             Join thousands of others who are making a difference in their
//             communities and beyond.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-medium text-sm md:text-base hover:bg-cyan-600 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
//           >
//             Get Involved Now
//             <ChevronRight className="w-3.5 h-3.5" />
//           </Link>
//         </motion.div>
//       </Section>
//     </div>
//   );
// };

// export default Index;
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Globe,
  MapPin,
  Play,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import communityImg from "@/assets/community.jpg";
import eventsImg from "@/assets/events.jpg";

// ─── Data ──────────────────────────────────────────────────────────────────
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
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

// ─── Sub-components ────────────────────────────────────────────────────────
const AvatarStack = () => (
  <div className="flex items-center gap-3">
    <div className="flex -space-x-2.5">
      {avatarColors.map((color, i) => (
        <div
          key={i}
          className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}
          style={{ zIndex: 5 - i }}
        >
          {["AH", "OF", "SW", "KM", "LB"][i]}
        </div>
      ))}
    </div>
    <div>
      <p className="text-sm font-semibold text-slate-800">5,000+ members</p>
      <p className="text-xs text-slate-500">joined this year</p>
    </div>
  </div>
);

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

// ─── Main Component ─────────────────────────────────────────────────────────
const Index = () => {
  const heroRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      className="bg-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      {/* Font + global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .font-display { font-family: 'DM Serif Display', Georgia, serif; }
        .service-card:hover .service-icon { transform: scale(1.1) rotate(-5deg); }
        .service-icon { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
      `}</style>

      {/* ═══════════════════════════ HERO ═══════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #f8fafc 0%, #f1f5f9 40%, #eff6ff 100%)",
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-cyan-200/60 to-blue-300/30 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-52 -left-52 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-200/40 to-purple-300/20 blur-3xl pointer-events-none"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20">
            <div className="grid lg:grid-cols-[1fr_460px] gap-12 xl:gap-20 items-center">
              {/* ── Left: Copy ── */}
              <motion.div variants={stagger} initial="hidden" animate="visible">
                {/* Badge */}
                <motion.div variants={fadeUp} className="mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600 tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Now welcoming new members — Join free
                    <ChevronRight size={12} className="text-slate-400" />
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={fadeUp}
                  className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.04] tracking-tight text-slate-900 mb-7"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  Where Leaders
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                      Come Together.
                    </span>
                    {/* Wavy underline */}
                    <svg
                      className="absolute -bottom-1 left-0 w-full overflow-visible"
                      height="8"
                      viewBox="0 0 340 8"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M0 6 Q42 1 85 6 Q127 11 170 6 Q212 1 255 6 Q297 11 340 6"
                        stroke="url(#waveGrad)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          delay: 0.9,
                          duration: 0.9,
                          ease: "easeOut",
                        }}
                      />
                      <defs>
                        <linearGradient
                          id="waveGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#0891b2" />
                          <stop offset="50%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </motion.h1>

                {/* Sub-copy */}
                <motion.p
                  variants={fadeUp}
                  className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-9 font-light"
                >
                  Tanwiir Forum is a vibrant community where students,
                  professionals, and changemakers unite to learn, grow, and lead
                  with purpose.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-4 mb-12"
                >
                  <Link
                    to="/events"
                    className="group flex items-center gap-2.5 bg-slate-900 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-cyan-600 shadow-lg shadow-slate-900/15 hover:shadow-cyan-500/30 hover:scale-[1.02]"
                  >
                    Explore Events
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    to="/about"
                    className="group flex items-center gap-2.5 text-slate-600 font-semibold text-sm hover:text-slate-900 transition-colors"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm group-hover:border-slate-300 transition-all group-hover:shadow-md">
                      <Play size={12} className="text-slate-700 ml-0.5" />
                    </span>
                    Watch our story
                  </Link>
                </motion.div>

                {/* Avatar stack */}
                <motion.div variants={fadeUp}>
                  <AvatarStack />
                </motion.div>
              </motion.div>

              {/* ── Right: Visual card cluster ── */}
              <div className="hidden lg:block relative h-[560px]">
                {/* Main image */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute top-0 left-0 right-6 h-[370px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60"
                >
                  <img
                    src={communityImg}
                    alt="Community"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <MapPin size={13} className="text-cyan-600" />
                    <span className="text-xs font-semibold text-slate-700">
                      Mogadishu, Somalia
                    </span>
                  </div>
                </motion.div>

                {/* Growth card */}
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute top-6 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-44"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={13} className="text-emerald-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Growth
                    </span>
                  </div>
                  <div
                    className="text-3xl font-bold text-slate-900"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    +48%
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    members this year
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "72%" }}
                      transition={{
                        delay: 1.1,
                        duration: 1.2,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Activity feed */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.75 }}
                  className="absolute bottom-0 right-0 left-6"
                >
                  <ActivityFeed />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        >
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════ STATS ══════════════════════════════════════ */}
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

      {/* ═══════════════════════ SERVICES ═══════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
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

          {/* Grid */}
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
                {/* Gradient hover bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  {service.badge && (
                    <span className="absolute top-0 right-0 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white">
                      {service.badge}
                    </span>
                  )}
                  <div
                    className={`service-icon w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-white border border-slate-100 flex items-center justify-center mb-5 transition-colors duration-300`}
                  >
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

      {/* ═══════════════════════ COMMUNITY ══════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
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
              {/* Floating events card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 w-52"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={13} className="text-amber-500" />
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

            {/* Text */}
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
                leadership, and meaningful change. Every voice here matters.
              </p>

              {/* Feature list */}
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

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════════════ */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

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
                onClick={() => setActiveTestimonial(i)}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeTestimonial === i
                    ? "bg-white/10 border-white/20 shadow-xl"
                    : "bg-white/5 border-white/10 hover:bg-white/8"
                }`}
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

      {/* ═══════════════════════ EVENTS ═════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
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
                event is an opportunity to connect, learn, and grow alongside
                your community.
              </p>

              {/* Event list */}
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

            {/* Image */}
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
              {/* Floating countdown */}
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

      {/* ═══════════════════════ FINAL CTA ══════════════════════════════════ */}
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
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/10 blur-3xl pointer-events-none"
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
              Join thousands making a real difference in their communities and
              beyond. Your seat at the table is waiting.
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
