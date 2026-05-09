import BlogDetail from "@/pages/Blogdetail";
import { lazy } from "react";

const Index = lazy(() => import("@/pages/Index"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Community = lazy(() => import("@/pages/Community"));
const Resources = lazy(() => import("@/pages/Resources"));
const Blog = lazy(() => import("@/pages/Blog"));
const Events = lazy(() => import("@/pages/Events"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export type LayoutType = "main" | "blank";

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  layout: LayoutType;
}

export const routes: RouteConfig[] = [
  { path: "/", element: <Index />, layout: "main" },
  { path: "/about", element: <About />, layout: "main" },
  { path: "/services", element: <Services />, layout: "main" },
  { path: "/community", element: <Community />, layout: "main" },
  { path: "/resources", element: <Resources />, layout: "main" },
  { path: "/blog", element: <Blog />, layout: "main" },
  { path: "/blog/:slug", element: <BlogDetail />, layout: "main" },
  { path: "/events", element: <Events />, layout: "main" },
  { path: "/contact", element: <Contact />, layout: "main" },
  { path: "*", element: <NotFound />, layout: "blank" },
];
