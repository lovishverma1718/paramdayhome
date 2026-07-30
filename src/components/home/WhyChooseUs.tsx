import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Award, Utensils, BookOpen, Trees, Users, Home } from 'lucide-react';

const WHY_CHOOSE_ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Licensed Family Dayhome',
    desc: 'Fully compliant with Alberta Childcare Accreditation, safety regulations, and agency monitoring.',
    tag: 'Govt. Monitored',
  },
  {
    icon: GraduationCap,
    title: 'Level 3 Educator',
    desc: 'Certified with the highest early childhood education level in Alberta for professional guidance.',
    tag: 'Highest Level',
  },
  {
    icon: Award,
    title: '13 Years Teaching',
    desc: 'Rich background as a former kindergarten teacher delivering structured, age-appropriate learning.',
    tag: 'Experienced',
  },
  {
    icon: Utensils,
    title: 'Healthy Organic Meals',
    desc: 'Freshly prepared daily breakfast, warm lunch, and snacks following Canada’s Food Guide.',
    tag: 'Included',
  },
  {
    icon: BookOpen,
    title: 'Indoor Learning Studio',
    desc: 'Equipped with Montessori wooden materials, phonics stations, sensory bins, and reading nooks.',
    tag: 'Montessori Inspired',
  },
  {
    icon: Trees,
    title: 'Outdoor Play & Park',
    desc: 'Private secure fenced backyard plus regular supervised play at Citadel community playgrounds.',
    tag: 'Daily Fresh Air',
  },
  {
    icon: Users,
    title: 'Small Group Care',
    desc: 'Strict 1:6 ratio ensuring every child receives individualized love, emotional support, and safety.',
    tag: '1:6 Ratio',
  },
  {
    icon: Home,
    title: 'Safe Home Environment',
    desc: '100% smoke-free, pet-free, clean, and warm residential home located in quiet Citadel NW Calgary.',
    tag: 'Sanitized Daily',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-light-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-dark font-bold text-xs mb-4">
            <span>Why Parents Trust Param Dayhome</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark tracking-tight-heading">
            Designed for Safety, Warmth &amp; <span className="text-gradient">Early Educational Excellence</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg mt-4">
            Combining the comfort of a loving home with the rigor of a structured kindergarten prep environment.
          </p>
        </div>

        {/* 2 x 4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-[24px] p-6 border border-customBorder shadow-soft hover:shadow-soft-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.55 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-light-muted text-[11px] font-bold text-dark-muted">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-dark text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-muted text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
