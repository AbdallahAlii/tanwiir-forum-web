// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = {
//     resources: [
//       { name: "Blog", path: "/blog" },
//       { name: "Events", path: "/events" },
//       { name: "Library", path: "/resources" },
//     ],
//     community: [
//       { name: "Forums", path: "/community" },
//       { name: "Members", path: "/community" },
//       { name: "Contact", path: "/contact" },
//     ],
//   };

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
//         isScrolled ? "pt-3" : "pt-6",
//       )}
//     >
//       <div
//         className={cn(
//           "mx-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-3",
//           isScrolled
//             ? "max-w-6xl w-[94%] rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
//             : "max-w-7xl w-full bg-transparent",
//         )}
//       >
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <motion.div
//             whileHover={{ rotate: 8, scale: 1.05 }}
//             className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg"
//           >
//             <span className="font-bold text-white text-lg">T</span>
//           </motion.div>
//           <span className="font-display font-bold text-xl text-slate-900">
//             Tanwiir<span className="text-cyan-600 tracking-tight"> Forum</span>
//           </span>
//         </Link>

//         {/* Desktop Nav - Full Links Restored */}
//         <div className="hidden lg:flex items-center gap-2">
//           <Link
//             to="/about"
//             className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors rounded-lg hover:bg-slate-50"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors rounded-lg hover:bg-slate-50"
//           >
//             Services
//           </Link>

//           {/* Resources Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setActiveDropdown("resources")}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors outline-none">
//               Resources{" "}
//               <ChevronDown
//                 size={14}
//                 className={cn(
//                   "transition-transform duration-300",
//                   activeDropdown === "resources" && "rotate-180",
//                 )}
//               />
//             </button>
//             <AnimatePresence>
//               {activeDropdown === "resources" && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                   className="absolute top-full left-0 w-48 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-xl shadow-2xl p-2 mt-1"
//                 >
//                   {menuItems.resources.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.path}
//                       className="block px-4 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Community Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setActiveDropdown("community")}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors outline-none">
//               Community{" "}
//               <ChevronDown
//                 size={14}
//                 className={cn(
//                   "transition-transform duration-300",
//                   activeDropdown === "community" && "rotate-180",
//                 )}
//               />
//             </button>
//             <AnimatePresence>
//               {activeDropdown === "community" && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                   className="absolute top-full left-0 w-48 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-xl shadow-2xl p-2 mt-1"
//                 >
//                   {menuItems.community.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.path}
//                       className="block px-4 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition-colors"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="hidden lg:block">
//           <Link
//             to="/contact"
//             className="bg-slate-900 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-cyan-100 hover:-translate-y-0.5"
//           >
//             Get Started
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Nav Restored */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-white/90 backdrop-blur-2xl border-t border-slate-100 mt-2 mx-4 rounded-2xl shadow-2xl overflow-hidden"
//           >
//             <div className="p-4 space-y-1">
//               {["Home", "About", "Services", "Resources", "Community"].map(
//                 (link) => (
//                   <Link
//                     key={link}
//                     to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
//                     onClick={() => setIsOpen(false)}
//                     className="block p-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors"
//                   >
//                     {link}
//                   </Link>
//                 ),
//               )}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="block bg-cyan-600 text-white text-center p-4 rounded-xl font-bold mt-4"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
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
      { name: "Forums", path: "/community" },
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
        isScrolled ? "pt-3" : "pt-6",
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-3",
          isScrolled
            ? "max-w-6xl w-[94%] rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : "max-w-7xl w-full bg-transparent",
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg"
          >
            <span className="font-bold text-white text-lg">T</span>
          </motion.div>
          <span className="font-display font-bold text-xl text-slate-900">
            Tanwiir<span className="text-cyan-600 tracking-tight"> Forum</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
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

      {/* Mobile Nav - With Working Dropdowns for Resources and Community */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-100 mt-2 mx-4 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {/* Home Link */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors"
              >
                Home
              </Link>

              {/* About Link */}
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors"
              >
                About
              </Link>

              {/* Services Link */}
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

              {/* Mobile CTA Button */}
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
