import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ShieldCheck, HelpCircle, MessageCircle, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { CONTACT_INFO, generateWhatsAppBookingUrl, BookingFormData } from '@/data/contactInfo';

const contactFormSchema = z.object({
  parentName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  childAge: z.string().min(1, 'Please select your child’s age range'),
  program: z.string().min(1, 'Please select a program of interest'),
  preferredDate: z.string().min(1, 'Please select a preferred visit date'),
  message: z.string().optional(),
});

export const ContactPage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setSubmittedData(data);
    const whatsappUrl = generateWhatsAppBookingUrl(data);
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO
        title="Book a Visit via WhatsApp | Param Dayhome Citadel NW Calgary"
        description="Schedule a private tour or inquiry visit directly to Paramjit Kaur's WhatsApp. Phone: (403) 899-0277. Citadel, Calgary."
      />

      <main className="w-full pt-32 pb-16">
        
        {/* Editorial Hero Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-xs mb-4">
            <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            <span>Instant WhatsApp Tour Booking</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-dark tracking-tight-heading max-w-3xl mx-auto mb-6">
            Book a Tour Directly on <span className="text-emerald-500">WhatsApp</span>
          </h1>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            Fill out your details below to send an instant pre-formatted WhatsApp message directly to Level 3 Educator Paramjit Kaur.
          </p>
        </section>

        {/* Main 2-Column Contact & Form Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Details & Quick WhatsApp Chat */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="glass-card rounded-[32px] p-8 border border-white shadow-lux">
                <h2 className="font-heading font-bold text-dark text-2xl mb-6">
                  Dayhome Contact Info
                </h2>

                <div className="space-y-6 text-sm">
                  {/* WhatsApp Direct Banner */}
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Paramjit! 👋 I would like to inquire about booking a tour for Param Dayhome.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-[20px] bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between group hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                        <MessageCircle className="w-5 h-5 fill-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark group-hover:text-white text-xs">Quick WhatsApp Chat</h4>
                        <p className="text-[11px] text-dark-muted group-hover:text-white/80">Message Paramjit Kaur Directly</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Operating Hours</h4>
                      <p className="text-dark-muted text-xs mt-0.5">Monday – Friday: 7:00 AM – 5:30 PM</p>
                      <p className="text-[11px] text-primary font-semibold mt-1">Weekend &amp; Holidays Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary-dark shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Location</h4>
                      <p className="text-dark-muted text-xs mt-0.5">{CONTACT_INFO.address}</p>
                      <p className="text-[11px] text-dark-muted mt-1">Serving Citadel, Arbour Lake, Hawkwood &amp; Royal Oak</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-accent/20 flex items-center justify-center text-dark shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Direct Phone</h4>
                      <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-primary font-bold text-sm hover:underline">
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-accent-pink/15 flex items-center justify-center text-accent-pink shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Email Inquiry</h4>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-dark-muted text-xs hover:text-primary transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="glass-card rounded-[32px] p-6 border border-white shadow-soft overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="font-heading font-bold text-dark text-sm">Citadel Neighborhood Map</span>
                  </div>
                  <span className="text-[10px] bg-secondary/10 text-secondary-dark px-2.5 py-0.5 rounded-full font-bold">
                    NW Calgary
                  </span>
                </div>

                <div className="relative h-48 rounded-[20px] overflow-hidden bg-light-muted border border-customBorder flex items-center justify-center text-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="relative z-10">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2 animate-bounce" />
                    <p className="font-heading font-bold text-dark text-xs">Param Dayhome Location</p>
                    <p className="text-[11px] text-dark-muted">Citadel, Calgary, Alberta</p>
                    <a
                      href="https://maps.google.com/?q=Citadel+Calgary+Alberta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block px-3 py-1 rounded-full bg-white text-primary text-[10px] font-bold shadow-sm"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: WhatsApp Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-customBorder shadow-lux relative">
                
                {submittedData ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto">
                      <MessageCircle className="w-8 h-8 fill-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-dark text-2xl mb-2">
                        WhatsApp Opened!
                      </h3>
                      <p className="text-dark-muted text-sm max-w-md mx-auto">
                        Your pre-formatted tour request message was sent to Paramjit Kaur on WhatsApp. If WhatsApp didn’t open automatically, click the button below:
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-light-section border border-customBorder text-left text-xs font-mono text-dark-muted max-w-md mx-auto space-y-1">
                      <span className="font-bold text-dark block font-sans text-xs uppercase mb-2">Message Summary:</span>
                      <p>👤 Parent: {submittedData.parentName}</p>
                      <p>📞 Phone: {submittedData.phone}</p>
                      <p>👶 Child Age: {submittedData.childAge}</p>
                      <p>📚 Program: {submittedData.program}</p>
                      <p>📅 Date: {submittedData.preferredDate}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={generateWhatsAppBookingUrl(submittedData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md inline-flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Re-open WhatsApp Message</span>
                      </a>

                      <button
                        onClick={() => { setSubmittedData(null); reset(); }}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-light-muted text-dark text-xs font-bold hover:bg-white"
                      >
                        Submit Another Booking
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-customBorder pb-4">
                      <div>
                        <h3 className="font-heading font-extrabold text-dark text-2xl">
                          Schedule a Tour
                        </h3>
                        <p className="text-dark-muted text-xs">
                          Submitting this form sends an instant formatted message to Paramjit&apos;s WhatsApp.
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                        <MessageCircle className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Parent Name */}
                      <div>
                        <label className="block text-xs font-bold text-dark mb-1.5">Parent / Guardian Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Sarah Miller"
                          {...register('parentName')}
                          className={`w-full px-4 py-3 rounded-2xl bg-light-section border ${
                            errors.parentName ? 'border-accent-pink' : 'border-customBorder'
                          } text-xs text-dark focus:outline-none focus:ring-2 focus:ring-emerald-500/30`}
                        />
                        {errors.parentName && (
                          <span className="text-[11px] text-accent-pink mt-1 block">{errors.parentName.message}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-dark mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="(403) 899-0277"
                          {...register('phone')}
                          className={`w-full px-4 py-3 rounded-2xl bg-light-section border ${
                            errors.phone ? 'border-accent-pink' : 'border-customBorder'
                          } text-xs text-dark focus:outline-none focus:ring-2 focus:ring-emerald-500/30`}
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-accent-pink mt-1 block">{errors.phone.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-dark mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          placeholder="sarah@example.com"
                          {...register('email')}
                          className={`w-full px-4 py-3 rounded-2xl bg-light-section border ${
                            errors.email ? 'border-accent-pink' : 'border-customBorder'
                          } text-xs text-dark focus:outline-none focus:ring-2 focus:ring-emerald-500/30`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-accent-pink mt-1 block">{errors.email.message}</span>
                        )}
                      </div>

                      {/* Child Age */}
                      <div>
                        <label className="block text-xs font-bold text-dark mb-1.5">Child’s Age *</label>
                        <select
                          {...register('childAge')}
                          className={`w-full px-4 py-3 rounded-2xl bg-light-section border ${
                            errors.childAge ? 'border-accent-pink' : 'border-customBorder'
                          } text-xs text-dark focus:outline-none focus:ring-2 focus:ring-emerald-500/30`}
                        >
                          <option value="">Select Age Group</option>
                          <option value="Infant (0-18m)">Infant (0 - 18 Months)</option>
                          <option value="Toddler (18m-3y)">Toddler (18 Months - 3 Years)</option>
                          <option value="Preschool (3-5y)">Preschool (3 - 5 Years)</option>
                          <option value="School Age (5-12y)">School Age (5 - 12 Years)</option>
                        </select>
                        {errors.childAge && (
                          <span className="text-[11px] text-accent-pink mt-1 block">{errors.childAge.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Program Interest */}
                      <div>
                        <label className="block text-xs font-bold text-dark mb-1.5">Program Interested In *</label>
                        <select
                          {...register('program')}
                          className={`w-full px-4 py-3 rounded-2xl bg-light-section border ${
                            errors.program ? 'border-accent-pink' : 'border-customBorder'
                          } text-xs text-dark focus:outline-none focus:ring-2 focus:ring-emerald-500/30`}
                        >
                          <option value="">Select Program</option>
                          <option value="Full-Time Early Care">Full-Time Early Education</option>
                          <option value="Part-Time Discovery">Part-Time Discovery</option>
                          <option value="Before & After School">Before &amp; After School</option>
                          <option value="Summer Activity Camp">Summer Activity Camp</option>
                        </select>
                        {errors.program && (
                          <span className="text-[11px] text-accent-pink mt-1 block">{errors.program.message}</span>
                        )}
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label className="block text-xs font-bold text-dark mb-1.5">Preferred Visit Date *</label>
                        <input
                          type="date"
                          {...register('preferredDate')}
                          className={`w-full px-4 py-3 rounded-2xl bg-light-section border ${
                            errors.preferredDate ? 'border-accent-pink' : 'border-customBorder'
                          } text-xs text-dark focus:outline-none focus:ring-2 focus:ring-emerald-500/30`}
                        />
                        {errors.preferredDate && (
                          <span className="text-[11px] text-accent-pink mt-1 block">{errors.preferredDate.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-dark mb-1.5">Additional Notes or Questions</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your child's schedule, start date needs, or any questions..."
                        {...register('message')}
                        className="w-full px-4 py-3 rounded-2xl bg-light-section border border-customBorder text-xs text-dark focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>{isSubmitting ? 'Opening WhatsApp...' : 'Book Visit via WhatsApp'}</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* Emergency Contact Block & FAQ Shortcut */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="glass-card rounded-[28px] p-6 border border-white flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary shrink-0 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-dark text-sm">Emergency &amp; Health Protocols</h4>
                <p className="text-dark-muted text-xs mt-0.5">
                  Full First Aid/CPR equipment, direct contact with Citadel Emergency Services, and strict health policies.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-6 border border-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary shrink-0 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-dark text-sm">Have Questions First?</h4>
                  <p className="text-dark-muted text-xs mt-0.5">
                    Browse our 15+ answered FAQs about subsidies, meals, and hours.
                  </p>
                </div>
              </div>
              <Link
                to="/faq"
                className="px-4 py-2 rounded-full bg-dark text-white text-xs font-bold hover:bg-dark-light shrink-0"
              >
                View FAQs
              </Link>
            </div>

          </div>
        </section>

      </main>
    </>
  );
};
