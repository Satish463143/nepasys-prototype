import React from 'react'
import {Send, ArrowUpRight } from 'lucide-react'
import { socialLinks } from '@/assets/data'
import logo from '/logo.png'

const Footer = () => {
  const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Cloud & Infrastructure', href: '/cloud-infrastructure' },
  { label: 'Training & LMS', href: '/training-lms' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact-us' },
]

  return (
    <footer className="relative bg-white dark:bg-[#050505] pt-24 pb-12 overflow-hidden transition-colors duration-300 border-t border-black/5 dark:border-white/5">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#b96384]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} loading='lazy' alt="Logo" className="w-40" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Nepasys delivers enterprise IT solutions across cloud, infrastructure, security, and consulting—helping organizations build, secure, and scale reliable systems.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-[#b96384] hover:bg-[#b96384]/10 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Navigation</h4>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-[#b96384] transition-colors flex items-center group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Insights & Updates</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get updates on new services, training programs, and product releases from Nepasys.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 pl-4 pr-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground text-sm focus:outline-none focus:border-[#b96384]/50 focus:ring-4 focus:ring-[#b96384]/5 transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1 bottom-1 px-4 bg-[#b96384] hover:bg-[#a35272] text-white rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Nepasys Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground/50">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Subtle accent strip */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b96384]/20 to-transparent"></div>
    </footer>
  )
}

export default Footer
