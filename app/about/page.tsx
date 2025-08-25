import Image from 'next/image';
import Link from 'next/link';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  TrophyIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '50,000+', label: 'Patients Treated' },
  { number: '98%', label: 'Patient Satisfaction' },
  { number: '15+', label: 'Medical Specialists' }
];

const values = [
  {
    icon: HeartIcon,
    title: 'Compassionate Care',
    description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Medical Excellence',
    description: 'Our board-certified physicians use the latest medical advances and evidence-based treatments.'
  },
  {
    icon: UserGroupIcon,
    title: 'Patient-Centered',
    description: 'Your health goals and comfort are at the center of everything we do.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Continuous Learning',
    description: 'We stay at the forefront of medical innovation through ongoing education and research.'
  }
];

const milestones = [
  {
    year: '1998',
    title: 'Foundation',
    description: 'Dr. Michael Reynolds establishes the clinic with a vision of personalized healthcare.'
  },
  {
    year: '2005',
    title: 'Expansion',
    description: 'Added specialized services including addiction medicine and weight management.'
  },
  {
    year: '2012',
    title: 'Innovation',
    description: 'Introduced cutting-edge hormone therapy and men\'s health programs.'
  },
  {
    year: '2020',
    title: 'Modern Era',
    description: 'Launched comprehensive injury treatment and sports medicine services.'
  },
  {
    year: '2024',
    title: 'Excellence',
    description: 'Recognized as a leading medical practice with state-of-the-art facilities.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-teal-600/80 z-10"></div>
        <Image
          src="/api/placeholder/1200/800"
          alt="Reynolds Clinic medical team and modern facility"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Reynolds Clinic
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Dedicated to providing exceptional, personalized healthcare for over 25 years
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Experience Our Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1998 by Dr. Michael Reynolds, Reynolds Clinic began with a simple yet powerful vision: to provide personalized, compassionate healthcare that treats the whole person, not just symptoms.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the past 25 years, we've grown from a small family practice to a comprehensive medical facility specializing in addiction medicine, weight management, men's health, injury treatment, and hormone therapy.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our commitment to excellence, continuous innovation, and patient-centered care has made us a trusted healthcare partner for thousands of individuals and families.
              </p>
              <Link
                href="/doctors"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/300/300"
                      alt="Dr. Reynolds with patient consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/300/200"
                      alt="Modern medical equipment at Reynolds Clinic"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/300/200"
                      alt="Reynolds Clinic reception area"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/300/300"
                      alt="Medical team collaboration at Reynolds Clinic"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the exceptional care we provide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Photos Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our State-of-the-Art Facility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, comfortable spaces designed with your health and wellbeing in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/about/laboratory.png"
                alt="Advanced medical laboratory and diagnostic equipment"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold">Advanced Laboratory</h3>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/about/rehabilitation.png"
                alt="Physical therapy and rehabilitation treatment room"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold">Rehabilitation Suite</h3>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/about/pharmacy.png"
                alt="Pharmacy and medication management area"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold">On-Site Pharmacy</h3>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/about/recovering.png"
                alt="Comfortable recovery room for post-treatment care"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold">Recovery Suites</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              25 years of continuous growth, innovation, and commitment to patient care
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal-500 h-full hidden md:block"></div>
            
            {/* Timeline line - Mobile */}
            <div className="absolute left-8 top-0 w-1 bg-teal-500 h-full md:hidden"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-6">
                    {/* Mobile Timeline dot */}
                    <div className="w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg flex-shrink-0 mt-1 relative z-10"></div>
                    
                    {/* Mobile Content */}
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="text-2xl font-bold text-teal-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-700">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:block w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-teal-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Desktop Timeline dot */}
                  <div className="hidden md:block w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  
                  <div className="hidden md:block w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading medical organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <TrophyIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Top Medical Practice 2023
              </h3>
              <p className="text-gray-700">
                Beverly Hills Medical Association Excellence Award
              </p>
            </div>
            
            <div className="text-center p-8 bg-teal-50 rounded-xl">
              <ShieldCheckIcon className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Patient Safety Excellence
              </h3>
              <p className="text-gray-700">
                California Department of Health Recognition
              </p>
            </div>
            
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <HeartIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compassionate Care Award
              </h3>
              <p className="text-gray-700">
                National Healthcare Quality Foundation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Reynolds Clinic Difference
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of patients who have chosen us for their healthcare journey. Discover personalized, compassionate care that puts you first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}