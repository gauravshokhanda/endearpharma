import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { companyInfo } from '../data/companyInfo';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="We're here to answer your questions and provide the support you need"
        imageSrc="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
        alignment="center"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-6">Get in Touch</h2>
              <p className="text-text-light mb-8">
                Have a question about our products or services? Fill out the form below and one of our representatives will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-6">Contact Information</h2>
              <p className="text-text-light mb-8">
                You can reach us through any of the following channels or visit our headquarters during business hours.
              </p>

              <div className="space-y-6">
                <ContactInfoCard
                  icon={<MapPin size={24} className="text-secondary-red" />}
                  title="Our Location"
                  details={companyInfo.contact.address}
                />
                
                <ContactInfoCard
                  icon={<Clock size={24} className="text-secondary-orange" />}
                  title="Business Hours"
                  details={companyInfo.contact.hours}
                />
                
                <ContactInfoCard
                  icon={<Phone size={24} className="text-secondary-yellow" />}
                  title="Phone Number"
                  details={companyInfo.contact.phone}
                />
                
                <ContactInfoCard
                  icon={<Mail size={24} className="text-secondary-red" />}
                  title="Email Address"
                  details={companyInfo.contact.email}
                />
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-text-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialLink href={companyInfo.socialMedia.twitter} label="Twitter" />
                  <SocialLink href={companyInfo.socialMedia.facebook} label="Facebook" />
                  <SocialLink href={companyInfo.socialMedia.linkedin} label="LinkedIn" />
                  <SocialLink href={companyInfo.socialMedia.instagram} label="Instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Find answers to the most common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqItem 
              question="How can I get information about a specific product?"
              answer="You can find detailed information about each of our products on their respective product pages. If you need additional information, please contact our customer service team using the form above or call us directly."
            />
            
            <FaqItem 
              question="What should I do if I experience side effects from a medication?"
              answer="If you experience any unexpected side effects, please contact your healthcare provider immediately. You can also report the side effects to us through our contact form or by calling our customer service number."
            />
            
            <FaqItem 
              question="How can I become a distributor for Endearpharma products?"
              answer="We're always looking for distribution partners. Please send us your business details and distribution proposal through our contact form, and our business development team will get back to you."
            />
            
            <FaqItem 
              question="Do you offer internship or training programs?"
              answer="Yes, we offer internship programs for students and recent graduates in various fields including pharmaceutical sciences, research, marketing, and business administration. Please check our careers page or contact us for current opportunities."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, details }) => (
  <div className="flex items-start">
    <div className="p-3 bg-gray-50 rounded-full mr-4">{icon}</div>
    <div>
      <h3 className="font-semibold text-text-dark">{title}</h3>
      <p className="text-text-light">{details}</p>
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-50 rounded-full text-text-light hover:text-secondary-red hover:bg-gray-100 transition-colors"
    aria-label={label}
  >
    <span className="sr-only">{label}</span>
    {label === 'Twitter' && <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>}
    {label === 'Facebook' && <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
    {label === 'LinkedIn' && <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
    {label === 'Instagram' && <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>}
  </a>
);

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-text-dark">{question}</h3>
        <svg
          className={`w-5 h-5 text-text-light transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-text-light">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;