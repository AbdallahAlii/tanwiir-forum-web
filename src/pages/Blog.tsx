// pages/Blog.tsx
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { posts } from "../constants/blog-mock";
import { BlogPost } from "../types/blog";

// Skeleton loader component for cards
const SkeletonCard = () => (
  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden h-full flex flex-col animate-pulse">
    <div className="bg-slate-200 aspect-video" />
    <div className="p-5 flex flex-col flex-1">
      <div className="h-5 bg-slate-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-slate-200 rounded w-full mb-1" />
      <div className="h-4 bg-slate-200 rounded w-2/3 mb-4" />
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-200 rounded-full" />
          <div className="h-3 bg-slate-200 rounded w-16" />
        </div>
        <div className="h-3 bg-slate-200 rounded w-12" />
      </div>
      <div className="mt-4 h-4 bg-slate-200 rounded w-20" />
    </div>
  </div>
);

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  const loaderRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Load initial posts
  useEffect(() => {
    const initialPosts = posts.slice(0, postsPerPage);
    setVisiblePosts(initialPosts);
    setHasMore(initialPosts.length < posts.length);
    setPage(1);
  }, []);

  // Function to load more posts
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    // Simulate network delay (remove in production)
    setTimeout(() => {
      const nextPage = page + 1;
      const start = (nextPage - 1) * postsPerPage;
      const end = start + postsPerPage;
      const newPosts = posts.slice(start, end);

      if (newPosts.length > 0) {
        setVisiblePosts((prev) => [...prev, ...newPosts]);
        setPage(nextPage);
        setHasMore(end < posts.length);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    }, 800);
  }, [loading, hasMore, page]);

  // Set up Intersection Observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (loaderRef.current) {
      observerRef.current.observe(loaderRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [hasMore, loading, loadMore]);

  return (
    <div
      className="bg-white min-h-screen"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-cyan-600" />
              Tanwiir Blog
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-slate-900"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Insights &{" "}
                <span className="italic bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Stories.
                </span>
              </h1>
              <p className="text-base text-slate-500 max-w-sm leading-relaxed md:text-right md:pb-2">
                Thoughts, updates, and perspectives from the Tanwiir Forum
                community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid with Infinite Scroll */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {visiblePosts.length === 0 && !loading ? (
            <div className="text-center py-20">
              <BookOpen size={40} className="text-slate-200 mx-auto mb-4" />
              <p className="text-slate-400">No posts found.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visiblePosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      delay: Math.min(index * 0.05, 0.3),
                      duration: 0.4,
                    }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
                {/* Skeleton loaders while loading more */}
                {loading &&
                  Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonCard key={`skeleton-${i}`} />
                  ))}
              </div>

              {/* Sentinel element for intersection observer */}
              <div ref={loaderRef} className="h-10" />

              {/* End of content message */}
              {!hasMore && visiblePosts.length > 0 && (
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
    </div>
  );
};

export default Blog;
