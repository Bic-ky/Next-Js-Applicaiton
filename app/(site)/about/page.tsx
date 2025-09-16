import Image from 'next/image';
import Link from 'next/link';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const stats = [
  // Paraphrased / genericized stats; keep or replace with owned exact figures
  { number: '25+', label: 'Years Serving Toledo' },
  { number: '5000+', label: 'Patient Visits Completed' },
  { number: '98%', label: 'Positive Patient Feedback' },
  { number: '15+', label: 'Clinicians & Specialists' }
];

const values = [
  {
    icon: HeartIcon,
    title: 'Compassionate Care',
    description:
      // Paraphrase of “we treat patients with empathy and respect”
      'Every visit is grounded in respect, empathy, and genuine concern for your well-being.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Clinical Excellence',
    description:
      // Paraphrase of “board-certified physicians + evidence-based”
      'Board-certified providers use proven, up-to-date treatments tailored to your needs.'
  },
  {
    icon: UserGroupIcon,
    title: 'Patient-Centered',
    description:
      // Paraphrase of “your goals at the center”
      'Your goals guide the plan—from first consult through follow-up and long-term care.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Always Learning',
    description:
      // Paraphrase of “ongoing education & innovation”
      'We continually refine our approach through ongoing training and medical advances.'
  }
];

const milestones = [
  // Paraphrased timeline milestones; adjust dates/titles if you own exact claims
  // Change this in `milestones`:
{ year: '1998', title: 'Foundation', description: 'Munir Ahmad establishes the clinic with a vision of personalized healthcare.' },
  { year: '2005', title: 'Specialty Growth', description: 'Expanded to include addiction care, weight management, and related services.' },
  { year: '2012', title: 'Innovation', description: 'Introduced advanced hormone therapy and comprehensive men’s health programs.' },
  { year: '2020', title: 'Modernization', description: 'Broadened injury evaluation and rehabilitation with coordinated support.' },
  { year: '2024', title: 'Recognition', description: 'Recognized locally for modern facilities and consistent, quality outcomes.' }
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
                {/* TODO: replace with exact site headline if you own rights */}
                About Reynolds Clinic
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {/* Paraphrase of hero subheading */}
                Personalized, high-quality medical care for the Toledo community for over two decades.
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
                {/* Paraphrase of intro paragraph */}
                Founded with a simple idea—treat the whole person—Reynolds Clinic has grown into a
                trusted medical home for families across Toledo.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {/* Paraphrase of breadth/services */}
                What began as a small practice now delivers coordinated care across addiction medicine,
                medical weight management, men’s health, injury treatment, and hormone therapy.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                {/* Paraphrase of commitment */}
                Our team pairs compassion with evidence-based medicine so patients get clear answers,
                practical plans, and steady follow-through.
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
                      alt="Patient consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/300/200"
                      alt="Modern medical equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/300/200"
                      alt="Clinic reception area"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/300/300"
                      alt="Clinical team collaboration"
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

      {/* Founder Section */}
      <section id="founder" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Founder Photo */}
            <div className="relative h-72 w-full rounded-xl overflow-hidden shadow-lg lg:col-span-1">
              {/* Replace with your actual image path if available */}
              <Image
                src="/api/placeholder/500/600"
                alt="Munir Ahmad, Founder of Reynolds Clinic"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Founder Copy */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                About the Founder
              </h2>
              <p className="text-teal-600 font-semibold mb-4">
                Munir Ahmad — Founder
              </p>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hello, I'm Munir Ahmad, the founder of Reynolds Clinic. With a passion for
                  health and wellness, I established this clinic to provide comprehensive
                  and compassionate care to individuals in Toledo and beyond.
                </p>
                <p>
                  My experience in the health industry has equipped me with the knowledge
                  and skills to address the unique challenges faced by our clients, from
                  addiction recovery to injury rehabilitation.
                </p>
                <p>
                  I am committed to creating a supportive and confidential environment where
                  clients can confidently take control of their health journeys.
                </p>
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
              {/* Paraphrase of value intro */}
              Principles that shape how we care for you—from first visit to long-term follow-up.
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
              {/* Paraphrase of facility intro */}
              Comfortable spaces and modern equipment designed for efficient, thorough care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/about/laboratory.png"
                alt="Advanced laboratory and diagnostic equipment"
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
                alt="Rehabilitation treatment room"
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
                alt="On-site pharmacy area"
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
                alt="Comfortable recovery room"
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
              {/* Paraphrase of timeline intro */}
              A steady path of growth, innovation, and commitment to patients.
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
                    <div className="w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg flex-shrink-0 mt-1 relative z-10"></div>
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
              {/* Paraphrase general statement */}
              Our team’s focus on safety, compassion, and outcomes has earned local recognition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Keep generic award shells; replace with owned/verified entities if desired */}
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <TrophyIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Recognition
              </h3>
              <p className="text-gray-700">
                Highlighting consistent patient experiences and quality care.
              </p>
            </div>
            <div className="text-center p-8 bg-teal-50 rounded-xl">
              <ShieldCheckIcon className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Patient Safety Focus
              </h3>
              <p className="text-gray-700">
                Recognized for safe, reliable, and coordinated care practices.
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <HeartIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compassion in Care
              </h3>
              <p className="text-gray-700">
                Celebrating a culture of empathy and clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
