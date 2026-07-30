import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { GALLERY_ITEMS } from '@/data/galleryData';
import { LightboxModal } from '@/components/common/LightboxModal';
import { FinalCTA } from '@/components/home/FinalCTA';

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'classroom', label: 'Main Classroom' },
  { id: 'indoor', label: 'Indoor Learning' },
  { id: 'outdoor', label: 'Outdoor Play' },
  { id: 'reading', label: 'Reading Corner' },
  { id: 'creative', label: 'Creative Activities' },
];

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Photo Gallery | Param Dayhome Citadel NW Calgary"
        description="Explore photos of Param Dayhome's classroom, reading nook, indoor play area, sensory tools, and fenced outdoor backyard in Citadel, Calgary."
      />

      <main className="w-full pt-32 pb-16">
        
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-dark font-bold text-xs mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Interactive Visual Experience</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-dark tracking-tight-heading max-w-3xl mx-auto mb-6">
            Explore Our <span className="text-gradient">Dayhome Environment</span>
          </h1>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            Take a visual tour of our Scandinavian-inspired, sunlit indoor learning spaces and safe outdoor play areas.
          </p>
        </section>

        {/* Category Filter Tabs */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-light-muted/80 p-2 rounded-full max-w-3xl mx-auto border border-customBorder">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'text-dark-muted hover:text-dark hover:bg-white/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group rounded-[28px] overflow-hidden border border-customBorder bg-white shadow-soft hover:shadow-soft-hover cursor-pointer h-72 sm:h-80"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-dark shadow-sm">
                        {item.categoryLabel}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-dark">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-white text-lg leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Lightbox Modal */}
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />

        <FinalCTA />
      </main>
    </>
  );
};
