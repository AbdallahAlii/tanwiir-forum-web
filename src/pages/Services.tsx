import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Users, Calendar, BookOpen, Award, Target, Sparkles, Lightbulb, Handshake } from "lucide-react";

const services = [
  { icon: Users, title: "Leadership Programs", desc: "Comprehensive mentorship and coaching programs to develop visionary leaders who can drive community change.", color: "from-primary to-gold-light" },
  { icon: Calendar, title: "Community Events", desc: "From intimate workshops to large-scale conferences, we create spaces for dialogue, learning, and networking.", color: "from-primary to-gold-light" },
  { icon: BookOpen, title: "Educational Workshops", desc: "Hands-on sessions covering topics like public speaking, project management, and strategic thinking.", color: "from-primary to-gold-light" },
  { icon: Award, title: "Youth Empowerment", desc: "Dedicated initiatives for young people to discover their potential and build essential life skills.", color: "from-primary to-gold-light" },
  { icon: Target, title: "Strategic Consulting", desc: "Helping organizations and individuals align their goals with community-focused impact strategies.", color: "from-primary to-gold-light" },
  { icon: Sparkles, title: "Innovation Hub", desc: "A creative space where ideas are nurtured, prototyped, and developed into real-world solutions.", color: "from-primary to-gold-light" },
  { icon: Lightbulb, title: "Mentorship Network", desc: "Connecting aspiring leaders with experienced mentors for guidance and professional development.", color: "from-primary to-gold-light" },
  { icon: Handshake, title: "Partnership Programs", desc: "Building bridges between organizations, governments, and communities for collective impact.", color: "from-primary to-gold-light" },
];

const Services = () => {
  return (
    <div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6">
              Empowering Through <span className="gold-text">Action</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a range of programs and services designed to uplift communities, develop leaders, and create lasting positive change.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:animate-glow">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
