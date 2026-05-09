import { motion } from "framer-motion";
import Section from "@/components/Section";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  { title: "The Future of Community Leadership in Africa", excerpt: "Exploring how modern leadership models are shaping communities across the continent.", date: "Apr 5, 2026", category: "Leadership", readTime: "5 min" },
  { title: "5 Lessons From Our Annual Forum", excerpt: "Key takeaways from our biggest gathering of the year and what they mean for the future.", date: "Mar 22, 2026", category: "Events", readTime: "4 min" },
  { title: "Youth Empowerment: A Practical Guide", excerpt: "How to engage and empower young people in your community through actionable strategies.", date: "Mar 10, 2026", category: "Youth", readTime: "6 min" },
  { title: "Building Partnerships That Last", excerpt: "The principles behind creating sustainable and impactful organizational partnerships.", date: "Feb 28, 2026", category: "Strategy", readTime: "3 min" },
  { title: "Public Speaking for Impact", excerpt: "Mastering the art of communication to inspire and lead with confidence.", date: "Feb 15, 2026", category: "Skills", readTime: "5 min" },
  { title: "Community Resilience in Challenging Times", excerpt: "How communities can come together and thrive even in the face of adversity.", date: "Jan 30, 2026", category: "Community", readTime: "7 min" },
];

const Blog = () => {
  return (
    <div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6">
              Insights & <span className="gold-text">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thoughts, updates, and stories from the Tanwiir Forum community.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-48 gold-gradient opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="p-6 -mt-8 relative">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                <h3 className="font-display font-semibold text-lg mt-3 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <button className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
