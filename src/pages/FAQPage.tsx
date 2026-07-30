import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Search, ChevronDown, Shield } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { FAQ_DATA } from '@/data/faqData';
import { FinalCTA } from '@/components/home/FinalCTA';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Generate FAQ Schema for Google Search Rich Results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_DATA.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions (FAQ) | Param Dayhome Citadel"
        description="Find answers about licensing, meals, hours, Alberta subsidies, registration, group size, and safety policies at Param Dayhome in Citadel, Calgary."
        schema={[faqSchema]}
      />

      <main className="w-full pt-32 pb-16">
        
        {/* Editorial Hero Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Parent Help Center</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-dark tracking-tight-heading max-w-3xl mx-auto mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Clear, transparent answers regarding licensing, government subsidies, organic meals, safety standards, and daily routines.
          </p>

          {/* Search Input */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="w-5 h-5 text-dark-muted absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. licensing, meals, subsidies)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white border border-customBorder shadow-soft text-dark placeholder:text-dark-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'licensing', label: 'Licensing & Subsidies' },
              { id: 'meals', label: 'Meals & Allergies' },
              { id: 'safety', label: 'Safety & Group Size' },
              { id: 'enrollment', label: 'Enrollment & Visits' },
              { id: 'schedule', label: 'Hours & Summer' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-dark text-white shadow-sm'
                    : 'bg-light-muted text-dark-muted hover:bg-white hover:text-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-24">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-[28px] p-8">
              <p className="text-dark-muted font-medium">No matching questions found for &ldquo;{searchQuery}&rdquo;.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-5 py-2 rounded-full bg-primary text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    className="glass-card rounded-[24px] border border-white/90 shadow-soft overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-dark text-base sm:text-lg focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-primary shrink-0 hidden sm:block" />
                        <span>{faq.question}</span>
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-8 h-8 rounded-full bg-light-muted flex items-center justify-center text-dark shrink-0"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0 text-dark-muted text-sm sm:text-base leading-relaxed border-t border-customBorder/50 mt-2">
                            <p className="pt-4">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>

        <FinalCTA />
      </main>
    </>
  );
};
