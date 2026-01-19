import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Cloud Infrastructure", href: "/cloud-infrastructure" },
  { label: "Courses", href: "/courses" },
  { label: "In Development", href: "/in-development" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "py-3 lg:py-6 glass-surface-dark border-b border-nepasys-border/50"
            : "py-5 lg:py-8 bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="font-display text-xl font-semibold tracking-tight text-foreground relative">
                Nepasys
              </span>
            </div>
          </Link>

          {/* Desktop: Command Bar Navigation Pill */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <div
              className={cn(
                "flex items-center gap-1 px-2 py-2.5 rounded-pill border transition-all duration-500",
                scrolled
                  ? "bg-nepasys-surface-elevated/80 border-nepasys-border/60 shadow-lg shadow-black/5 dark:shadow-black/20"
                  : "bg-nepasys-surface/60 border-nepasys-border/40 backdrop-blur-sm"
              )}
              style={{ width: '640px' }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink(null)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-pill",
                    "text-muted-foreground hover:text-foreground",
                    activeLink === link.href && "text-foreground"
                  )}
                >
                  {/* Hover background */}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-pill transition-all duration-300",
                      activeLink === link.href
                        ? "bg-accent/10 scale-100 opacity-100"
                        : "bg-muted/50 scale-95 opacity-0"
                    )}
                  />

                  {/* Active indicator dot */}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-300",
                      activeLink === link.href
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    )}
                  />
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}

              {/* Separator */}

              <div className="w-px h-6 bg-nepasys-border/60 mx-1" />

              <ThemeToggle />

            </div>
          </div>

          {/* Right Side Group */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Theme Toggle (< 1024px) */}
            <div className="lg:hidden">
              <ThemeToggle />
            </div>

            {/* CTA inside pill - Hidden < 600px */}
            <Link
              to="/contact-us"
              className={cn(
                "group cta_button relative px-5 py-3 text-sm font-medium rounded-pill transition-all duration-300",
                "bg-accent text-accent-foreground",
                "hover:shadow-lg hover:shadow-accent/25",
                "active:scale-[0.98]",
                "max-[600px]:hidden"
              )}
            >
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-pill bg-accent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

              <span className="relative z-10 flex items-center gap-2">
                Get Early Access
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Mobile: Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-10 p-2 rounded-lg transition-all duration-300",
                "text-foreground hover:bg-muted/50",
                mobileMenuOpen && "bg-muted/50"
              )}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-sm",
            "glass-surface-dark border-l border-nepasys-border/50",
            "transition-transform duration-500 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-24 px-6 pb-8">
            {/* Nav Links */}
            <div className="flex-1 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300",
                    "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                    transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block w-full px-6 py-4 text-center text-lg font-medium rounded-xl transition-all duration-300",
                "bg-accent text-accent-foreground",
                "hover:shadow-lg hover:shadow-accent/25",
                "active:scale-[0.98]"
              )}
              style={{
                transitionDelay: mobileMenuOpen ? `${navLinks.length * 50}ms` : "0ms",
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileMenuOpen ? 1 : 0,
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Get Early Access
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;