import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Baby, Sparkles, BookOpen, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

const PROGRAM_CARDS = [
  {
    title: 'Infant Nurture Care',
    age: 'Birth – 18 Months',
    icon: Baby,
    focus: 'Sensory bonding, soothing routine & motor milestones',
    care: 'Warm infant sleeping area, prompt feeding, daily tummy time & soft music',
    badge: 'Gentle Care',
    image: '/images/1.webp',
  },
  {
    title: 'Toddler Discovery',
    age: '18 Months – 3 Years',
    icon: Sparkles,
    focus: 'Language development, tactile sensory bins & potty support',
    care: 'Interactive circle time, outdoor garden exploration & healthy hot lunches',
    badge: 'Active Play',
    image: '/images/6.webp',
  },
  {
    title: 'Preschool Readiness',
    age: '3 Years – 5 Years',
    icon: BookOpen,
    focus: 'Phonics, early math counting, writing practice & STEM',
    care: 'Structured Montessori-inspired table activities & peer collaboration',
    badge: 'Kindergarten Prep',
    image: '/images/23.webp',
  },
  {
    title: 'School Age & Summer',
    age: '5 Years – 12 Years',
    icon: GraduationCap,
    focus: 'Homework guidance, independent reading & creative crafts',
    care: 'Before & after school supervision for local Citadel elementary schools',
    badge: 'Citadel Schools',
    image: '/images/13.webp',
  },
];

export const ProgramPreview: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs mb-4">
              <span>Curriculum &amp; Care Programs</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark tracking-tight-heading">
              Tailored Care for Every <span className="text-gradient">Stage of Childhood</span>
            </h2>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-light-muted hover:bg-white text-dark border border-customBorder font-bold text-xs shadow-sm transition-all"
          >
            <span>View All Program Details</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAM_CARDS.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={idx}
                className="glass-card rounded-[28px] overflow-hidden border border-white/90 shadow-lux hover:shadow-lux-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-dark shadow-sm">
                      {prog.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-primary">{prog.age}</span>
                    </div>

                    <h3 className="font-heading font-bold text-dark text-xl mb-3">
                      {prog.title}
                    </h3>

                    <div className="space-y-2 mb-4 text-xs">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-dark font-semibold">Focus: <span className="text-dark-muted font-normal">{prog.focus}</span></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-dark font-semibold">Care: <span className="text-dark-muted font-normal">{prog.care}</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/programs"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-light-muted hover:bg-primary hover:text-white text-dark font-bold text-xs transition-all duration-200"
                  >
                    <span>View Programs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
