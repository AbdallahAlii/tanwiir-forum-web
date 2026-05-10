// components/Navbar.tsx
import logoImg from "@/assets/logo.jpeg";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = {
    resources: [
      { name: "Blog", path: "/blog" },
      { name: "Events", path: "/events" },
      { name: "Library", path: "/resources" },
    ],
    community: [
      { name: "Join", path: "/join" },
      { name: "Members", path: "/community" },
      { name: "Contact", path: "/contact" },
    ],
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
        isScrolled ? "pt-3" : "pt-5",
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-3",
          isScrolled
            ? "max-w-6xl w-[94%] rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
            : "max-w-7xl w-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/30",
        )}
      >
        {/* Logo - larger and more professional */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-11 h-11 rounded-lg overflow-hidden shadow-md border border-slate-200/80 bg-white flex items-center justify-center"
          >
            <img
              src={logoImg}
              alt="Tanwiir Forum Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <span className="font-display font-bold text-xl text-slate-900 tracking-tight">
            Tanwiir<span className="text-cyan-600"> Forum</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/about"
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors rounded-lg hover:bg-slate-50"
          >
            About
          </Link>
          <Link
            to="/services"
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors rounded-lg hover:bg-slate-50"
          >
            Services
          </Link>

          {/* Resources Dropdown - Desktop */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors outline-none">
              Resources{" "}
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  activeDropdown === "resources" && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence>
              {activeDropdown === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 w-48 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-xl shadow-2xl p-2 mt-1"
                >
                  {menuItems.resources.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Community Dropdown - Desktop */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("community")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors outline-none">
              Community{" "}
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  activeDropdown === "community" && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence>
              {activeDropdown === "community" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 w-48 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-xl shadow-2xl p-2 mt-1"
                >
                  {menuItems.community.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-slate-900 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-cyan-100 hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-100 mt-2 mx-4 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors"
              >
                Services
              </Link>

              {/* Resources Dropdown - Mobile */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleMobileDropdown("resources")}
                  className="w-full flex items-center justify-between p-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors"
                >
                  Resources
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-300",
                      mobileOpenDropdown === "resources" && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileOpenDropdown === "resources" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1 overflow-hidden"
                    >
                      {menuItems.resources.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileOpenDropdown(null);
                          }}
                          className="block p-3 rounded-xl text-slate-500 text-sm hover:bg-slate-50 hover:text-cyan-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Community Dropdown - Mobile */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleMobileDropdown("community")}
                  className="w-full flex items-center justify-between p-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors"
                >
                  Community
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-300",
                      mobileOpenDropdown === "community" && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileOpenDropdown === "community" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1 overflow-hidden"
                    >
                      {menuItems.community.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileOpenDropdown(null);
                          }}
                          className="block p-3 rounded-xl text-slate-500 text-sm hover:bg-slate-50 hover:text-cyan-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-cyan-600 text-white text-center p-4 rounded-xl font-bold mt-4 hover:bg-cyan-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
