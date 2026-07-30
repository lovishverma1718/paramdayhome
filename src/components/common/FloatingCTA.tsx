import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/contactInfo';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappDirectUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Paramjit! 👋 I am interested in visiting Param Dayhome.")}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Quick Call Button */}
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-dark hover:text-primary border border-white shadow-lux transition-transform hover:scale-110"
            title="Call Param Dayhome"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* WhatsApp Direct Chat Button */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-md transition-transform hover:scale-110"
            title="Chat on WhatsApp with Paramjit"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
          </a>

          {/* Book Visit Floating Button */}
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-xs shadow-glow transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Visit</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
