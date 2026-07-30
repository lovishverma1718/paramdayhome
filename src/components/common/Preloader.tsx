import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
        >
          <div className="relative flex items-center justify-center">
            {/* Breathing soft glow circle */}
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-primary/15 filter blur-xl"
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Pulsing ring */}
            <motion.div
              className="absolute w-24 h-24 rounded-full border border-primary/30"
              animate={{
                scale: [0.95, 1.15, 0.95],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Logo Image */}
            <motion.img
              src="/images/logo.webp"
              alt="Param Dayhome Logo"
              className="w-16 h-16 object-contain relative z-10"
              initial={{ scale: 0.85, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold font-heading text-dark tracking-tight">
              Param Dayhome
            </h2>
            <p className="text-xs text-dark-muted font-medium tracking-wide uppercase mt-1">
              Citadel, Calgary
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
