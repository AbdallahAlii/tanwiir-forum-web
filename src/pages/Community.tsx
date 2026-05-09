import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Users, MessageSquare, Globe, Heart } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const highlights = [
  { icon: Users, number: "5,000+", label: "Active Members" },
  { icon: MessageSquare, number: "200+", label: "Discussions" },
  { icon: Globe, number: "15+", label: "Countries Reached" },
  { icon: Heart, number: "50+", label: "Success Stories" },
];

const testimonials = [
  { quote: "Tanwiir Forum changed my perspective on leadership. The events are transformative.", name: "Abdi M.", role: "Student Leader" },
  { quote: "Being part of this community has opened doors I never imagined possible.", name: "Hawa A.", role: "Young Professional" },
  { quote: "The mentorship and networking opportunities are unparalleled.", name: "Yusuf K.", role: "Community Organizer" },
];

const Community = () => {
  return (
    <div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Community</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6">
              A Growing Network of <span className="gold-text">Changemakers</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our community is our strength. Meet the people driving impact and discover how you can be part of the movement.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="!py-12 bg-card border-y border-border/30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, i) => (
            <motion.div key={h.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <h.icon size={28} className="text-primary mx-auto mb-2" />
              <div className="text-3xl font-display font-bold gold-text">{h.number}</div>
              <div className="text-sm text-muted-foreground mt-1">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src={communityImg} alt="Community" className="rounded-2xl w-full object-cover aspect-video" loading="lazy" width={1280} height={720} />
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Why Join Tanwiir?</h2>
            <ul className="space-y-4">
              {["Access exclusive events and workshops", "Connect with leaders and mentors", "Grow your professional network", "Make a real impact in your community"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-card/50">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl font-display font-bold mt-2">Voices From Our Community</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6">
              <p className="text-muted-foreground italic mb-4">"{t.quote}"</p>
              <div>
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="text-primary text-xs">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Community;
