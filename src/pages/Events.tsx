// pages/Events.tsx
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronRight,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  MapPin,
  Play,
  Search,
  Sparkles,
  Users,
  Video,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

// ─── Types (backend‑ready) ─────────────────────────────────────────────────
interface Speaker {
  name: string;
  title: string;
  company?: string;
  avatar?: string;
  bio?: string;
}

interface AgendaItem {
  time: string;
  title: string;
  description?: string;
  speaker?: string;
}

interface Recap {
  summary?: string;
  video_recording?: string;
  slides_link?: string;
  photos_link?: string;
  key_takeaways?: string[];
}

interface Location {
  venue_name: string;
  address?: string;
  city: string;
  country: string;
  map_link?: string;
  meeting_link?: string;
  platform?: string;
}

interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  short_description?: string;
  event_type: "in_person" | "online" | "hybrid";
  status: "upcoming" | "ongoing" | "past" | "sold_out" | "cancelled";
  start_date: string;
  end_date: string;
  timezone: string;
  location: Location;
  cover_image?: string;
  gallery_images?: string[];
  speakers: Speaker[];
  capacity?: number;
  registered_count?: number;
  waitlist_enabled: boolean;
  registration_deadline?: string;
  agenda?: AgendaItem[];
  price: number;
  tags: string[];
  recap?: Recap;
  is_featured: boolean;
}

