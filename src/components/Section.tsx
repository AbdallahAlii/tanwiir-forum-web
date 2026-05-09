// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface SectionProps {
//   children: ReactNode;
//   className?: string;
//   id?: string;
// }

// const Section = ({ children, className = "", id }: SectionProps) => {
//   return (
//     <motion.section
//       id={id}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className={`section-padding my-8 lg:my-12 ${className}`}
//     >
//       <div className="container-max">{children}</div>
//     </motion.section>
//   );
// };

// export default Section;
// src/components/Section.tsx (Updated for better compatibility)
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-16 lg:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
