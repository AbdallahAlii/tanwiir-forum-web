// components/ContentBlock.tsx
import { AlertCircle, CheckCircle, Info, Lightbulb } from "lucide-react";
import { ContentBlock } from "../types/blog";

interface ContentBlockProps {
  block: ContentBlock;
}

const calloutConfig = {
  tip: {
    icon: Lightbulb,
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-800",
    iconColor: "text-emerald-600",
  },
  info: {
    icon: Info,
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    iconColor: "text-blue-500",
  },
  warning: {
    icon: AlertCircle,
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-800",
    iconColor: "text-amber-500",
  },
  success: {
    icon: CheckCircle,
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-800",
    iconColor: "text-teal-500",
  },
};

export const ContentBlockRenderer = ({ block }: ContentBlockProps) => {
  switch (block.type) {
    case "heading": {
      const HeadingTag = `h${block.data.level}` as keyof JSX.IntrinsicElements;
      const sizeClass =
        block.data.level === 2
          ? "text-2xl md:text-3xl mt-8 mb-4"
          : "text-xl md:text-2xl mt-6 mb-3";
      return (
        <HeadingTag
          className={`${sizeClass} font-serif text-slate-900 font-normal tracking-tight`}
        >
          {block.data.text}
        </HeadingTag>
      );
    }

    case "paragraph": {
      return (
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-5 max-w-[70ch]">
          {block.data.text}
        </p>
      );
    }

    case "quote": {
      return (
        <blockquote className="border-l-3 border-cyan-600 pl-5 py-2 my-6 text-slate-700 italic">
          <p className="text-lg leading-relaxed mb-2">"{block.data.text}"</p>
          {block.data.author && (
            <cite className="text-sm text-slate-500 not-italic">
              — {block.data.author}
            </cite>
          )}
        </blockquote>
      );
    }

    case "list": {
      const ListTag = block.data.ordered ? "ol" : "ul";
      const listClass = block.data.ordered ? "list-decimal" : "list-disc";
      return (
        <ListTag className={`${listClass} pl-5 mb-5 space-y-2 text-slate-600`}>
          {block.data.items.map((item: string, idx: number) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ListTag>
      );
    }

    case "callout": {
      const config = calloutConfig[block.data.type];
      const Icon = config.icon;
      return (
        <div
          className={`flex gap-3 p-4 rounded-xl border ${config.bg} ${config.border} my-6 max-w-[68ch]`}
        >
          <Icon
            size={18}
            className={`${config.iconColor} flex-shrink-0 mt-0.5`}
          />
          <p className={`text-sm leading-relaxed ${config.text}`}>
            {block.data.message}
          </p>
        </div>
      );
    }

    case "image": {
      return (
        <figure className="my-8">
          <img
            src={block.data.src}
            alt={block.data.alt || ""}
            loading="lazy"
            className="rounded-xl w-full"
          />
          {block.data.caption && (
            <figcaption className="text-sm text-slate-500 text-center mt-2">
              {block.data.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "video": {
      return (
        <div className="aspect-video my-8 rounded-xl overflow-hidden">
          <iframe
            src={block.data.embedUrl}
            title={block.data.title || "Video"}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      );
    }

    case "code": {
      return (
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto my-6 text-sm">
          <code>{block.data.code}</code>
        </pre>
      );
    }

    default:
      return null;
  }
};
