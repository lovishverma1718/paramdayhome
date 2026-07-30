import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { ACTIVITIES_DATA } from '@/data/activitiesData';

export const DailyActivitiesPreview: React.FC = () => {
  // Use first 6 activities for home preview
  const previewItems = ACTIVITIES_DATA.slice(0, 6);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-light-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-dark font-bold text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-pink" />
              <span>Nurturing Young Minds</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark tracking-tight-heading">
              Daily Activities &amp; <span className="text-gradient">Developmental Outcomes</span>
            </h2>
            <p className="text-dark-muted text-base mt-2 max-w-xl">
              Every activity is intentionally structured to support key developmental milestones in fine motor, language, math, and social confidence.
            </p>
          </div>

          <Link
            to="/activities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-primary hover:text-white text-dark border border-customBorder font-bold text-xs shadow-sm transition-all"
          >
            <span>Explore All 12 Activities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewItems.map((act, idx) => (
            <motion.div
              key={act.id}
              className="bg-white rounded-[28px] overflow-hidden border border-customBorder shadow-soft hover:shadow-soft-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.55 }}
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-dark shadow-sm">
                    {act.ageSuitability}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                    {act.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-dark text-xl mb-3">
                    {act.title}
                  </h3>
                  <p className="text-dark-muted text-xs leading-relaxed mb-4">
                    {act.description}
                  </p>
                </div>
              </div>

              {/* Developmental Benefits Badges */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-customBorder flex flex-wrap gap-1.5">
                  {act.benefits.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-light-muted text-[10px] font-bold text-dark-light"
                    >
                      <Check className="w-2.5 h-2.5 text-secondary" />
                      <span>{b}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
