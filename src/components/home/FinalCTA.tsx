import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone, Heart, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative rounded-[36px] p-8 sm:p-14 lg:p-20 overflow-hidden bg-gradient-to-br from-primary/10 via-light-section to-secondary/10 border border-primary/20 shadow-lux text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background Decorative Blur Bubbles */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-dark border border-white shadow-sm mb-6">
              <Heart className="w-3.5 h-3.5 text-accent-pink fill-accent-pink" />
              <span>Spots Are Limited for 2026</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-dark tracking-tight-heading leading-tight mb-6">
              Ready to Visit <span className="text-gradient">Param Dayhome?</span>
            </h2>

            {/* Supporting text */}
            <p className="text-dark-light text-base sm:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
              Book a tour today and discover a safe, nurturing place where your child can learn, grow, and thrive every day in Citadel, NW Calgary.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base shadow-glow transition-all duration-300 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Visit</span>
              </Link>

              <a
                href="tel:14038990277"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-white hover:bg-light-muted text-dark font-bold text-base border border-customBorder shadow-sm transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Reassurance text */}
            <p className="text-xs text-dark-muted font-medium mt-8 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Licensed Alberta Provider • Alberta Government Subsidies &amp; Grants Accepted</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
