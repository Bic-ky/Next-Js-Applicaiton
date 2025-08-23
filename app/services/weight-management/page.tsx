import Image from 'next/image';
import Link from 'next/link';

export default function WeightManagement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-blue-600/80 z-10"></div>
        <Image
          src="/api/placeholder/1200/800"
          alt="Professional weight management consultation and healthy lifestyle"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Weight Management Program
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Achieve sustainable weight loss with medical supervision and personalized care
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Your Journey
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
              Medical Weight Loss Solutions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Comprehensive Assessment</h3>
                <p className="text-gray-700 mb-6">
                  Our weight management program begins with a thorough medical evaluation to identify underlying factors affecting your weight. We create personalized treatment plans based on your unique health profile and goals.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    Complete metabolic analysis
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    Hormone level evaluation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    Nutritional deficiency testing
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Treatment Options</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Prescription Medications</h4>
                    <p className="text-gray-700 text-sm">FDA-approved weight loss medications when appropriate</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Nutritional Counseling</h4>
                    <p className="text-gray-700 text-sm">Personalized meal planning and dietary guidance</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Lifestyle Coaching</h4>
                    <p className="text-gray-700 text-sm">Sustainable habit formation and behavioral support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Program Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">5-15%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Average Weight Loss</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">90%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Patient Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1:1</span>
                  </div>
                  <p className="font-semibold text-gray-900">Personal Support</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transform Your Health Today</h3>
              <p className="text-gray-700 mb-8">
                Join our medically supervised weight management program and achieve lasting results with professional support.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mr-4"
              >
                Book Consultation
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}