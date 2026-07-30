import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { ACTIVITIES_DATA } from '@/data/activitiesData';
import { FinalCTA } from '@/components/home/FinalCTA';

export const ActivitiesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Daily Activities & Early Learning | Param Dayhome Citadel"
        description="Explore 12 sensory, math, phonics, art, and outdoor activities designed for child development at Param Dayhome Citadel Calgary."
      />

      <main className="w-full pt-32 pb-16">
        
        {/* Editorial Hero Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-dark font-bold text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent-pink" />
            <span>Structured Play-Based Curriculum</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-dark tracking-tight-heading max-w-3xl mx-auto mb-6">
            Intentionally Crafted <span className="text-gradient">Learning Experiences</span>
          </h1>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            From tactile sensory bins and Montessori wooden toys to pre-writing and studio art, every day brings purposeful joy and milestone growth.
          </p>
        </section>

        {/* Alternating Activity Cards */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 mb-24">
          {ACTIVITIES_DATA.map((act, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={act.id}
                className="glass-card rounded-[36px] overflow-hidden border border-white/90 shadow-lux p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                {/* Image Box */}
                <div className={`w-full lg:w-1/2 h-72 sm:h-96 rounded-[28px] overflow-hidden relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-dark shadow-sm">
                    {act.ageSuitability}
                  </div>
                </div>

                {/* Content Box */}
                <div className={`w-full lg:w-1/2 flex flex-col items-start ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
                    {act.subtitle}
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-dark tracking-tight mb-4">
                    {act.title}
                  </h2>
                  <p className="text-dark-muted text-sm sm:text-base leading-relaxed mb-6">
                    {act.description}
                  </p>

                  <div className="w-full pt-6 border-t border-customBorder">
                    <h4 className="font-heading font-bold text-dark text-xs uppercase tracking-wider mb-3">
                      Developmental Outcomes &amp; Skills:
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {act.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                          <span className="text-xs font-semibold text-dark-light">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        <FinalCTA />
      </main>
    </>
  );
};
