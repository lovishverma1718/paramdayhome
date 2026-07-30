import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, HeartPulse, Utensils, GraduationCap, Clock } from 'lucide-react';

const TRUST_CARDS = [
  {
    icon: ShieldCheck,
    title: 'Licensed Alberta Dayhome',
    desc: 'Approved & Govt. Inspected',
    color: 'text-secondary bg-secondary/10',
  },
  {
    icon: GraduationCap,
    title: 'Level 3 ECE Educator',
    desc: 'Highest Certification Level',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: Clock,
    title: '13+ Years Experience',
    desc: 'Former Kindergarten Teacher',
    color: 'text-accent bg-accent/20',
  },
  {
    icon: HeartPulse,
    title: 'CPR & First Aid Certified',
    desc: 'Infant & Child Emergency Ready',
    color: 'text-accent-pink bg-accent-pink/10',
  },
  {
    icon: Utensils,
    title: 'Healthy Organic Meals',
    desc: 'Breakfast, Lunch & Snacks',
    color: 'text-secondary bg-secondary/10',
  },
  {
    icon: Award,
    title: 'Fully Insured & Vetted',
    desc: 'Vulnerable Sector Cleared',
    color: 'text-primary bg-primary/10',
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-light-section relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {TRUST_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-[24px] p-5 border border-white/90 shadow-glass flex flex-col items-center text-center hover:shadow-lux transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-dark text-sm leading-tight mb-1">
                  {card.title}
                </h4>
                <p className="text-[11px] text-dark-muted font-medium">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
