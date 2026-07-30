import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/contactInfo';

export const Footer: React.FC = () => {
  const whatsappTourUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Paramjit! 👋 I would like to schedule a tour of Param Dayhome.")}`;

  return (
    <footer className="bg-light-section pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-customBorder relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[32px] p-8 sm:p-12 lg:p-16 border border-white/90 shadow-lux relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Brand & Vision */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center p-2 border border-primary/20">
                    <img
                      src="/images/logo.webp"
                      alt="Param Dayhome Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-dark tracking-tight">
                      Param Dayhome
                    </h3>
                    <p className="text-xs text-dark-muted font-medium uppercase tracking-wider">
                      Licensed Family Dayhome • Citadel, Calgary
                    </p>
                  </div>
                </div>

                <blockquote className="text-dark-muted text-base italic leading-relaxed mb-8 max-w-md">
                  &ldquo;Every child deserves a safe, warm, and inspiring place to learn, explore, and flourish at their own gentle pace.&rdquo;
                </blockquote>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-customBorder text-xs font-semibold text-dark shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span>Alberta Govt. Licensed &amp; Level 3 ECE Certified</span>
                </div>
              </div>

              {/* Owner Quote Attribution */}
              <div className="mt-8 pt-6 border-t border-customBorder flex items-center gap-4">
                <img
                  src="/images/21-1.webp"
                  alt="Paramjit Kaur"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 shadow-sm"
                />
                <div>
                  <h4 className="font-heading font-bold text-dark text-sm">Paramjit Kaur</h4>
                  <p className="text-xs text-dark-muted">Owner &amp; Lead Early Educator (13+ Yrs Exp)</p>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Links & Contact Details */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Quick Links */}
              <div>
                <h4 className="font-heading text-sm font-bold text-dark uppercase tracking-wider mb-4 text-primary">
                  Navigation
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About Provider', path: '/about' },
                    { name: 'Programs & Care', path: '/programs' },
                    { name: 'Daily Activities', path: '/activities' },
                    { name: 'Photo Gallery', path: '/gallery' },
                    { name: 'Parent FAQs', path: '/faq' },
                    { name: 'Contact & Book Visit', path: '/contact' },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="text-dark-muted hover:text-primary transition-colors flex items-center gap-1 group font-medium"
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Areas & Programs */}
              <div>
                <h4 className="font-heading text-sm font-bold text-dark uppercase tracking-wider mb-4 text-secondary">
                  Service Areas
                </h4>
                <ul className="space-y-2.5 text-xs text-dark-muted font-medium">
                  <li>• Citadel, NW Calgary</li>
                  <li>• Arbour Lake</li>
                  <li>• Hawkwood</li>
                  <li>• Ranchlands</li>
                  <li>• Royal Oak</li>
                  <li>• Scenic Acres</li>
                  <li>• Northwest Calgary</li>
                </ul>

                <h4 className="font-heading text-sm font-bold text-dark uppercase tracking-wider mt-6 mb-3 text-accent-pink">
                  Programs
                </h4>
                <ul className="space-y-1.5 text-xs text-dark-muted font-medium">
                  <li>• Full-Time Early Care</li>
                  <li>• Part-Time Discovery</li>
                  <li>• Before &amp; After School</li>
                  <li>• Summer Activity Camp</li>
                </ul>
              </div>

              {/* Contact Info & Hours */}
              <div>
                <h4 className="font-heading text-sm font-bold text-dark uppercase tracking-wider mb-4 text-primary">
                  Dayhome Information
                </h4>
                
                <div className="space-y-4 text-xs font-medium">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-dark block">Operating Hours</span>
                      <span className="text-dark-muted">Mon - Fri: 7:00 AM – 5:30 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-dark block">Location</span>
                      <span className="text-dark-muted">{CONTACT_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-dark block">Phone</span>
                      <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-dark-muted hover:text-primary transition-colors font-semibold">
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={whatsappTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Schedule a Tour</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Divider & Copyright */}
          <div className="mt-12 pt-6 border-t border-customBorder flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-muted font-medium">
            <p>© {new Date().getFullYear()} Param Dayhome. All rights reserved. Licensed Family Dayhome in Calgary, Alberta.</p>
            <div className="flex items-center gap-6">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Alberta Childcare Compliance</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
