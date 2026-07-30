import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Preloader } from '@/components/common/Preloader';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { FloatingCTA } from '@/components/common/FloatingCTA';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProgramsPage } from '@/pages/ProgramsPage';
import { ActivitiesPage } from '@/pages/ActivitiesPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { FAQPage } from '@/pages/FAQPage';
import { ContactPage } from '@/pages/ContactPage';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Preloader />
        <div className="min-h-screen flex flex-col justify-between bg-white text-dark">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />
          <FloatingCTA />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
