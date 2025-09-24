"use client";
import Image from "next/image";
import Link from "next/link";

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
                Comprehensive Drug Rehabilitation Services In Toledo, OH
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Explore compassionate, supportive recovery care at Reynolds
                Clinic—personalized treatment plans, holistic health, and a
                confidential environment led by experienced professionals.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Your Recovery Journey Today!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Evidence-Based Section (kept) */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Evidence-Based Addiction Treatment
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-700 mb-6">
                  At Reynolds Clinic, we provide personalized drug
                  rehabilitation services combining medical expertise with
                  compassionate care. Our evidence-based treatment programs
                  address both physical dependence and underlying psychological
                  factors.
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
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Treatment Programs
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Inpatient Program
                    </h4>
                    <p className="text-gray-700 text-sm">
                      24/7 medical supervision in a safe, supportive environment
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Outpatient Program
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Flexible treatment while maintaining daily
                      responsibilities
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Aftercare Support
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Ongoing support and relapse prevention strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Four Pillars from screenshot */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                n: "1",
                t: "Personalized Treatment Plans",
                d: "Customized strategies tailored to your unique recovery needs, ensuring effective and sustainable results.",
              },
              {
                n: "2",
                t: "Holistic Health Approach",
                d: "Care that addresses root causes and promotes overall physical, mental, and emotional well-being.",
              },
              {
                n: "3",
                t: "Supportive & Confidential",
                d: "A safe, empathetic setting where privacy is respected and trust is central to your journey.",
              },
              {
                n: "4",
                t: "Experienced Professional Team",
                d: "Specialized rehab experts guiding you with tools and support essential for lasting recovery.",
              },
            ].map((item) => (
              <div key={item.n} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {item.n}
                  </div>
                  <h4 className="ml-3 font-semibold text-gray-900">{item.t}</h4>
                </div>
                <p className="text-gray-700 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Outpatient Drug Rehabilitation (image + content) */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-teal-500/10"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow">
              <Image
                src="/api/placeholder/700/500"
                width={700}
                height={500}
                alt="Outpatient program—patient holding glass of water"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Outpatient Drug Rehabilitation
            </h3>
            <p className="text-gray-700 mb-6">
              Our outpatient services provide flexible recovery options so you
              can maintain daily responsibilities while receiving the care and
              support you need. Programs are personalized to your goals,
              emphasizing sustainable recovery and a healthier lifestyle.
            </p>
            <ul className="space-y-3">
              {[
                "Flexible scheduling to accommodate daily commitments.",
                "Personalized therapeutic interventions.",
                "Focus on holistic recovery and well-being.",
                "Supportive community and network for recovery.",
                "Experienced professionals guiding your journey.",
              ].map((pt) => (
                <li key={pt} className="flex items-start text-gray-700">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-1 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEW: Aftercare & Holistic sections (two-column) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Aftercare */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Aftercare Support And Relapse Prevention
            </h3>
            <p className="text-gray-700 mb-6">
              We offer comprehensive aftercare services designed to help you
              maintain sobriety, stay connected to support, and continue
              progressing toward long-term health goals.
            </p>
            <ul className="space-y-3">
              {[
                "Personalized relapse prevention strategies.",
                "Supportive community for continued recovery.",
                "Resources to maintain sobriety and health goals.",
                "Access to a network of support and empowerment.",
              ].map((pt) => (
                <li key={pt} className="flex items-start text-gray-700">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Holistic */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Holistic Drug Rehabilitation Services
            </h3>
            <p className="text-gray-700 mb-6">
              Our holistic programs integrate nutritional counseling,
              mindfulness practices, and alternative therapies that support
              physical, mental, and emotional well-being—creating a
              comprehensive path to balance and renewal.
            </p>
            <ul className="space-y-3">
              {[
                "Incorporation of alternative therapies for holistic healing.",
                "Focus on physical, mental, and emotional well-being.",
                "Nutritional counseling to support recovery.",
                "Mindfulness practices for stress management.",
                "Comprehensive path to lasting health and balance.",
              ].map((pt) => (
                <li key={pt} className="flex items-start text-gray-700">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEW: Newsletter CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-3">
              Join Our Community And Stay Informed On The Latest In Addiction
              Recovery.
            </h3>
            <p className="text-white/90 mb-8">
              Subscribe to the Reynolds Clinic newsletter for updates on
              treatment services, recovery insights, and health tips.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg px-4 py-3 text-gray-900"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA (kept) */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Begin Your Recovery Journey?
          </h3>
          <p className="text-gray-700 mb-8">
            Take the first step towards a healthier, addiction-free life. Our
            compassionate team is here to support you every step of the way.
          </p>

          <Link
            href="tel:+14195353214"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Call Now
          </Link>
        </div>
      </section>

      {/* NEW: Compact footer note (matches screenshot copy, lightweight) */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-700">
          Visit our medical clinic in Toledo. We offer affordable, friendly
          healthcare solutions for men and women to overcome drug addiction,
          manage weight, recover from injuries, and more.
        </div>
      </section>

      {/* Contact anchor */}
      <div id="contact" className="sr-only" aria-hidden="true"></div>
    </div>
  );
}
