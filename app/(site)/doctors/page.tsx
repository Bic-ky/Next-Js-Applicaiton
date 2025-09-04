import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  {
    name: 'Dr. Michael Reynolds',
    title: 'Medical Director & Internal Medicine',
    specialties: ['Internal Medicine', 'Addiction Medicine', 'Preventive Care'],
    education: 'Harvard Medical School, MD',
    experience: '20+ years',
    image: '/doctors/doc.png',
    bio: 'Leading expert in comprehensive internal medicine with specialized training in addiction treatment and preventive healthcare.',
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'Weight Management Specialist',
    specialties: ['Endocrinology', 'Weight Management', 'Metabolic Medicine'],
    education: 'Johns Hopkins University, MD',
    experience: '15+ years',
    image: '/doctors/doc.png',
    bio: 'Board-certified endocrinologist specializing in medical weight loss and metabolic disorders with proven success rates.',
  },
  {
    name: 'Dr. James Carter',
    title: 'Men\'s Health & Hormone Specialist',
    specialties: ['Men\'s Health', 'Hormone Therapy', 'Sexual Medicine'],
    education: 'Mayo Clinic, MD',
    experience: '18+ years',
    image: '/doctors/doc.png',
    bio: 'Dedicated men\'s health physician with expertise in hormone optimization and sexual wellness treatments.',
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Sports Medicine & Injury Specialist',
    specialties: ['Sports Medicine', 'Orthopedics', 'Rehabilitation'],
    education: 'Stanford Medical School, MD',
    experience: '12+ years',
    image: '/doctors/doc.png',
    bio: 'Former team physician with extensive experience in sports injuries, rehabilitation, and performance optimization.',
  },
  {
    name: 'Dr. David Kim',
    title: 'Hormone & Anti-Aging Medicine',
    specialties: ['Hormone Therapy', 'Anti-Aging', 'Integrative Medicine'],
    education: 'UCLA Medical School, MD',
    experience: '16+ years',
    image: '/doctors/doc.png',
    bio: 'Pioneer in bioidentical hormone therapy and anti-aging medicine with thousands of successful patient outcomes.',
  },
  {
    name: 'Dr. Lisa Thompson',
    title: 'Family Medicine & Women\'s Health',
    specialties: ['Family Medicine', 'Women\'s Health', 'Preventive Care'],
    education: 'University of Michigan, MD',
    experience: '14+ years',
    image: '/doctors/doc.png',
    bio: 'Compassionate family physician specializing in comprehensive women\'s healthcare and family wellness programs.',
  },
];

export default function Doctors() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-teal-600/90 z-10"></div>
        <Image
          src="/api/placeholder/1200/600"
          alt="Professional medical team at Reynolds Clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our Expert Medical Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Board-certified physicians dedicated to providing exceptional, personalized healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Distinguished Physicians
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each of our doctors brings specialized expertise and years of experience to provide you with the highest quality medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={doctor.image}
                    alt={`Dr. ${doctor.name} - ${doctor.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-teal-600 font-semibold mb-3">
                    {doctor.title}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Education:</span> {doctor.education}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">Experience:</span> {doctor.experience}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {doctor.bio}
                  </p>

                  <Link
                    href="#contact"
                    className="inline-block w-full text-center bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Patients Choose Reynolds Clinic Doctors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">100+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Years Combined Experience</h3>
              <p className="text-gray-600">Decades of medical expertise across all specialties</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">98%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Satisfaction</h3>
              <p className="text-gray-600">Consistently high ratings for care quality and outcomes</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Support</h3>
              <p className="text-gray-600">Round-the-clock medical support when you need it</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">5★</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top Rated Care</h3>
              <p className="text-gray-600">Consistently rated among the best in patient care</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Meet Your Doctor?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a consultation with one of our expert physicians today and take the first step toward better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Appointment
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-white"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}