// ─── Mock Data (replace with API call) ─────────────────────────────────────
const eventsData: Event[] = [
  {
    id: "1",
    slug: "annual-leadership-summit-2026",
    title: "Annual Leadership Summit 2026",
    description:
      "Our flagship event bringing together leaders, students, and innovators for a full day of inspiration, workshops, and networking.",
    short_description:
      "A full day of inspiration and connection with Africa's brightest leaders.",
    event_type: "in_person",
    status: "upcoming",
    start_date: "2026-05-15T09:00:00+03:00",
    end_date: "2026-05-15T17:00:00+03:00",
    timezone: "Africa/Mogadishu",
    location: {
      venue_name: "Mogadishu Convention Center",
      city: "Mogadishu",
      country: "Somalia",
      map_link: "#",
    },
    cover_image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
    speakers: [
      {
        name: "Ahmed Hassan",
        title: "Founder & Director",
        avatar:
          "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=8b5cf6&color=fff",
      },
      {
        name: "Dr. Aisha Warsame",
        title: "Leadership Coach",
        avatar:
          "https://ui-avatars.com/api/?name=Aisha+Warsame&background=06b6d4&color=fff",
      },
    ],
    capacity: 500,
    registered_count: 320,
    waitlist_enabled: true,
    registration_deadline: "2026-05-10T23:59:59+03:00",
    price: 0,
    tags: ["Leadership", "Summit", "Networking"],
    is_featured: true,
  },
  {
    id: "2",
    slug: "youth-mentorship-workshop",
    title: "Youth Mentorship Workshop",
    description:
      "Interactive workshop connecting young people with experienced mentors from various industries.",
    short_description:
      "Connect with mentors who will guide your career journey.",
    event_type: "hybrid",
    status: "upcoming",
    start_date: "2026-05-28T14:00:00+03:00",
    end_date: "2026-05-28T17:00:00+03:00",
    timezone: "Africa/Mogadishu",
    location: {
      venue_name: "Tanwiir Hub",
      city: "Mogadishu",
      country: "Somalia",
      meeting_link: "https://zoom.us/example",
      platform: "Zoom",
    },
    cover_image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=450&fit=crop",
    speakers: [
      {
        name: "Fatima Ali",
        title: "Community Manager",
        avatar:
          "https://ui-avatars.com/api/?name=Fatima+Ali&background=10b981&color=fff",
      },
    ],
    capacity: 100,
    registered_count: 78,
    waitlist_enabled: true,
    price: 0,
    tags: ["Youth", "Mentorship", "Workshop"],
    is_featured: false,
  },
  {
    id: "3",
    slug: "community-town-hall",
    title: "Community Town Hall",
    description:
      "Open forum to discuss community priorities and upcoming initiatives. Your voice matters.",
    event_type: "online",
    status: "upcoming",
    start_date: "2026-06-05T18:00:00+03:00",
    end_date: "2026-06-05T20:00:00+03:00",
    timezone: "Africa/Mogadishu",
    location: {
      venue_name: "Online",
      city: "Virtual",
      country: "Global",
      meeting_link: "https://meet.google.com/example",
      platform: "Google Meet",
    },
    cover_image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=450&fit=crop",
    speakers: [],
    capacity: 200,
    registered_count: 112,
    waitlist_enabled: false,
    price: 0,
    tags: ["Community", "Town Hall"],
    is_featured: false,
  },
  {
    id: "4",
    slug: "public-speaking-masterclass",
    title: "Public Speaking Masterclass",
    description:
      "Learn the art of impactful communication from industry experts.",
    event_type: "in_person",
    status: "sold_out",
    start_date: "2026-06-12T10:00:00+03:00",
    end_date: "2026-06-12T13:00:00+03:00",
    timezone: "Africa/Mogadishu",
    location: {
      venue_name: "Tanwiir Hub",
      city: "Mogadishu",
      country: "Somalia",
    },
    cover_image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=450&fit=crop",
    speakers: [
      {
        name: "Mohamed Omar",
        title: "Events Coordinator",
        avatar:
          "https://ui-avatars.com/api/?name=Mohamed+Omar&background=f59e0b&color=fff",
      },
    ],
    capacity: 50,
    registered_count: 50,
    waitlist_enabled: true,
    price: 0,
    tags: ["Skills", "Public Speaking"],
    is_featured: false,
  },
  {
    id: "5",
    slug: "innovation-hackathon",
    title: "Innovation Hackathon",
    description:
      "48-hour challenge to build solutions for community problems. Teams compete for prizes and mentorship.",
    event_type: "hybrid",
    status: "upcoming",
    start_date: "2026-07-01T09:00:00+03:00",
    end_date: "2026-07-02T18:00:00+03:00",
    timezone: "Africa/Mogadishu",
    location: {
      venue_name: "SIMAD University",
      city: "Mogadishu",
      country: "Somalia",
      meeting_link: "https://discord.gg/example",
      platform: "Discord",
    },
    cover_image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=450&fit=crop",
    speakers: [
      {
        name: "Amina Yusuf",
        title: "Programs Lead",
        avatar:
          "https://ui-avatars.com/api/?name=Amina+Yusuf&background=ec4899&color=fff",
      },
    ],
    capacity: 150,
    registered_count: 89,
    waitlist_enabled: true,
    price: 0,
    tags: ["Tech", "Hackathon", "Innovation"],
    is_featured: true,
  },
  {
    id: "6",
    slug: "past-leadership-panel",
    title: "Women in Leadership Panel (Past)",
    description: "Inspiring stories from women leaders across East Africa.",
    event_type: "in_person",
    status: "past",
    start_date: "2026-03-08T14:00:00+03:00",
    end_date: "2026-03-08T17:00:00+03:00",
    timezone: "Africa/Mogadishu",
    location: {
      venue_name: "Mogadishu Cultural Center",
      city: "Mogadishu",
      country: "Somalia",
    },
    cover_image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=450&fit=crop",
    speakers: [],
    capacity: 120,
    registered_count: 95,
    waitlist_enabled: false,
    price: 0,
    tags: ["Leadership", "Women"],
    is_featured: false,
    recap: {
      summary: "Over 100 attendees heard from four powerful women leaders.",
      video_recording: "#",
      photos_link: "#",
      key_takeaways: [
        "Mentorship changes lives",
        "Your network is your net worth",
      ],
    },
  },
  {
    id: "7",
    slug: "past-networking-night",
    title: "Networking Night (Past)",
    description: "An evening of connections and conversations.",
    event_type: "in_person",
    status: "past",
    start_date: "2026-02-20T19:00:00+03:00",
    end_date: "2026-02-20T22:00:00+03:00",
    timezone: "Africa/Mogadishu",
    location: {
      venue_name: "Grand Hotel",
      city: "Mogadishu",
      country: "Somalia",
    },
    cover_image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=450&fit=crop",
    speakers: [],
    capacity: 200,
    registered_count: 180,
    waitlist_enabled: false,
    price: 0,
    tags: ["Networking"],
    is_featured: false,
    recap: {
      summary: "Great energy, new partnerships formed.",
      video_recording: "#",
      photos_link: "#",
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────
const formatEventDate = (start: string, end: string, tz: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    timeZone: tz,
  };
  if (startDate.toDateString() === endDate.toDateString()) {
    return `${startDate.toLocaleDateString("en-US", options)} • ${startDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: tz })} – ${endDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: tz })}`;
  }
  return `${startDate.toLocaleDateString("en-US", options)} – ${endDate.toLocaleDateString("en-US", options)}`;
};

// ─── Skeleton Components ──────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden animate-pulse h-full flex flex-col">
    <div className="h-48 bg-slate-200" />
    <div className="p-5 flex flex-col flex-1">
      <div className="h-6 bg-slate-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-slate-200 rounded w-full mb-2" />
      <div className="h-4 bg-slate-200 rounded w-5/6 mb-4" />
      <div className="mt-auto pt-4">
        <div className="h-10 bg-slate-200 rounded-xl" />
      </div>
    </div>
  </div>
);

const LoadMoreSkeleton = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {Array.from({ length: 3 }).map((_, i) => (
      <SkeletonCard key={`load-more-${i}`} />
    ))}
  </div>
);

