import Image from 'next/image';
import Link from 'next/link';

export default function HormoneTherapy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-teal-700/80 z-10"></div>
        <Image
          src="/api/placeholder/1200/800"
          alt="Professional hormone therapy consultation and treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hormone Replacement Therapy
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Restore hormonal balance and vitality with personalized hormone optimization
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Treatment
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
              Advanced Hormone Optimization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Personalized Treatment</h3>
                <p className="text-gray-700 mb-6">
                  Reynolds Clinic offers bioidentical hormone replacement therapy tailored to your unique hormonal profile. Our comprehensive approach addresses symptoms of hormone imbalance for both men and women.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Comprehensive hormone testing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Bioidentical hormone therapy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    Ongoing monitoring & adjustment
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Treatment Options</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Testosterone Therapy</h4>
                    <p className="text-gray-700 text-sm">For men with low T, fatigue, and decreased vitality</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Estrogen/Progesterone</h4>
                    <p className="text-gray-700 text-sm">Menopause relief and women's hormone balance</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Thyroid Optimization</h4>
                    <p className="text-gray-700 text-sm">Metabolism support and energy enhancement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Benefits of Hormone Therapy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">85%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Energy Increase</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">90%</span>
                  </div>
                  <p className="font-semibold text-gray-900">Mood Improvement</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2-4</span>
                  </div>
                  <p className="font-semibold text-gray-900">Weeks to Results</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reclaim Your Vitality</h3>
              <p className="text-gray-700 mb-8">
                Don't let hormone imbalance control your life. Our expert hormone therapy can help you feel like yourself again.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mr-4"
              >
                Free Consultation
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