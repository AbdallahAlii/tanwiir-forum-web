// pages/Services.tsx
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Handshake,
  Heart,
  Lightbulb,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Leadership Programs",
    desc: "Comprehensive mentorship and coaching to develop visionary leaders who drive community change.",
    longDesc:
      "Our flagship programs pair emerging leaders with experienced mentors, offer leadership labs, and provide real-world project opportunities.",
    audience: "Aspiring & current leaders",
    outcome: "90% of graduates lead community initiatives within 6 months",
  },
  {
    icon: Calendar,
    title: "Community Events",
    desc: "From intimate workshops to large-scale conferences, we create spaces for dialogue, learning, and networking.",
    longDesc:
      "Summits, town halls, networking nights, and skill-building workshops – online and in-person across Africa.",
    audience: "Everyone",
    outcome: "Over 5,000 attendees connected in 2024",
  },
  {
    icon: BookOpen,
    title: "Educational Workshops",
    desc: "Hands-on sessions covering public speaking, project management, strategic thinking, and more.",
    longDesc:
      "Practical, actionable skills taught by industry experts and peer leaders.",
    audience: "Students & young professionals",
    outcome: "Participants report 40% increase in confidence",
  },
  {
    icon: Award,
    title: "Youth Empowerment",
    desc: "Dedicated initiatives for young people to discover their potential and build essential life skills.",
    longDesc:
      "After-school programs, youth councils, and empowerment camps designed by and for the next generation.",
    audience: "Ages 15–25",
    outcome: "Thousands of youth engaged across 12 countries",
  },
  {
    icon: Target,
    title: "Strategic Consulting",
    desc: "Helping organizations align their goals with community-focused impact strategies.",
    longDesc:
      "We advise NGOs, startups, and government bodies on community engagement, program design, and measurable impact.",
    audience: "Organizations & institutions",
    outcome: "30+ partners served since 2022",
  },
  {
    icon: Sparkles,
    title: "Innovation Hub",
    desc: "A creative space where ideas are nurtured, prototyped, and developed into real-world solutions.",
    longDesc:
      "Incubation support, design sprints, and access to a network of innovators and funders.",
    audience: "Entrepreneurs & creators",
    outcome: "15+ community-led projects launched",
  },
  {
    icon: Lightbulb,
    title: "Mentorship Network",
    desc: "Connecting aspiring leaders with experienced mentors for guidance and professional development.",
    longDesc:
      "One-on-one and group mentorship, career coaching, and peer learning circles.",
    audience: "All members",
    outcome: "500+ mentorship matches facilitated",
  },
  {
    icon: Handshake,
    title: "Partnership Programs",
    desc: "Building bridges between organizations, governments, and communities for collective impact.",
    longDesc:
      "Strategic alliances that amplify resources, share knowledge, and co-create solutions.",
    audience: "Corporate & non-profit partners",
    outcome: "30+ active partnerships across Africa",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const Services = () => {
  return (
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .font-display { font-family: 'DM Serif Display', Georgia, serif; }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-cyan-600" />
              What we offer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight text-slate-900 leading-[1.1] mb-5">
              Empowering through{" "}
              <span className="italic bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                action.
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-light mb-8">
              We design programs and services that equip individuals and
              organizations with the tools, connections, and confidence to
              create lasting change.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-cyan-700 transition-all shadow-md"
              >
                Work with us <ArrowRight size={16} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-medium hover:border-slate-300 hover:shadow-sm transition-all"
              >
                See upcoming events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid – Expanded with audience & outcome */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900">
              Programs that{" "}
              <span className="italic text-cyan-600">transform</span>{" "}
              communities
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Every service is designed with one goal: to build leadership,
              spark innovation, and foster genuine connection.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                    <service.icon size={20} className="text-cyan-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Heart size={12} className="text-rose-400" />
                          {service.audience}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <CheckCircle size={12} className="text-emerald-500" />
                          {service.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact / Trust Section */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "2,500+", label: "Community members", icon: Users },
              { number: "120+", label: "Events hosted", icon: Calendar },
              {
                number: "30+",
                label: "Partner organizations",
                icon: Handshake,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <stat.icon size={28} className="text-cyan-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 font-display">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900">
              How we work <span className="italic text-cyan-600">with you</span>
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Whether you're an individual, an organization, or a partner –
              here's what you can expect.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Connect",
                desc: "Reach out via form, email, or WhatsApp – tell us about your goals.",
              },
              {
                step: "02",
                title: "Explore",
                desc: "We'll schedule a call to understand your needs and match you with the right program.",
              },
              {
                step: "03",
                title: "Engage",
                desc: "Join events, workshops, or mentorship. Participate and grow.",
              },
              {
                step: "04",
                title: "Lead",
                desc: "Apply your learning, give back to the community, and inspire others.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 text-center"
              >
                <div className="text-4xl font-display font-bold text-cyan-100 mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/3 -right-3 text-slate-200">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">
              Real impact
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-normal mt-2 mb-4">
              “Tanwiir’s mentorship program changed my career trajectory.”
            </h2>
            <p className="text-slate-300 text-base">
              — Fatima Ali, former mentee, now Community Manager at Tanwiir
            </p>
            <div className="mt-8 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-amber-400 fill-amber-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900 mb-4">
              Ready to take the{" "}
              <span className="italic text-cyan-600">next step?</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8">
              Whether you're looking to grow as a leader, partner with us, or
              bring a program to your community – we're here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-cyan-700 transition-all shadow-md"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-8 py-3.5 rounded-xl font-semibold hover:border-slate-300 transition-all"
              >
                Browse upcoming events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
