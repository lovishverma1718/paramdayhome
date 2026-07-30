import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Maximize2, ArrowRight, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/galleryData';
import { LightboxModal } from '@/components/common/LightboxModal';

// Filter preview items specific to prompt requirement: 9, 10, 12, 15, 18, 21-1, 22, 23
const HOMEPAGE_GALLERY_IMAGES = [
  '/images/23.webp',
  '/images/21-1.webp',
  '/images/22.webp',
  '/images/9.webp',
  '/images/10.webp',
  '/images/12.webp',
  '/images/15.webp',
  '/images/18.webp',
];

export const GalleryPreview: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const previewItems: GalleryItem[] = HOMEPAGE_GALLERY_IMAGES.map((imgUrl) => {
    const matched = GALLERY_ITEMS.find((g) => g.image === imgUrl);
    return (
      matched || {
        id: imgUrl,
        image: imgUrl,
        title: 'Param Dayhome Facility',
        category: 'indoor',
        categoryLabel: 'Dayhome Environment',
        description: 'Safe, bright, and engaging space for early learners in Citadel, Calgary.',
      }
    );
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-dark font-bold text-xs mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>A Glimpse Into Our Environment</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark tracking-tight-heading">
              Our Bright &amp; Nurturing <span className="text-gradient">Spaces</span>
            </h2>
            <p className="text-dark-muted text-base mt-2 max-w-xl">
              Take a visual tour of our main classroom, reading nooks, outdoor balance zone, and private fenced backyard in Citadel.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark hover:bg-dark-light text-white font-bold text-xs shadow-md transition-all"
          >
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-[24px] overflow-hidden shadow-soft cursor-pointer border border-customBorder bg-light-muted h-64 sm:h-72"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              onClick={() => setLightboxIndex(idx)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-dark">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-heading font-bold text-white text-sm">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Component */}
      <LightboxModal
        items={previewItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
