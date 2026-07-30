import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Heart, Award, CheckCircle2, Compass, BookOpen, MapPin } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { FinalCTA } from '@/components/home/FinalCTA';

const TIMELINE_STEPS = [
  {
    year: 'Hong Kong Early Years',
    title: 'Diploma in Early Childhood Education',
    desc: 'Completed comprehensive Early Childhood Education credentials, learning holistic child psychology and early pedagogy.',
    icon: GraduationCap,
  },
  {
    year: '13+ Years',
    title: 'Registered Kindergarten Teacher',
    desc: 'Taught preschool and kindergarten classes, mastering structured curriculum design, phonics, and fine motor skills development.',
    icon: Award,
  },
  {
    year: 'Calgary, Alberta',
    title: 'Relocation & Canadian Certification',
    desc: 'Moved to Northwest Calgary and completed Alberta ECE Level 3 Certification—the highest credential issued in Alberta.',
    icon: MapPin,
  },
  {
    year: 'Licensed Standard',
    title: 'Opened Param Dayhome in Citadel',
    desc: 'Established a premium, Scandinavian-inspired licensed family dayhome under an accredited Alberta childcare agency.',
    icon: ShieldCheck,
  },
];

const CORE_VALUES = [
  {
    title: 'Uncompromised Safety & Trust',
    desc: 'A 100% smoke-free, pet-free, clean residential home with First Aid & CPR readiness.',
    icon: ShieldCheck,
  },
  {
    title: 'Emotional Warmth',
    desc: 'Every child is greeted with open arms, personalized affection, and gentle care.',
    icon: Heart,
  },
  {
    title: 'Educational Excellence',
    desc: 'Play-based Montessori & EYLF framework preparing children for kindergarten success.',
    icon: BookOpen,
  },
  {
    title: 'Small Group Intimacy',
    desc: 'A strict 1:6 educator ratio ensuring deep one-on-one attention every single day.',
    icon: Compass,
  },
];

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Paramjit Kaur | Param Dayhome Citadel Calgary"
        description="Learn about Paramjit Kaur, Level 3 ECE Educator with 13+ years teaching experience operating Param Dayhome in Citadel, NW Calgary."
      />

      <main className="w-full pt-32 pb-16">
        
        {/* Large Editorial Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs mb-4">
                <Heart className="w-3.5 h-3.5 fill-primary" />
                <span>Meet Paramjit Kaur</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-dark tracking-tight-heading leading-tight mb-6">
                Nurturing Hearts, <span className="text-gradient">Inspiring Minds</span>
              </h1>
              <p className="text-dark-light text-base sm:text-lg leading-relaxed mb-6">
                Welcome! I am <strong>Paramjit Kaur</strong>, owner and primary educator at Param Dayhome in Citadel, Calgary. For over 13 years, my life’s work has been guiding young children through their crucial early years with patience, warmth, and educational precision.
              </p>
              <p className="text-dark-muted text-sm leading-relaxed mb-8">
                As a mother and a certified Alberta Level 3 Early Childhood Educator, I believe that high-quality childcare is not just supervision—it is creating an enchanting environment where children feel secure enough to question, explore, build confidence, and discover their unique potential.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-[20px] bg-light-section border border-customBorder">
                  <span className="font-heading font-bold text-2xl text-primary block">13+ Years</span>
                  <span className="text-xs text-dark-muted">Kindergarten Teaching</span>
                </div>
                <div className="p-4 rounded-[20px] bg-light-section border border-customBorder">
                  <span className="font-heading font-bold text-2xl text-secondary block">Level 3 ECE</span>
                  <span className="text-xs text-dark-muted">Alberta Certified</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75 }}
            >
              <div className="relative rounded-[36px] overflow-hidden border-4 border-white shadow-lux h-[480px] sm:h-[560px]">
                <img
                  src="/images/22.webp"
                  alt="Paramjit Kaur indoor play area spotlight"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[24px] bg-white/90 backdrop-blur-md border border-white">
                  <h3 className="font-heading font-bold text-dark text-lg">Paramjit Kaur</h3>
                  <p className="text-xs text-primary font-bold">Owner & Licensed Dayhome Educator</p>
                  <p className="text-xs text-dark-muted mt-1">Citadel, NW Calgary, Alberta</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Professional Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-section">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
                Educator Background
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-dark">
                Journey of Excellence
              </h2>
            </div>

            <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-32 space-y-12">
              {TIMELINE_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    className="relative pl-8 sm:pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="hidden sm:block absolute -left-32 top-0.5 text-xs font-bold text-primary w-24 text-right">
                      {step.year}
                    </div>

                    <div className="glass-card rounded-[24px] p-6 border border-white shadow-soft">
                      <span className="sm:hidden text-xs font-bold text-primary block mb-1">
                        {step.year}
                      </span>
                      <h3 className="font-heading font-bold text-dark text-xl mb-2">
                        {step.title}
                      </h3>
                      <p className="text-dark-muted text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-lux h-[440px]">
                  <img
                    src="/images/23.webp"
                    alt="Main classroom mission vision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">
                  Our Guiding Purpose
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark mb-6">
                  Mission &amp; Vision
                </h2>

                <div className="space-y-6">
                  <div className="p-6 rounded-[24px] bg-light-section border border-customBorder">
                    <h3 className="font-heading font-bold text-dark text-lg mb-2 text-primary">
                      Our Mission
                    </h3>
                    <p className="text-dark-muted text-xs leading-relaxed">
                      To provide working parents in Citadel and Northwest Calgary with complete peace of mind through licensed, home-based childcare that balances high emotional security, organic nutrition, and play-based kindergarten readiness.
                    </p>
                  </div>

                  <div className="p-6 rounded-[24px] bg-light-section border border-customBorder">
                    <h3 className="font-heading font-bold text-dark text-lg mb-2 text-secondary">
                      Our Vision
                    </h3>
                    <p className="text-dark-muted text-xs leading-relaxed">
                      To cultivate happy, confident, and curious lifelong learners who transition smoothly into kindergarten equipped with strong literacy, math foundations, and empathetic social skills.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Founder Philosophy */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-section">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-[36px] p-8 sm:p-14 border border-white shadow-lux">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-4">
                  <img
                    src="/images/21-1.webp"
                    alt="Paramjit Kaur Founder Philosophy"
                    className="w-full h-80 object-cover rounded-[28px] shadow-md border-2 border-white"
                  />
                </div>
                <div className="lg:col-span-8">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
                    Founder Philosophy
                  </span>
                  <h3 className="font-heading font-bold text-dark text-2xl sm:text-3xl mb-4">
                    &ldquo;Play is the Highest Form of Early Childhood Learning&rdquo;
                  </h3>
                  <p className="text-dark-muted text-sm leading-relaxed mb-6">
                    In our dayhome, we don&apos;t rush childhood. We honor each stage with curiosity-driven play, hands-on sensory exploration, and loving structure. When children feel safe and cherished, learning happens naturally every single day.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-dark">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Paramjit Kaur, B.Ed Diploma & Level 3 ECE Provider</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-dark">
                Our Core Pillars
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-[24px] bg-light-section border border-customBorder hover:shadow-soft transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-dark text-lg mb-2">
                      {val.title}
                    </h3>
                    <p className="text-dark-muted text-xs leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
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
