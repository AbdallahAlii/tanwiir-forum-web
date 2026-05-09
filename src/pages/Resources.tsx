import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Download, ExternalLink, FileText, Video, BookOpen } from "lucide-react";

const resources = [
  { icon: FileText, title: "Leadership Guide 2025", desc: "A comprehensive guide to modern leadership principles.", type: "PDF", link: "#" },
  { icon: Video, title: "Keynote: Future of Community", desc: "Watch our latest keynote speech on community building.", type: "Video", link: "#" },
  { icon: BookOpen, title: "Youth Empowerment Toolkit", desc: "Practical tools and frameworks for empowering youth.", type: "PDF", link: "#" },
  { icon: FileText, title: "Event Planning Handbook", desc: "Step-by-step guide to organizing impactful events.", type: "PDF", link: "#" },
  { icon: Video, title: "Workshop: Public Speaking", desc: "Recorded workshop on effective public speaking skills.", type: "Video", link: "#" },
  { icon: BookOpen, title: "Community Impact Report", desc: "Our annual report showcasing community achievements.", type: "PDF", link: "#" },
];

const Resources = () => {
  return (
    <div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6">
              Knowledge <span className="gold-text">Library</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Access our curated collection of guides, toolkits, videos, and reports to support your leadership journey.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <r.icon size={22} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{r.type}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{r.desc}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                {r.type === "Video" ? <><ExternalLink size={14} /> Watch</> : <><Download size={14} /> Download</>}
              </span>
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Resources;
