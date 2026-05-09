import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Target, Eye, Heart, Users } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Every initiative is guided by our commitment to community upliftment and leadership development." },
  { icon: Eye, title: "Visionary", desc: "We look ahead to build systems and programs that prepare tomorrow's leaders today." },
  { icon: Heart, title: "Inclusive", desc: "We welcome all backgrounds, fostering diversity and unity within our community." },
  { icon: Users, title: "Collaborative", desc: "Partnerships with local and international organizations amplify our impact." },
];

const team = [
  { name: "Ahmed Hassan", role: "Founder & Director", initials: "AH" },
  { name: "Fatima Ali", role: "Community Manager", initials: "FA" },
  { name: "Mohamed Omar", role: "Events Coordinator", initials: "MO" },
  { name: "Amina Yusuf", role: "Programs Lead", initials: "AY" },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6">
              Illuminating Paths to <span className="gold-text">Leadership</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tanwiir Forum is a community organization dedicated to building great leaders through impactful events, mentorship, and connecting influential speakers with aspiring changemakers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-card/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with the belief that great communities are built by great leaders, Tanwiir Forum began as a small gathering of like-minded individuals passionate about creating positive change.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we've grown into a vibrant platform that hosts events, brings together students and professionals, and creates spaces where ideas flourish and leaders emerge.
            </p>
          </div>
          <img src={communityImg} alt="Tanwiir community" className="rounded-2xl w-full object-cover aspect-video" loading="lazy" width={1280} height={720} />
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">What Drives Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
              <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-card/50">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">Meet the People Behind Tanwiir</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
              <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <span className="font-display font-bold text-primary-foreground text-xl">{t.initials}</span>
              </div>
              <h3 className="font-display font-semibold">{t.name}</h3>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
