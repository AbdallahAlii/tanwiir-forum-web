// pages/BlogDetail.tsx
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Linkedin,
  Link as LinkIcon,
  Twitter,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogCard } from "../components/BlogCard";
import { ContentBlockRenderer } from "../components/ContentBlock";
import { getPostBySlug, getRelatedPosts } from "../constants/blog-mock";
import { BlogPost, ContentBlock as ContentBlockType } from "../types/blog";

const categoryColors: Record<string, string> = {
  Leadership: "bg-violet-100 text-violet-700",
  Events: "bg-cyan-100 text-cyan-700",
  Youth: "bg-emerald-100 text-emerald-700",
  Strategy: "bg-amber-100 text-amber-700",
  Skills: "bg-rose-100 text-rose-700",
  Community: "bg-blue-100 text-blue-700",
};

// Extract headings from content blocks – safely with type guard
const extractHeadings = (
  blocks: ContentBlockType[],
): { id: string; text: string }[] => {
  return blocks
    .filter(
      (
        block,
      ): block is {
        type: "heading";
        data: { text: string; level: 2 | 3 | 4 };
      } => block.type === "heading" && block.data.level === 2,
    )
    .map((block, index) => ({
      id: `heading-${index}`,
      text: block.data.text,
    }));
};

// Skeleton component for detail page
const DetailSkeleton = () => (
  <div className="bg-white min-h-screen animate-pulse">
    {/* Breadcrumb skeleton */}
    <div className="border-b border-slate-100 pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="h-4 bg-slate-200 rounded w-48" />
      </div>
    </div>

    {/* Hero image skeleton */}
    <div className="w-full h-[280px] md:h-[400px] lg:h-[480px] bg-slate-200" />

    {/* Header skeleton */}
    <header className="py-10 md:py-14 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-6 bg-slate-200 rounded-full w-20" />
          <div className="h-4 bg-slate-200 rounded w-24" />
          <div className="h-4 bg-slate-200 rounded w-16" />
        </div>
        <div className="h-10 bg-slate-200 rounded w-3/4 mb-4" />
        <div className="h-8 bg-slate-200 rounded w-1/2 mb-8" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-200 rounded-full" />
          <div className="space-y-2">
            <div className="h-4 bg-slate-200 rounded w-32" />
            <div className="h-3 bg-slate-200 rounded w-48" />
          </div>
        </div>
      </div>
    </header>

    {/* Content skeleton */}
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      <div className="max-w-3xl">
        <div className="h-6 bg-slate-200 rounded w-40 mb-6" />
        <div className="space-y-4">
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-11/12" />
          <div className="h-4 bg-slate-200 rounded w-10/12" />
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-9/12" />
        </div>
        <div className="h-20 bg-slate-200 rounded-xl my-6" />
        <div className="space-y-4">
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-11/12" />
        </div>
      </div>
    </div>
  </div>
);

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeHeading, setActiveHeading] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Simulate async data fetch (replace with actual API call)
  useEffect(() => {
    setLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      const foundPost = getPostBySlug(slug || "") || null;
      setPost(foundPost);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [slug]);

  // Memoize headings to avoid recalculation on every render
  const headings = useMemo(() => {
    return post ? extractHeadings(post.content_blocks) : [];
  }, [post]);

  // Memoize related posts
  const relatedPosts = useMemo(() => {
    return post ? getRelatedPosts(post, 3) : [];
  }, [post]);

  // Scroll spy for TOC
  useEffect(() => {
    if (!post || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post, headings]);

  //consdd IDs to heading elements after render
  useEffect(() => {
    if (!post || !contentRef.current || headings.length === 0) return;
    const headingElements = contentRef.current.querySelectorAll("h2");
    headings.forEach((heading, idx) => {
      if (headingElements[idx]) {
        headingElements[idx].id = heading.id;
      }
    });
  }, [post, headings]);

  // SEO
  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Tanwiir Blog`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", post.excerpt);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = post.excerpt;
      document.head.appendChild(meta);
    }
  }, [post]);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  // Show skeleton while loading
  if (loading) {
    return <DetailSkeleton />;
  }

  // Post not found after loading
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-slate-900 mb-4">
            Post not found
          </h1>
          <Link to="/blog" className="text-cyan-600 hover:text-cyan-700">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-slate-700">
              Home
            </Link>
            <ChevronRightIcon />
            <Link to="/blog" className="hover:text-slate-700">
              Blog
            </Link>
            <ChevronRightIcon />
            <span className="text-slate-700 truncate max-w-[300px]">
              {post.title}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/10 z-0" />
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-[280px] md:h-[400px] lg:h-[480px] object-cover"
        />
      </div>

      {/* Post Header */}
      <header className="py-10 md:py-14 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${categoryColors[post.category] || "bg-slate-100 text-slate-600"}`}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-400">
                <Clock size={14} /> {post.read_time} min read
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-sm text-slate-400">{formattedDate}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-6 font-serif font-normal">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mb-8 font-light">
                {post.subtitle}
              </p>
            )}
            <div className="flex items-center gap-4 pt-2">
              <img
                src={
                  post.author.avatar ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}&background=0891b2&color=fff`
                }
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-slate-900">
                  {post.author.name}
                </p>
                {post.author.bio && (
                  <p className="text-sm text-slate-500 line-clamp-1 max-w-md">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          <article ref={contentRef} className="flex-1 min-w-0">
            <div className="max-w-3xl">
              {post.content_blocks.map((block, index) => (
                <ContentBlockRenderer key={index} block={block} />
              ))}
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-100">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?category=${tag}`}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-xs font-medium text-slate-600 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Twitter size={16} className="text-slate-600" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Linkedin size={16} className="text-slate-600" />
                </a>
                <button
                  onClick={copyLink}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  {copied ? (
                    <CheckCircle size={16} className="text-emerald-500" />
                  ) : (
                    <LinkIcon size={16} className="text-slate-600" />
                  )}
                </button>
              </div>
            </div>
          </article>

          {headings.length > 0 && (
            <aside className="lg:w-72 xl:w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    On this page
                  </p>
                  <nav className="space-y-1">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(heading.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`block text-sm py-1.5 px-2 rounded-lg transition-all duration-200 ${activeHeading === heading.id ? "bg-white text-cyan-700 shadow-sm border border-slate-100 font-medium" : "text-slate-500 hover:text-slate-700 hover:bg-white/50"}`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-100 py-16 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-normal">
                Related Articles
              </h2>
              <Link
                to="/blog"
                className="group flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                View all{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <div className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between py-8">
            <Link
              to="/blog"
              className="group flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />{" "}
              Back to blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default BlogDetail;
