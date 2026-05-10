import communityImg from "@/assets/community.jpg";
import Section from "@/components/Section";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe2,
  HeartHandshake,
  MapPin,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const networkHighlights = [
  {
    label: "Members building",
    title: "Projects",
    text: "Ideas become pilots, campaigns, clubs, and local initiatives.",
  },
  {
    label: "Conversations that continue",
    title: "Circles",
    text: "Leadership, career, technology, culture, service, and entrepreneurship.",
  },
  {
    label: "Across cities and diaspora",
    title: "Reach",
    text: "A network shaped by Somali youth at home and around the world.",
  },
];

const members = [
  {
    initials: "AM",
    name: "Ayaan Mohamed",
    role: "Founder & Youth Organizer",
    location: "Mogadishu",
    text: "Helping students turn public-service ideas into real community projects.",
  },
  {
    initials: "HA",
    name: "Hassan Ali",
    role: "Software Developer",
    location: "Hargeisa",
    text: "Building learning circles for young technologists across Somali communities.",
  },
  {
    initials: "NY",
    name: "Nimco Yusuf",
    role: "Health Advocate",
    location: "Nairobi",
    text: "Connecting young professionals with mentors, workshops, and volunteer pathways.",
  },
];

const conversations = [
  "How do we prepare young people for leadership before they are officially given power?",
  "What should a modern Somali professional network actually give its members?",
  "How can technology, culture, and service work together?",
  "What does mentorship look like for first-generation builders?",
];

const cities = [
  "Mogadishu",
  "Hargeisa",
  "Garowe",
  "Nairobi",
  "Istanbul",
  "London",
  "Minneapolis",
];

const impactStories = [
  {
    title: "From attendee to organizer",
    text: "A student joins one forum, meets people asking the same questions, and starts hosting conversations at their campus.",
  },
  {
    title: "From idea to initiative",
    text: "A member shares an early idea, receives feedback from the network, and turns it into a practical local project.",
  },
  {
    title: "From isolated to connected",
    text: "A young professional finds mentors and collaborators who understand their background, ambition, and responsibility.",
  },
];

const Community = () => {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .font-display { font-family: 'DM Serif Display', Georgia, serif; }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 pt-28 pb-16">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.span
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-600"
              >
                <span className="h-px w-6 bg-cyan-600" />
                The Tanwiir Network
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="font-display text-4xl font-normal leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
              >
                A community for people who want to{" "}
                <span className="italic bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  learn, lead, and build.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
              >
                Tanwiir brings together students, professionals, organizers,
                mentors, and builders across Somali communities and the
                diaspora. It is a place to meet people, share ideas, attend
                gatherings, and start meaningful work together.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  to="/join"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600 hover:shadow-md"
                >
                  Join the community
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-200 hover:bg-cyan-50"
                >
                  Explore events
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
                <img
                  src={communityImg}
                  alt="Tanwiir community"
                  className="h-[340px] w-full object-cover md:h-[420px]"
                  loading="eager"
                />

                <div className="border-t border-slate-100 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <Users size={20} />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        People come for events. They stay for each other.
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        A community that feels welcoming, useful, and alive from
                        the first visit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section className="!py-12 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-3"
        >
          {networkHighlights.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition hover:-translate-y-0.5 hover:border-cyan-100 hover:bg-white hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                {item.label}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-slate-50/70">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-600">
              <span className="h-px w-6 bg-cyan-600" />
              Member spotlight
            </span>

            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-slate-950 sm:text-4xl">
              See yourself in the room.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              The community should feel human. Not just numbers, but people with
              names, places, goals, and stories that make visitors feel like
              they could belong here too.
            </p>

            <Link
              to="/join"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-cyan-600 hover:text-white"
            >
              Become a member
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-4"
          >
            {members.map((member) => (
              <motion.article
                key={member.name}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-100 hover:shadow-md"
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                    {member.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-950">
                          {member.name}
                        </h3>
                        <p className="mt-0.5 text-sm text-cyan-700">
                          {member.role}
                        </p>
                      </div>

                      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-500">
                        <MapPin size={13} />
                        {member.location}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {member.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-600">
            <span className="h-px w-6 bg-cyan-600" />
            Active conversations
            <span className="h-px w-6 bg-cyan-600" />
          </span>

          <h2 className="mt-4 font-display text-3xl font-normal text-slate-950 sm:text-4xl">
            The network grows through questions.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Tanwiir should feel active before someone joins. These are the kinds
            of conversations people gather around.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {conversations.map((conversation) => (
            <motion.div
              key={conversation}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 text-sm leading-relaxed text-slate-700 transition hover:border-cyan-100 hover:bg-white hover:shadow-sm"
            >
              “{conversation}”
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-slate-50/70">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                <Globe2 size={21} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                  Where members connect
                </p>
                <h2 className="text-xl font-semibold text-slate-950">
                  Local roots. Global doors.
                </h2>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cities.map((city) => (
                <div
                  key={city}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-100 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  {city}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              Show presence through cities, chapters, hosts, circles, and member
              activity — not empty corporate numbers.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-600">
              <span className="h-px w-6 bg-cyan-600" />
              Community rhythm
            </span>

            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-slate-950 sm:text-4xl">
              Join once. Keep finding reasons to return.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Members come back because the platform helps them discover people,
              attend useful gatherings, and build something with others.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Member-led circles",
                "Workshops and forums",
                "Mentor introductions",
                "Collaborative projects",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <CheckCircle size={17} className="text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-600">
              <span className="h-px w-6 bg-cyan-600" />
              Impact stories
            </span>

            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-slate-950 sm:text-4xl">
              Proof, told simply.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              This section should feel believable and human. Not fake
              testimonials — but real transformations Tanwiir can create.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-4"
          >
            {impactStories.map((story) => (
              <motion.article
                key={story.title}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition hover:border-cyan-100 hover:bg-white hover:shadow-sm"
              >
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <HeartHandshake size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-950">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {story.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-300">
                <span className="h-px w-6 bg-cyan-300" />
                Ready to join?
              </span>

              <h2 className="mt-4 font-display text-3xl font-normal leading-tight sm:text-4xl">
                Bring your questions. Find people who will build beside you.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                Tanwiir is for people who want to grow, contribute, and connect
                with a community that feels real.
              </p>
            </div>

            <Link
              to="/join"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Join Tanwiir
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
