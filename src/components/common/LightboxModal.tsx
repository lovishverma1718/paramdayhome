import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { GalleryItem } from '@/data/galleryData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const activeItem = currentIndex !== null ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      onNavigate(prevIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handlePrev, handleNext, onClose]);

  return (
    <AnimatePresence>
      {activeItem && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark/80 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Main Card Modal */}
          <motion.div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-[28px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/40"
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-dark flex items-center justify-center backdrop-blur-md shadow-md transition-transform hover:scale-105"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-dark flex items-center justify-center backdrop-blur-md shadow-md transition-transform hover:scale-110"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-[340px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-dark flex items-center justify-center backdrop-blur-md shadow-md transition-transform hover:scale-110"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="flex-1 bg-dark/95 flex items-center justify-center min-h-[320px] md:min-h-[500px] relative overflow-hidden">
              <motion.img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[85vh] w-auto max-w-full object-contain"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              />
            </div>

            {/* Sidebar Information */}
            <div className="w-full md:w-[320px] bg-white p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-customBorder">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-4">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{activeItem.categoryLabel}</span>
                </div>

                <h3 className="font-heading font-bold text-dark text-xl leading-tight mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-dark-muted text-sm leading-relaxed mb-6">
                  {activeItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-customBorder flex items-center justify-between text-xs text-dark-muted font-medium">
                <span>
                  Image {currentIndex !== null ? currentIndex + 1 : 1} of {items.length}
                </span>
                <span className="text-primary font-semibold">Param Dayhome Citadel</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
