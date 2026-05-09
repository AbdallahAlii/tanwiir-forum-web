// components/BlogCard.tsx
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "../types/blog";

interface BlogCardProps {
  post: BlogPost;
}

const categoryColors: Record<string, string> = {
  Leadership: "bg-violet-100 text-violet-700",
  Events: "bg-cyan-100 text-cyan-700",
  Youth: "bg-emerald-100 text-emerald-700",
  Strategy: "bg-amber-100 text-amber-700",
  Skills: "bg-rose-100 text-rose-700",
  Community: "bg-blue-100 text-blue-700",
};

const fallbackGradients: Record<string, string> = {
  Leadership: "from-violet-200 to-violet-100",
  Events: "from-cyan-200 to-cyan-100",
  Youth: "from-emerald-200 to-emerald-100",
  Strategy: "from-amber-200 to-amber-100",
  Skills: "from-rose-200 to-rose-100",
  Community: "from-blue-200 to-blue-100",
};

export const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  const gradientClass =
    fallbackGradients[post.category] || "from-slate-200 to-slate-100";

  return (
    <Link to={`/blog/${post.slug}`} className="group block h-full">
      <article className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        {/* Cover Image or Fallback Gradient */}
        <div className="relative overflow-hidden bg-slate-100 aspect-video">
          {post.cover_image ? (
            <img
              src={post.cover_image}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}
            >
              <span className="text-slate-400 text-sm font-medium">
                No image
              </span>
            </div>
          )}
          {/* Category Badge */}
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm ${categoryColors[post.category] || "bg-slate-100 text-slate-600"}`}
          >
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-slate-900 text-lg leading-snug mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-cyan-700">
            {post.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
            {post.excerpt}
          </p>

          {/* Footer with Read More */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <img
                src={
                  post.author.avatar ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}&background=64748b&color=fff`
                }
                alt={post.author.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-xs font-medium text-slate-600">
                {post.author.name}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock size={12} />
              <span>{post.read_time} min read</span>
            </div>
          </div>

          {/* Read More Button */}
          <div className="mt-4">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 group-hover:gap-2 transition-all duration-200">
              Read more{" "}
              <ArrowRight size={14} className="transition-transform" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
