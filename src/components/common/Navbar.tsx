import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Activities', path: '/activities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Navbar Container */}
        <motion.nav
          className={`w-full flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ${
            isScrolled
              ? 'glass-nav shadow-glass border border-white/80'
              : 'bg-white/70 backdrop-blur-md border border-white/50 shadow-sm'
          }`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/logo.webp"
              alt="Param Dayhome Logo"
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-light-muted/60 p-1.5 rounded-full border border-customBorder">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-dark bg-white shadow-sm font-bold'
                      : 'text-dark-muted hover:text-dark hover:bg-white/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://wa.me/14038990277?text=Hello%20Paramjit!%20👋%20I%20am%20interested%20in%20visiting%20Param%20Dayhome."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white transition-all duration-200 border border-emerald-500/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:14038990277"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-dark hover:text-primary transition-colors glass-pill"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>(403) 899-0277</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-primary hover:bg-primary-dark shadow-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Visit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-light-muted hover:bg-white text-dark border border-customBorder transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Fullscreen Slide-Down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[76px] z-30 bg-white/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between pointer-events-auto border-t border-customBorder"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto w-full">
              {NAV_LINKS.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between p-4 rounded-2xl text-base font-heading font-semibold transition-all ${
                        isActive
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-dark hover:bg-light-section'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 max-w-md mx-auto w-full pt-6 border-t border-customBorder">
              <a
                href="tel:14038990277"
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-full border border-customBorder font-semibold text-dark text-sm bg-light-muted/50"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call (403) 899-0277</span>
              </a>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 p-4 rounded-full bg-primary text-white font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Visit Today</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
