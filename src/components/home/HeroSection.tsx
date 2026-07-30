import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Phone, Sparkles, Heart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Hero Background Image with Soft Scandinavian Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/23.webp"
          alt="Param Dayhome Bright Classroom Environment"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-95 contrast-95"
        />
        {/* Soft Glass Overlay to maintain high editorial contrast without obscuring photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
      </div>

      {/* Floating Scandinavian Decorative Shapes */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Editorial Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & Action Buttons */}
        <motion.div
          className="lg:col-span-8 flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-white/90 text-xs font-bold text-dark shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ShieldCheck className="w-4 h-4 text-secondary fill-secondary/20" />
            <span>Licensed Family Dayhome in Citadel, NW Calgary</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-dark tracking-tight-heading leading-[1.08] mb-6 max-w-3xl">
            Where Little Hearts <span className="text-gradient">Learn, Play</span> &amp; <span className="text-gradient-accent">Grow</span>
          </h1>

          {/* Subheading */}
          <p className="text-dark-light text-base sm:text-xl font-normal leading-relaxed max-w-2xl mb-8">
            Licensed Family Dayhome in Citadel providing a safe, nurturing and engaging environment where children grow through play, creativity, and early learning expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Visit</span>
            </Link>

            <a
              href="tel:14038990277"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full glass-card hover:bg-white text-dark font-bold text-base border border-white/80 shadow-sm transition-all duration-300 hover:shadow-lux"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Key highlights inline tags */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-semibold text-dark-muted pt-6 border-t border-dark/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>13+ Years Teaching</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Level 3 Alberta ECE</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent-pink" />
              <span>Small 1:6 Ratio</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Glass Preview Card */}
        <motion.div
          className="lg:col-span-4 hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: 'easeOut' }}
        >
          <div className="glass-card rounded-[28px] p-6 border border-white/80 shadow-lux relative overflow-hidden group">
            <div className="relative h-64 w-full rounded-[20px] overflow-hidden mb-5">
              <img
                src="/images/21-1.webp"
                alt="Paramjit Kaur reading to dayhome children"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-dark shadow-sm">
                Owner & Educator
              </div>
            </div>

            <h3 className="font-heading font-bold text-dark text-lg mb-1">
              Paramjit Kaur, Diploma ECE
            </h3>
            <p className="text-xs text-dark-muted mb-4">
              Registered Kindergarten Teacher with 13+ years of early childhood dedication.
            </p>

            <div className="p-3.5 rounded-[16px] bg-light-muted/80 flex items-center justify-between text-xs font-semibold text-dark">
              <span>Next Tour Slot:</span>
              <span className="text-primary font-bold">This Week Available</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Hero Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
      >
        <span className="text-[11px] font-bold uppercase tracking-wider text-dark-muted">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-10 rounded-full border-2 border-dark/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
