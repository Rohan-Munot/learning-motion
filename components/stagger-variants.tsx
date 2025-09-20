import { Mail, HomeIcon, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const StaggerVariants = () => {
  const links = [
    { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <Mail className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
    { name: "Services", href: "/services", icon: <Mail className="w-5 h-5" /> },
    { name: "Products", href: "/products", icon: <Mail className="w-5 h-5" /> },
  ];
  const [open, setOpen] = useState(true);
  const linkParentVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };
  const linkVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 text-foreground">
      <motion.div
        initial={false}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        animate={open ? "open" : "closed"}
        className="relative w-72 min-h-[28rem] rounded-xl h-[26rem]
      shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(48,48,55,0.05),0_2px_3px_rgba(0,0,0,0.05)]
      p-4 flex flex-col bg-white"
      >
        <X
          className="w-5 h-5 absolute top-2 right-2"
          onClick={() => setOpen(!open)}
        />

        <motion.ul
          variants={linkParentVariants}
          className="flex flex-col gap-2 mt-10"
        >
          {links.map((link) => (
            <motion.li
              variants={linkVariants}
              key={link.name}
              className="flex items-center gap-2 p-2"
            >
              <a href={link.href} className="flex items-center gap-2">
                {link.icon}
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default StaggerVariants;
