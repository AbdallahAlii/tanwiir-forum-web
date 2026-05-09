// pages/Contact.tsx
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Twitter,
} from "lucide-react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
}

// ─── Animation variants ──────────────────────────────────────────────────
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// ─── Contact page component ──────────────────────────────────────────────
const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@tanwiirforum.com",
      link: "mailto:hello@tanwiirforum.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+252 61 234 5678",
      link: "tel:+252612345678",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Mogadishu, Somalia",
      link: "#",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+252 61 234 5678",
      link: "https://wa.me/252612345678",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter", link: "#", color: "hover:text-sky-500" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "#",
      color: "hover:text-pink-500",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      link: "#",
      color: "hover:text-indigo-500",
    },
  ];

  const inquiryOptions = [
    {
      value: "general",
      label: "General question",
      description: "Anything else – we're here to help.",
    },
    {
      value: "partnership",
      label: "Partnership opportunity",
      description: "Let's collaborate for greater impact.",
    },
    {
      value: "speaker",
      label: "Invite a speaker",
      description: "We have amazing leaders ready to share.",
    },
    {
      value: "volunteer",
      label: "Volunteer with us",
      description: "Join our team of changemakers.",
    },
    {
      value: "feedback",
      label: "Feedback or thanks",
      description: "We love hearing from you.",
    },
  ];

  return (
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .font-display { font-family: 'DM Serif Display', Georgia, serif; }
      `}</style>

      {/* ═══ HERO SECTION ═══════════════════════════════════════════════════ */}
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
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight text-slate-900 leading-[1.1] mb-5">
              Let's{" "}
              <span className="italic bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                connect.
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-light">
              Whether you have a question, want to partner, or just say hello –
              we're listening. Fill out the form below or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ MAIN CONTENT: FORM + CONTACT INFO ═══════════════════════════════ */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Left: Form Column */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="mb-6">
                  <h2 className="font-display text-2xl text-slate-900 mb-2">
                    Send us a message
                  </h2>
                  <p className="text-slate-500 text-sm">
                    We'll get back to you within 24 hours.
                  </p>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2"
                  >
                    <CheckCircle size={18} className="text-emerald-600" />
                    Thank you! Your message has been sent. We'll reply soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all text-slate-900 placeholder:text-slate-400"
                        placeholder="Ahmed Hassan"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all text-slate-900 placeholder:text-slate-400"
                        placeholder="hello@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      What is this about? *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all text-slate-900"
                    >
                      {inquiryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-400 mt-1.5">
                      {
                        inquiryOptions.find(
                          (opt) => opt.value === formData.inquiryType,
                        )?.description
                      }
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="Partnership inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all text-slate-900 placeholder:text-slate-400 resize-y"
                      placeholder="Tell us what you'd like to share or ask..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send message{" "}
                        <Send
                          size={15}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right: Contact Methods & Social */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact methods */}
              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    target={method.label === "Email" ? "_self" : "_blank"}
                    rel={method.label !== "Email" ? "noopener noreferrer" : ""}
                    variants={fadeUp}
                    className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-sm`}
                    >
                      <method.icon size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        {method.label}
                      </p>
                      <p className="text-slate-500 text-sm group-hover:text-cyan-600 transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Social links */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-cyan-500" />
                  Connect socially
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 ${social.color} hover:border-slate-300 hover:shadow-sm transition-all duration-200`}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response promise */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      We reply within 24h
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Our team checks messages daily. For urgent matters, reach
                      us on WhatsApp or give us a call.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT HAPPENS NEXT? SECTION ══════════════════════════════════════ */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-cyan-600 text-sm font-bold uppercase tracking-wider">
              What happens next?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900 mt-2">
              From message to <span className="italic">action.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "You reach out",
                desc: "Fill the form or connect via social/WhatsApp.",
                icon: MessageCircle,
              },
              {
                step: "2",
                title: "We read & reply",
                desc: "Our team personally reviews every message within 24h.",
                icon: Mail,
              },
              {
                step: "3",
                title: "Let's talk",
                desc: "We schedule a call or meeting to understand your needs.",
                icon: Heart,
              },
              {
                step: "4",
                title: "Make impact",
                desc: "Together, we create something meaningful.",
                icon: Sparkles,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 text-center border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-700 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
                <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FREQUENTLY ASKED (optional) ═════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-normal text-slate-900">
              Quick answers
            </h2>
            <p className="text-slate-500 mt-2">
              Common questions before you reach out.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                q: "How long does it take to get a reply?",
                a: "Usually within 24 hours, often sooner.",
              },
              {
                q: "Do you accept partnership proposals?",
                a: "Absolutely – we love collaborating with aligned organizations.",
              },
              {
                q: "Can I invite a speaker to my event?",
                a: "Yes! Use the 'Invite a speaker' option and we'll get back to you.",
              },
              {
                q: "Is there a physical office?",
                a: "Our main hub is in Mogadishu, but we operate across Africa virtually.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 border border-slate-100 rounded-xl hover:border-slate-200 transition-all"
              >
                <h3 className="font-semibold text-slate-800 text-sm">
                  {faq.q}
                </h3>
                <p className="text-slate-500 text-sm mt-1">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA – Join community ══════════════════════════════════════ */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-normal mb-3">
              Not ready to reach out yet?
            </h2>
            <p className="text-slate-300 mb-6">
              Join our newsletter for updates, event announcements, and
              leadership insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-xl font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-slate-400 text-xs mt-4">
              No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
