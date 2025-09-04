import Image from 'next/image';
import Link from 'next/link';

export default function InjuryTreatment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/80 to-blue-500/80 z-10"></div>
        <Image
          src="/api/placeholder/1200/800"
          alt="Professional injury treatment and rehabilitation therapy"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Injury Treatment & Recovery
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Advanced treatment protocols for faster healing and complete recovery
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Treatment
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
              Comprehensive Injury Care
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Expert Treatment</h3>
                <p className="text-gray-700 mb-6">
                  Our injury treatment specialists use cutting-edge therapies to accelerate healing and restore function. From sports injuries to workplace accidents, we provide comprehensive care for optimal recovery.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    Advanced diagnostic imaging
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    Pain management protocols
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    Rehabilitation therapy
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Common Injuries Treated</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Sports Injuries</h4>
                    <p className="text-gray-700 text-sm">Sprains, strains, fractures, and overuse injuries</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Work-Related Injuries</h4>
                    <p className="text-gray-700 text-sm">Repetitive stress, back injuries, and accidents</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Auto Accidents</h4>
                    <p className="text-gray-700 text-sm">Whiplash, soft tissue injuries, and trauma care</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Treatment Advantages</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">50%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Faster Recovery</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">24/7</span>
                  </div>
                  <p className="font-semibold text-gray-900">Emergency Care</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">100%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Recovery Focus</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Don't Let Injuries Slow You Down</h3>
              <p className="text-gray-700 mb-8">
                Get back to your active lifestyle with our proven injury treatment and rehabilitation programs.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mr-4"
              >
                Schedule Treatment
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Emergency Line
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}