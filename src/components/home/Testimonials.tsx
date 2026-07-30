import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';

const REVIEWS_DATA = [
  {
    quote: "Paramjit is an absolute blessing for our family. Leaving our 14-month-old daughter for the first time was daunting, but Paramjit's warm home, Level 3 ECE expertise, and daily updates gave us complete peace of mind. Her dayhome is pristine, safe, and truly feels like family.",
    author: "Sarah & David M.",
    relation: "Parents of Emma (Citadel Resident)",
    rating: 5,
    date: "Recent Google Review",
  },
  {
    quote: "The combination of structured kindergarten preparation and organic home-cooked meals is rare to find. My son learned phonics, counting, and table manners in such a gentle way. He jumps out of the car excited every morning!",
    author: "Jaspreet K.",
    relation: "Parent of 3-year-old Noah (Arbour Lake)",
    rating: 5,
    date: "Verified Parent Review",
  },
  {
    quote: "Clean, smoke-free, pet-free, with a wonderful fenced backyard! Paramjit's 13 years of kindergarten teaching experience shine through every single day. Highly recommend Param Dayhome to anyone in NW Calgary.",
    author: "Michael T.",
    relation: "Parent of Before & After Schooler (Hawkwood)",
    rating: 5,
    date: "Verified Parent Review",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-light-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-dark font-bold text-xs mb-4">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span>Parent Testimonials</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark tracking-tight-heading">
            Loved by Parents Across <span className="text-gradient">Northwest Calgary</span>
          </h2>
          <p className="text-dark-muted text-base mt-3">
            Real experiences from Citadel, Arbour Lake, and Hawkwood families.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-[28px] p-8 border border-customBorder shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <p className="text-dark text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-customBorder flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-dark text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-dark-muted font-medium">
                    {rev.relation}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-secondary font-bold bg-secondary/10 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
