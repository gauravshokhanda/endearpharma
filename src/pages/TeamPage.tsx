import React from 'react';
import Hero from '../components/Hero';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers } from '../data/team';

const TeamPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Team"
        subtitle="Meet the experienced professionals behind MediCure's success"
        imageSrc="https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg"
        alignment="center"
      />

      {/* Team Members Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Leadership Team</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Our company is led by a team of experienced professionals with diverse backgrounds in pharmaceuticals, research, and business management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-4">Join Our Team</h2>
              <div className="h-1 w-20 bg-secondary-red mb-6"></div>
              <p className="text-text-light mb-6">
                At MediCure Pharmaceuticals, we're always looking for talented individuals who are passionate about making a difference in healthcare. We offer a dynamic work environment, opportunities for professional growth, and the chance to contribute to meaningful work that improves lives.
              </p>
              <p className="text-text-light mb-6">
                Whether you're a scientist, researcher, marketing professional, or operations specialist, we might have the perfect role for you. Check our careers page regularly for open positions or submit your resume for future opportunities.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-secondary-red text-white rounded-md hover:bg-secondary-red/90 transition-colors"
              >
                Contact Us About Careers
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg" 
                alt="Join our team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Our Company Culture</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              We believe that our success is built on a foundation of collaboration, innovation, and respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CultureCard 
              title="Innovation"
              description="We encourage creative thinking and are constantly looking for new ways to improve our products and processes."
              imageSrc="https://images.pexels.com/photos/8942550/pexels-photo-8942550.jpeg"
            />
            <CultureCard 
              title="Collaboration"
              description="We believe that the best results come from teamwork and open communication across departments."
              imageSrc="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            />
            <CultureCard 
              title="Excellence"
              description="We are committed to maintaining the highest standards in everything we do, from research to customer service."
              imageSrc="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface CultureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="h-48 overflow-hidden">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-semibold text-text-dark mb-3">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>
  </div>
);

export default TeamPage;