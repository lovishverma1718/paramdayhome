import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Calendar, Sun, Coffee, BookOpen, Puzzle, Trees, Utensils, Moon, Palette, Smile, Heart } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { PROGRAMS_DATA, DAILY_ROUTINE } from '@/data/programsData';
import { FinalCTA } from '@/components/home/FinalCTA';

export const ProgramsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Childcare Programs & Daily Schedule | Param Dayhome Citadel"
        description="Explore Full-Time, Part-Time, Before & After School, and Summer Day Camp childcare programs at Param Dayhome in Citadel, NW Calgary."
      />

      <main className="w-full pt-32 pb-16">
        
        {/* Editorial Hero Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs mb-4">
            <span>Nurturing Early Care Programs</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-dark tracking-tight-heading max-w-3xl mx-auto mb-6">
            Childcare Tailored to Your <span className="text-gradient">Family’s Needs</span>
          </h1>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            Licensed, home-based childcare offering rich play-based learning, organic hot meals, and individual care for children aged Birth to 12 Years.
          </p>
        </section>

        {/* Programs Cards Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS_DATA.map((prog, idx) => (
              <motion.div
                key={prog.id}
                className="glass-card rounded-[32px] overflow-hidden border border-white/90 shadow-lux hover:shadow-lux-hover transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
              >
                <div>
                  <div className="relative h-48 w-full">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-dark shadow-sm">
                      {prog.badge}
                    </div>
                  </div>

                  <div className="p-8">
                    <span className="text-xs font-bold text-primary block mb-1">
                      {prog.ageRange}
                    </span>
                    <h2 className="font-heading font-bold text-dark text-2xl mb-2">
                      {prog.title}
                    </h2>
                    <p className="text-dark-muted text-xs mb-6">
                      {prog.subtitle}
                    </p>

                    <div className="p-4 rounded-[20px] bg-light-muted/80 mb-6 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-dark-muted">Hours:</span>
                        <span className="font-bold text-dark">{prog.hours}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-dark-muted">Meals Included:</span>
                        <span className="font-bold text-secondary">{prog.mealsIncluded ? 'Organic Hot Meals' : 'Snacks'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-dark-muted">Status:</span>
                        <span className="font-bold text-primary">{prog.availability}</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-6 text-xs">
                      <span className="font-bold text-dark block text-xs uppercase tracking-wider mb-2">Program Highlights:</span>
                      {prog.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span className="text-dark-muted">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-xs shadow-md transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire / Book Visit</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Daily Routine Vertical Timeline */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-light-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
                Structured Daily Flow
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark">
                A Day at Param Dayhome
              </h2>
              <p className="text-dark-muted text-base mt-3">
                Our balanced schedule blends active play, organic meals, focused early learning, rest, and outdoor sunshine.
              </p>
            </div>

            <div className="relative border-l-2 border-primary/40 ml-4 sm:ml-28 space-y-8">
              {DAILY_ROUTINE.map((step, idx) => {
                const iconMap: Record<string, React.ElementType> = {
                  Sun, Coffee, BookOpen, Puzzle, Trees, Utensils, Moon, Palette, Smile, Heart
                };
                const IconComponent = iconMap[step.icon] || Sun;

                return (
                  <motion.div
                    key={idx}
                    className="relative pl-8 sm:pl-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                  >
                    {/* Circle Node */}
                    <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shadow-sm">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Left Time Label */}
                    <div className="hidden sm:block absolute -left-28 top-1.5 text-xs font-bold text-primary w-24 text-right">
                      {step.time.split('–')[0]}
                    </div>

                    <div className="bg-white rounded-[24px] p-6 border border-customBorder shadow-soft">
                      <span className="text-xs font-bold text-primary block mb-1">
                        {step.time}
                      </span>
                      <h3 className="font-heading font-bold text-dark text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-dark-muted text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
    </>
  );
};
