import React from 'react';
import Hero from '../components/Hero';
import { companyInfo } from '../data/companyInfo';
import { Target, Glasses, Users, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Endearpharma"
        subtitle="Discover our story, mission, and the values that drive our commitment to healthcare excellence."
        imageSrc="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
        alignment="center"
      />

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-4">Our Story</h2>
              <div className="h-1 w-20 bg-secondary-red mb-6"></div>
              <p className="text-text-light mb-6">
                {companyInfo.about.story}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {/* <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold text-2xl text-secondary-red">{companyInfo.founded}</div>
                  <div className="text-text-light text-sm">Year Founded</div>
                </div> */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-bold text-2xl text-secondary-red">25+</div>
                  <div className="text-text-light text-sm">Medicines</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg" 
                alt=" Endeaepharma history" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-secondary-red/10 rounded-full">
                  <Target size={36} className="text-secondary-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4 text-center">Our Mission</h3>
              <p className="text-text-light text-center">
                {companyInfo.about.mission}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-secondary-yellow/10 rounded-full">
                  <Glasses size={36} className="text-secondary-yellow" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4 text-center">Our Vision</h3>
              <p className="text-text-light text-center">
                {companyInfo.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Our Values</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              These core principles guide our decisions, shape our culture, and define how we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.about.values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-text-dark mb-2 flex items-center">
                  <Star size={18} className="text-secondary-red mr-2" />
                  {value.title}
                </h3>
                <p className="text-text-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary-red/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Why Choose Us</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Endearpharma stands out in the pharmaceutical industry for several key reasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-text-dark mb-3">Research Excellence</h3>
              <p className="text-text-light">
                Our dedicated research team constantly works on developing new and improved formulations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-text-dark mb-3">Quality Manufacturing</h3>
              <p className="text-text-light">
                All our products are manufactured in state-of-the-art facilities that meet international standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-text-dark mb-3">Customer Focus</h3>
              <p className="text-text-light">
                We prioritize patient well-being and customer satisfaction in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;