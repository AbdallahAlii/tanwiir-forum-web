// data/posts.ts
import { BlogPost } from "../types/blog";

export const posts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-community-leadership-africa",
    title: "The Future of Community Leadership in Africa",
    subtitle:
      "How modern leadership models are reshaping communities across the continent — and what the next generation of changemakers looks like.",
    excerpt:
      "Exploring how modern leadership models are reshaping communities across the continent — and what the next generation of changemakers looks like.",
    cover_image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=450&fit=crop",
    category: "Leadership",
    tags: ["Leadership", "Africa", "Community", "Future"],
    author: {
      id: "1",
      name: "Ahmed Hassan",
      avatar:
        "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=8b5cf6&color=fff",
      bio: "Ahmed is a visionary community builder with 10+ years of experience in leadership development across East Africa.",
    },
    published_at: "2026-05-05",
    read_time: 5,
    content_blocks: [
      { type: "heading", data: { text: "Introduction", level: 2 } },
      {
        type: "paragraph",
        data: {
          text: "Across Africa, a quiet revolution is underway. It doesn't happen in boardrooms or parliament halls — it happens in community centers, WhatsApp groups, online forums, and open-air markets. A new generation of leaders is rising, and they are reshaping what leadership means in the 21st century.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "This piece explores the forces driving that change, the models emerging as a result, and what they mean for the future of our communities.",
        },
      },
      {
        type: "quote",
        data: {
          text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
          author: "Simon Sinek",
        },
      },
      { type: "heading", data: { text: "Modern Leadership Models", level: 2 } },
      {
        type: "paragraph",
        data: {
          text: "Traditional top-down leadership is giving way to distributed, community-centered models that prioritize inclusion and collective ownership.",
        },
      },
      {
        type: "list",
        data: {
          items: [
            "Distributed Leadership — No single person holds all power",
            "Servant Leadership — Leaders enable the success of others",
            "Adaptive Leadership — Ability to pivot quickly",
          ],
          ordered: false,
        },
      },
      {
        type: "callout",
        data: {
          type: "tip",
          message:
            "Communities that adopt distributed leadership models report 47% higher member satisfaction and 3x faster decision-making cycles.",
        },
      },
      { type: "heading", data: { text: "The Youth Wave", level: 2 } },
      {
        type: "paragraph",
        data: {
          text: "Sub-Saharan Africa has the youngest population on earth — over 60% of the population is under 25. This isn't just a demographic statistic. It's a transformation engine.",
        },
      },
      {
        type: "callout",
        data: {
          type: "info",
          message:
            "By 2030, Africa will have more young people entering the workforce than the rest of the world combined.",
        },
      },
      { type: "heading", data: { text: "Technology as an Enabler", level: 2 } },
      {
        type: "paragraph",
        data: {
          text: "Mobile connectivity has been the great equalizer. Key technology trends reshaping community leadership include:",
        },
      },
      {
        type: "list",
        data: {
          items: [
            "Community management platforms",
            "Social media amplifying local voices",
            "Mobile payment systems",
            "AI tools for smaller organizations",
          ],
          ordered: true,
        },
      },
      { type: "heading", data: { text: "Key Challenges Ahead", level: 2 } },
      {
        type: "paragraph",
        data: {
          text: "Despite the extraordinary momentum, African community leadership faces real structural challenges. Funding remains concentrated in a few urban hubs. Access to quality mentorship is uneven.",
        },
      },
      { type: "heading", data: { text: "Conclusion", level: 2 } },
      {
        type: "paragraph",
        data: {
          text: "The future of community leadership in Africa is not a distant aspiration — it's being built right now, by thousands of everyday changemakers who refuse to wait.",
        },
      },
    ],
  },
  {
    id: "2",
    slug: "5-lessons-from-our-annual-forum",
    title: "5 Lessons From Our Annual Forum",
    excerpt:
      "Key takeaways from our biggest gathering of the year and what they mean for the future of leadership in the region.",
    cover_image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
    category: "Events",
    tags: ["Events", "Leadership", "Community"],
    author: {
      id: "2",
      name: "Fatima Ali",
      avatar:
        "https://ui-avatars.com/api/?name=Fatima+Ali&background=06b6d4&color=fff",
      bio: "Fatima leads community engagement at Tanwiir Forum with a passion for creating meaningful connections.",
    },
    published_at: "2026-04-22",
    read_time: 4,
    content_blocks: [
      { type: "heading", data: { text: "A Gathering to Remember", level: 2 } },
      {
        type: "paragraph",
        data: {
          text: "This year's annual forum brought together over 500 community leaders from 15 African countries. Here are the five most important lessons we learned.",
        },
      },
      {
        type: "heading",
        data: { text: "Lesson 1: Collaboration Over Competition", level: 3 },
      },
      {
        type: "paragraph",
        data: {
          text: "The most successful communities are those that share resources and knowledge freely.",
        },
      },
      {
        type: "heading",
        data: { text: "Lesson 2: Local Solutions Scale Best", level: 3 },
      },
      {
        type: "paragraph",
        data: {
          text: "Solutions designed by community members for their specific contexts are more sustainable.",
        },
      },
    ],
  },
  {
    id: "3",
    slug: "youth-empowerment-practical-guide",
    title: "Youth Empowerment: A Practical Guide",
    excerpt:
      "How to engage and empower young people in your community through actionable strategies that actually work.",
    cover_image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=450&fit=crop",
    category: "Youth",
    tags: ["Youth", "Empowerment", "Guide"],
    author: {
      id: "3",
      name: "Amina Yusuf",
      avatar:
        "https://ui-avatars.com/api/?name=Amina+Yusuf&background=10b981&color=fff",
      bio: "Amina is a youth development specialist with expertise in participatory program design.",
    },
    published_at: "2026-04-10",
    read_time: 6,
    content_blocks: [
      {
        type: "heading",
        data: { text: "Why Youth Empowerment Matters", level: 2 },
      },
      {
        type: "paragraph",
        data: {
          text: "Young people are not just the future — they are the present. Empowering them today creates ripple effects that last generations.",
        },
      },
    ],
  },
  {
    id: "4",
    slug: "building-partnerships-that-last",
    title: "Building Partnerships That Last",
    excerpt:
      "The core principles behind creating sustainable and impactful organizational partnerships for long-term community growth.",
    cover_image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
    category: "Strategy",
    tags: ["Partnerships", "Strategy", "Sustainability"],
    author: {
      id: "4",
      name: "Mohamed Omar",
      avatar:
        "https://ui-avatars.com/api/?name=Mohamed+Omar&background=f59e0b&color=fff",
      bio: "Mohamed specializes in strategic partnerships and organizational development.",
    },
    published_at: "2026-03-28",
    read_time: 3,
    content_blocks: [
      {
        type: "heading",
        data: { text: "The Foundation of Great Partnerships", level: 2 },
      },
      {
        type: "paragraph",
        data: {
          text: "Successful partnerships are built on trust, transparency, and shared values.",
        },
      },
    ],
  },
  {
    id: "5",
    slug: "public-speaking-for-impact",
    title: "Public Speaking for Impact",
    excerpt:
      "Mastering the art of communication to inspire, lead, and connect with any audience — from boardrooms to town halls.",
    cover_image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=450&fit=crop",
    category: "Skills",
    tags: ["Communication", "Public Speaking", "Skills"],
    author: {
      id: "1",
      name: "Ahmed Hassan",
      avatar:
        "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=8b5cf6&color=fff",
      bio: "Ahmed is a visionary community builder with 10+ years of experience.",
    },
    published_at: "2026-03-15",
    read_time: 5,
    content_blocks: [],
  },
  {
    id: "6",
    slug: "community-resilience-challenging-times",
    title: "Community Resilience in Challenging Times",
    excerpt:
      "How communities come together and not just survive but genuinely thrive even in the face of deep adversity.",
    cover_image:
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&h=450&fit=crop",
    category: "Community",
    tags: ["Resilience", "Community", "Challenges"],
    author: {
      id: "2",
      name: "Fatima Ali",
      avatar:
        "https://ui-avatars.com/api/?name=Fatima+Ali&background=06b6d4&color=fff",
      bio: "Fatima leads community engagement at Tanwiir Forum.",
    },
    published_at: "2026-02-28",
    read_time: 7,
    content_blocks: [],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return posts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (
  currentPost: BlogPost,
  limit: number = 3,
): BlogPost[] => {
  return posts
    .filter(
      (post) =>
        post.id !== currentPost.id && post.category === currentPost.category,
    )
    .slice(0, limit);
};
