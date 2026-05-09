// types/blog.ts
export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

// Define specific types for each block's data
export interface HeadingData {
  text: string;
  level: 2 | 3 | 4;
}

export interface ParagraphData {
  text: string;
}

export interface QuoteData {
  text: string;
  author?: string;
}

export interface ListData {
  items: string[];
  ordered: boolean;
}

export interface CalloutData {
  type: "tip" | "info" | "warning" | "success";
  message: string;
}

export interface ImageData {
  src: string;
  alt?: string;
  caption?: string;
}

export interface VideoData {
  embedUrl: string;
  title?: string;
}

export interface CodeData {
  code: string;
  language?: string;
}

export type ContentBlock =
  | { type: "heading"; data: HeadingData }
  | { type: "paragraph"; data: ParagraphData }
  | { type: "quote"; data: QuoteData }
  | { type: "list"; data: ListData }
  | { type: "callout"; data: CalloutData }
  | { type: "image"; data: ImageData }
  | { type: "video"; data: VideoData }
  | { type: "code"; data: CodeData };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  cover_image: string;
  category: string;
  tags: string[];
  author: Author;
  published_at: string;
  read_time: number;
  content_blocks: ContentBlock[];
}
