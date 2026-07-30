import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, ArrowRight, Heart } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-lux border-4 border-white">
              <img
                src="/images/21-1.webp"
                alt="Paramjit Kaur engaging in reading activity"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              
              {/* Bottom Quote Banner */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[24px] bg-white/90 backdrop-blur-md border border-white/80 shadow-md">
                <p className="text-dark font-heading font-bold text-sm leading-snug">
                  &ldquo;Children flourish when they feel genuinely loved, respected, and listened to every single day.&rdquo;
                </p>
                <span className="text-xs text-primary font-bold block mt-2">
                  — Paramjit Kaur, Owner & Educator
                </span>
              </div>
            </div>

            {/* Floating Credential Pill */}
            <div className="absolute -top-6 -right-4 sm:right-6 glass-card px-5 py-3.5 rounded-full border border-white/90 shadow-lux hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-dark block">ECE Level 3</span>
                <span className="text-[10px] text-dark-muted font-medium">Highest Alberta Standard</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Bio */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs mb-4">
              <Heart className="w-3.5 h-3.5 fill-primary" />
              <span>Meet Your Lead Educator</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark tracking-tight-heading leading-tight mb-6">
              Dedicated Educator. <span className="text-gradient">Mother’s Touch.</span>
            </h2>

            <p className="text-dark-light text-base leading-relaxed mb-6">
              Paramjit Kaur brings over <strong>13 years of early education excellence</strong> to Citadel, Calgary. Holding a prestigious Diploma in Early Childhood Education and accredited as a Registered Kindergarten Teacher overseas in Hong Kong, she has dedicated her career to fostering gentle, structured, and joyful learning.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {[
                { title: 'Diploma in ECE', sub: 'Comprehensive early learning pedagogy' },
                { title: '13+ Years Teaching', sub: 'Kindergarten & early childhood mastery' },
                { title: 'Licensed Alberta Provider', sub: 'Monitored by approved childcare agency' },
                { title: 'Small Group Focus', sub: '1:6 ratio for individual attention' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-[18px] bg-light-section border border-customBorder">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-dark text-xs">{item.title}</h4>
                    <p className="text-[11px] text-dark-muted font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-dark hover:bg-dark-light text-white font-bold text-sm shadow-md hover:shadow-lux transition-all duration-300"
            >
              <span>Read Full Educator Story</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
