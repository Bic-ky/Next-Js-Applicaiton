import Image from 'next/image';
import Link from 'next/link';

export default function DrugRehabilitation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-teal-600/80 z-10"></div>
        <Image
          src="/api/placeholder/1200/800"
          alt="Professional drug rehabilitation therapy session"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Drug Rehabilitation Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Comprehensive addiction treatment and recovery support tailored to your journey
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Your Recovery
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
              Evidence-Based Addiction Treatment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Approach</h3>
                <p className="text-gray-700 mb-6">
                  At Reynolds Clinic, we provide personalized drug rehabilitation services combining medical expertise with compassionate care. Our evidence-based treatment programs address both physical dependence and underlying psychological factors.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Medically supervised detoxification
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Individual and group therapy sessions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Medication-assisted treatment (MAT)
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Treatment Programs</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Inpatient Program</h4>
                    <p className="text-gray-700 text-sm">24/7 medical supervision in a safe, supportive environment</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Outpatient Program</h4>
                    <p className="text-gray-700 text-sm">Flexible treatment while maintaining daily responsibilities</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Aftercare Support</h4>
                    <p className="text-gray-700 text-sm">Ongoing support and relapse prevention strategies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Reynolds Clinic?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">98%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">24/7</span>
                  </div>
                  <p className="font-semibold text-gray-900">Medical Support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">15+</span>
                  </div>
                  <p className="font-semibold text-gray-900">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Begin Your Recovery Journey?</h3>
              <p className="text-gray-700 mb-8">
                Take the first step towards a healthier, addiction-free life. Our compassionate team is here to support you every step of the way.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mr-4"
              >
                Schedule Consultation
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}