// ─── Event Card Component ─────────────────────────────────────────────────
const EventCard = ({ event, isPast }: { event: Event; isPast: boolean }) => {
  const statusConfig = {
    upcoming: { label: "Upcoming", color: "bg-emerald-100 text-emerald-700" },
    ongoing: { label: "Live Now", color: "bg-red-100 text-red-700" },
    sold_out: { label: "Sold Out", color: "bg-amber-100 text-amber-700" },
    past: { label: "Past", color: "bg-slate-100 text-slate-600" },
    cancelled: { label: "Cancelled", color: "bg-rose-100 text-rose-700" },
  };
  const typeConfig = {
    in_person: {
      icon: Building2,
      label: "In-person",
      color: "text-emerald-600",
    },
    online: { icon: Video, label: "Online", color: "text-cyan-600" },
    hybrid: { icon: Wifi, label: "Hybrid", color: "text-purple-600" },
  };
  const TypeIcon = typeConfig[event.event_type].icon;
  const remainingSpots =
    event.capacity && event.registered_count
      ? event.capacity - event.registered_count
      : null;

  return (
    <div className="group h-full">
      <div className="bg-white rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col overflow-hidden">
        {event.cover_image && (
          <div className="relative h-48 overflow-hidden shrink-0">
            <img
              src={event.cover_image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {event.is_featured && (
                <span className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
                  <Sparkles size={10} /> Featured
                </span>
              )}
              <span
                className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusConfig[event.status]?.color || "bg-slate-100 text-slate-600"}`}
              >
                {statusConfig[event.status]?.label}
              </span>
            </div>
          </div>
        )}

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors line-clamp-2">
              {event.title}
            </h3>
            <div className="flex items-center gap-1 text-xs font-medium bg-slate-100 px-2 py-1 rounded-full shrink-0">
              <TypeIcon
                size={12}
                className={typeConfig[event.event_type].color}
              />
              <span className="text-slate-600">
                {typeConfig[event.event_type].label}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
            <Calendar size={12} />
            <span>
              {formatEventDate(
                event.start_date,
                event.end_date,
                event.timezone,
              )}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
            <MapPin size={12} />
            <span className="truncate">
              {event.event_type === "online"
                ? event.location.platform || "Online"
                : event.location.venue_name}
            </span>
          </div>

          <p className="text-slate-500 text-sm mt-3 line-clamp-2 flex-1">
            {event.short_description || event.description}
          </p>

          {event.speakers.length > 0 && (
            <div className="flex items-center gap-1 mt-3">
              {event.speakers.slice(0, 3).map((s, idx) => (
                <img
                  key={idx}
                  src={
                    s.avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=8b5cf6&color=fff`
                  }
                  alt={s.name}
                  className="w-6 h-6 rounded-full border-2 border-white -ml-1 first:ml-0"
                  title={s.name}
                />
              ))}
              {event.speakers.length > 3 && (
                <span className="text-[10px] text-slate-400 ml-1">
                  +{event.speakers.length - 3}
                </span>
              )}
            </div>
          )}

          {!isPast && remainingSpots !== null && remainingSpots >= 0 && (
            <div className="mt-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <Users size={12} className="text-slate-400" />
                <span className="text-slate-500">
                  {remainingSpots} spots left
                </span>
              </div>
              <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500 rounded-full"
                  style={{
                    width: `${(event.registered_count! / event.capacity!) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          <div className="mt-4 pt-2">
            {!isPast ? (
              event.status === "sold_out" ? (
                <button className="w-full flex items-center justify-center gap-2 border border-amber-200 bg-amber-50 text-amber-700 text-sm font-medium py-2 rounded-xl hover:bg-amber-100 transition-colors">
                  Join waitlist <ArrowRight size={14} />
                </button>
              ) : event.status === "ongoing" ? (
                <a
                  href={event.location?.meeting_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 text-white text-sm font-medium py-2 rounded-xl hover:bg-red-700 transition-colors"
                >
                  Join Now <ExternalLink size={14} />
                </a>
              ) : (
                <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-medium py-2 rounded-xl hover:bg-cyan-700 transition-colors">
                  Register <ArrowRight size={14} />
                </button>
              )
            ) : (
              <div className="flex gap-2">
                {event.recap?.video_recording && (
                  <a
                    href={event.recap.video_recording}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 border border-slate-200 text-slate-700 text-xs font-medium py-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <Play size={12} /> Watch
                  </a>
                )}
                {event.recap?.photos_link && (
                  <a
                    href={event.recap.photos_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 border border-slate-200 text-slate-700 text-xs font-medium py-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <ImageIcon size={12} /> Photos
                  </a>
                )}
                {event.recap?.slides_link && (
                  <a
                    href={event.recap.slides_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 border border-slate-200 text-slate-700 text-xs font-medium py-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <FileText size={12} /> Slides
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Events Component ──────────────────────────────────────────────
const Events = () => {
  const [view, setView] = useState<"upcoming" | "past">("upcoming");
  const [typeFilter, setTypeFilter] = useState<
    "all" | "in_person" | "online" | "hybrid"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  // Simulate initial API fetch
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setEvents(eventsData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = useMemo(() => {
    const now = new Date();
    return events
      .filter((event) => {
        const eventDate = new Date(event.start_date);
        const isUpcoming = event.status !== "past" && eventDate >= now;
        const isPastEvent = event.status === "past" || eventDate < now;
        if (view === "upcoming")
          return isUpcoming && event.status !== "cancelled";
        return isPastEvent;
      })
      .filter((event) => {
        if (typeFilter === "all") return true;
        return event.event_type === typeFilter;
      })
      .filter((event) => {
        if (!searchQuery.trim()) return true;
        return (
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.speakers.some((s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        );
      })
      .sort((a, b) => {
        if (view === "upcoming") {
          return (
            new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
          );
        }
        return (
          new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
        );
      });
  }, [events, view, typeFilter, searchQuery]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const loadMore = async () => {
    setLoadingMore(true);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setVisibleCount((prev) => prev + 6);
    setLoadingMore(false);
  };

  const resetSearch = () => setSearchQuery("");

  return (
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-cyan-600" />
              Events
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-slate-900">
              Upcoming{" "}
              <span className="italic bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Gatherings
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mt-4 leading-relaxed">
              Join us at our events – whether online or in‑person, you'll leave
              inspired, connected, and ready to lead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters - Normal flow */}
      <div className="border-b border-slate-100 py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* View Toggle - Chips */}
          <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1 w-fit mb-5">
            <button
              onClick={() => setView("upcoming")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${view === "upcoming" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setView("past")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${view === "past" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Past Events
            </button>
          </div>

          {/* Search & Type Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Modern Search Input - Vercel style */}
            <div className="relative flex-1 min-w-[240px]">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search events, speakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={resetSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Type Filter - Chip group */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setTypeFilter("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${typeFilter === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
              >
                All types
              </button>
              <button
                onClick={() => setTypeFilter("in_person")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1 ${typeFilter === "in_person" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
              >
                <Building2 size={12} /> In-person
              </button>
              <button
                onClick={() => setTypeFilter("online")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1 ${typeFilter === "online" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
              >
                <Video size={12} /> Online
              </button>
              <button
                onClick={() => setTypeFilter("hybrid")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1 ${typeFilter === "hybrid" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
              >
                <Wifi size={12} /> Hybrid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={`skeleton-${i}`} />
              ))}
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-slate-300 text-lg">No events found</div>
              <p className="text-slate-400 text-sm mt-2">
                Try adjusting your filters or check back later.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isPast={view === "past"}
                  />
                ))}
              </div>

              {/* Loading more indicator */}
              {loadingMore && <LoadMoreSkeleton />}

              {/* Load More Button or End Message */}
              {!loadingMore && hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
                  >
                    Load More Events
                    <ChevronRight size={14} />
                  </button>
                </div>
              )}

              {!hasMore && visibleEvents.length > 0 && !loading && (
                <div className="text-center mt-12 py-8">
                  <p className="text-sm text-slate-400 border-t border-slate-100 pt-8 inline-block px-6">
                    ✨ You've reached the end — check back for more stories ✨
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-slate-800 mb-2">
            Never miss an event
          </h2>
          <p className="text-slate-500 mb-6">
            Subscribe to our newsletter and get event announcements first.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-400"
            />
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-cyan-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
