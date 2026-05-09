import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend - just show feedback
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6">
              Get In <span className="gold-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a question or want to collaborate? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground min-h-[150px] resize-y"
                  placeholder="Tell us more..."
                  required
                />
              </div>
              <button
                type="submit"
                className="gold-gradient px-8 py-3.5 rounded-xl font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "info@tanwiirforum.com" },
              { icon: Phone, label: "Phone", value: "+252 XXX XXXXXX" },
              { icon: MapPin, label: "Location", value: "Mogadishu, Somalia" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
