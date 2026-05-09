import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  { title: "Annual Leadership Summit 2026", date: "May 15, 2026", time: "9:00 AM - 5:00 PM", location: "Mogadishu Convention Center", desc: "Our flagship event bringing together leaders, students, and innovators for a full day of inspiration.", featured: true },
  { title: "Youth Mentorship Workshop", date: "May 28, 2026", time: "2:00 PM - 5:00 PM", location: "Tanwiir Hub", desc: "Interactive workshop connecting young people with experienced mentors.", featured: false },
  { title: "Community Town Hall", date: "Jun 5, 2026", time: "6:00 PM - 8:00 PM", location: "Online", desc: "Open forum to discuss community priorities and upcoming initiatives.", featured: false },
  { title: "Public Speaking Masterclass", date: "Jun 12, 2026", time: "10:00 AM - 1:00 PM", location: "Tanwiir Hub", desc: "Learn the art of impactful communication from industry experts.", featured: false },
  { title: "Networking Night", date: "Jun 20, 2026", time: "7:00 PM - 10:00 PM", location: "Grand Hotel Mogadishu", desc: "An evening of connections, conversations, and community building.", featured: false },
  { title: "Innovation Hackathon", date: "Jul 1-2, 2026", time: "All Day", location: "SIMAD University", desc: "48-hour challenge to build solutions for community problems.", featured: true },
];

const Events = () => {
  return (
    <div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Events</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6">
              Upcoming <span className="gold-text">Gatherings</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us at our upcoming events and be part of the movement that's shaping tomorrow's leaders.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 ${event.featured ? "border-primary/20" : ""}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-24 text-center">
                  <div className={`inline-flex flex-col items-center justify-center w-20 h-20 rounded-2xl ${event.featured ? "gold-gradient" : "bg-secondary"}`}>
                    <Calendar size={20} className={event.featured ? "text-primary-foreground" : "text-primary"} />
                    <span className={`text-xs font-bold mt-1 ${event.featured ? "text-primary-foreground" : "text-foreground"}`}>
                      {event.date.split(",")[0].split(" ")[1]}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {event.featured && <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Featured</span>}
                    <h3 className="font-display font-semibold text-xl">{event.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{event.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                  </div>
                </div>
                <button className="gold-gradient px-6 py-2.5 rounded-xl font-display font-semibold text-sm text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2 shrink-0">
                  Register <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Events;
