import React from 'react';
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="location" className="relative bg-brand-cream">
      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* Left Content */}
        <div className="lg:w-1/2 py-20 px-4 md:px-12 lg:px-20 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Find Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 border-l-4 border-brand-red pl-4">
              Located on Capital Blvd, directly across from Chuck E. Cheese. <br/>
              Ample parking available.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-dark">Address</h3>
                  <p className="text-gray-600 mt-1">{BUSINESS_INFO.address}</p>
                  <p className="text-gray-600">{BUSINESS_INFO.cityStateZip}</p>
                  <a 
                    href={BUSINESS_INFO.mapEmbedUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-brand-red text-sm font-bold mt-2 hover:underline"
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-dark">Opening Hours</h3>
                  <div className="mt-1 grid grid-cols-2 gap-x-8 gap-y-1 text-gray-600 text-sm md:text-base">
                    <span className="font-medium">Mon - Wed</span>
                    <span>7:00 AM - 9:00 PM</span>
                    <span className="font-medium">Thu - Sun</span>
                    <span>7:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-dark">Contact</h3>
                  <div className="mt-1 space-y-2">
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="block text-gray-600 hover:text-brand-red transition-colors text-lg font-medium">
                      {BUSINESS_INFO.phone} <span className="text-sm text-gray-400 font-normal ml-2">(Restaurant)</span>
                    </a>
                    <a href={`tel:${BUSINESS_INFO.managementPhone}`} className="block text-gray-600 hover:text-brand-red transition-colors text-lg font-medium">
                      {BUSINESS_INFO.managementPhone} <span className="text-sm text-gray-400 font-normal ml-2">(Management)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map - Full Height */}
        <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[500px] bg-gray-200 relative">
          <iframe
            src={BUSINESS_INFO.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location Map"
            className="absolute inset-0 w-full h-full"
          ></iframe>
          
          {/* Decorative Overlay for transition */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-cream to-transparent hidden lg:block pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-cream to-transparent lg:hidden pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;