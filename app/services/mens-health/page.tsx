import Image from 'next/image';
import Link from 'next/link';

export default function MensHealth() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-teal-500/80 z-10"></div>
        <Image
          src="/api/placeholder/1200/800"
          alt="Professional men's health consultation and medical care"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Men's Health Specialists
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Comprehensive healthcare solutions designed specifically for men's unique health needs
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Specialized Men's Healthcare
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Services</h3>
                <p className="text-gray-700 mb-6">
                  Reynolds Clinic offers confidential, professional men's health services addressing physical, mental, and sexual wellness. Our experienced physicians provide personalized treatment in a comfortable, judgment-free environment.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Low testosterone treatment
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Erectile dysfunction therapy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Prostate health screening
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Treatment Areas</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Hormone Optimization</h4>
                    <p className="text-gray-700 text-sm">Testosterone replacement therapy and hormone balancing</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Sexual Health</h4>
                    <p className="text-gray-700 text-sm">ED treatments, performance enhancement, and wellness</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Preventive Care</h4>
                    <p className="text-gray-700 text-sm">Regular screenings and early disease detection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Why Men Choose Reynolds Clinic</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">100%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Confidential</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">20+</span>
                  </div>
                  <p className="font-semibold text-gray-900">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">95%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Success Rate</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Take Control of Your Health</h3>
              <p className="text-gray-700 mb-8">
                Don't let health concerns hold you back. Our expert team provides discreet, effective treatment for all men's health issues.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mr-4"
              >
                Book Consultation
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call Confidentially
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}