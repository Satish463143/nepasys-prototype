'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() as number;
    
    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Add background when scrolled
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Courses', href: '/courses', active: true },
    { name: 'In Development', href: '/in-development' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-surface-dark border-b border-nepasys-border' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span
              className="text-xl font-bold text-nepasys-text-primary font-['Space_Grotesk']"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Nepasys
            </motion.span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={link.name} href={link.href}>
                <motion.div
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    link.active
                      ? 'text-nepasys-text-primary'
                      : 'text-nepasys-text-secondary hover:text-nepasys-text-primary'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link href="/early-access">
              <motion.button
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[hsl(340,40%,55%)] to-[hsl(340,40%,48%)] text-white text-sm font-semibold flex items-center gap-2 nepasys-glow-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px -3px hsl(340 40% 55% / 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Early Access
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;