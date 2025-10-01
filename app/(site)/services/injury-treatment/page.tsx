"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function AccidentInjuryTreatment() {
  const CLINIC_NAME = "Reynolds Clinic";
  const PHONE_TEL = "+14195353214";
  const PHONE_DISPLAY = "(419) 535-3214";

  const speakableJSON = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Accident Injury Treatment in Toledo | Complete Recovery Care",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* JSON-LD for Speakable */}
      <Script
        id="speakable-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJSON) }}
      />

      {/* ======================= HERO ======================= */}
      <header className="relative overflow-hidden">
        <div className="relative h-[56vh] md:h-[68vh]">
          <Image
            src="/doctor.png"
            alt="Accident injury treatment and rehabilitation at Reynolds Clinic in Toledo, OH"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-transparent" />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl bg-white/5 backdrop-blur rounded-xl p-6 sm:p-8">
                <h1 className="speakable-headline text-3xl md:text-5xl font-bold mb-4">
                  Accident Injury Treatment In Toledo | Complete Recovery Care
                </h1>
                <p className="speakable-summary text-base md:text-lg text-gray-700 mb-6">
                  Explore compassionate accident injury treatment programs at
                  Reynolds Clinic. With a holistic approach, we address the root
                  causes of injuries, offering tailored recovery plans,
                  personalized physical rehabilitation, and supportive care to
                  promote wellness and long-term healing. Contact us today to
                  begin your recovery journey.
                </p>
                <Link
                  href={`tel:${PHONE_TEL}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Start Your Recovery Journey Today!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* ======================= FOUR PILLARS ======================= */}
                <section aria-labelledby="pillars-title" className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="pillars-title" className="sr-only">
              Why Choose Our Erectile Dysfunction Care
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                n: "1",
                t: "Tailored Recovery Plans",
                d: "Experience personalized care with tailored recovery plans that address your specific injury needs.",
              },
              {
                n: "2",
                t: "Holistic Healing Approach",
                d: "Benefit from a comprehensive, holistic rehabilitation services approach that improves overall well-being.",
              },
              {
                n: "3",
                t: "Confidential And Supportive Environment",
                d: "Recover in a safe and empathetic environment at our accident injury treatment center, ensuring privacy and comfort.",
              },
              {
                n: "4",
                t: "Experienced Professionals",
                d: "Trust our dedicated team of accident injury treatment professionals to support your recovery with expertise.",
              },
              ].map((item) => (
                <article
                  key={item.n}
                  className="bg-gray-50 rounded-lg p-6 flex items-start gap-4"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-blue-400 text-blue-500 text-2xl font-light flex-shrink-0">
                    {item.n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 text-lg mb-1">
                      {item.t}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* ======================= PHYSICAL REHAB ======================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/physical-rehab-toledo.jpg"
                alt="Physical rehabilitation after accident injury in Toledo"
                width={800}
                height={600}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Physical Rehabilitation Services
              </h2>
              <p className="text-gray-700 mb-6">
                Our physical rehab services in Toledo focus on restoring
                mobility, independence, and confidence after an accident. With a
                holistic approach addressing both physical and emotional
                recovery, our customized plans support healing in a safe,
                supportive environment.
              </p>
              <ul className="space-y-3">
                {[
                  "Customized rehabilitation plans tailored to individual needs.",
                  "State-of-the-art techniques for effective recovery.",
                  "Focus on restoring mobility and strength.",
                  "Holistic approach addressing physical and emotional recovery.",
                  "Supportive environment promoting confidence and independence.",
                ].map((point) => (
                  <li key={point} className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-teal-600 mt-1 mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ======================= PAIN + HOLISTIC CARE ======================= */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            <article>
              <h3 className="text-3xl font-bold mb-4">
                Comprehensive Pain Management Programs
              </h3>
              <p className="text-gray-700 mb-6">
                Our pain management programs relieve discomfort and improve
                quality of life after accidents. We combine physical therapy,
                medication management, and alternative treatments for effective
                results.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized pain management plans tailored to your needs.",
                  "Combination of therapies for effective pain relief.",
                  "Compassionate team focused on long-term well-being.",
                  "Immediate and long-term pain relief strategies.",
                  "Empathetic care ensuring comfort and understanding.",
                ].map((point) => (
                  <li key={point} className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-1 mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h3 className="text-3xl font-bold mb-4">
                Holistic Care For Injuries
              </h3>
              <p className="text-gray-700 mb-6">
                Our holistic injury care integrates physical, emotional, and
                mental healing, ensuring long-term recovery. We focus on
                nutritional counseling, therapeutic exercises, and lifestyle
                management for balanced well-being.
              </p>
              <ul className="space-y-3">
                {[
                  "Integration of physical, emotional, and mental healing.",
                  "Comprehensive care tailored to your recovery.",
                  "Dedicated expert support at every step.",
                  "Balanced, holistic approach to rehabilitation.",
                ].map((point) => (
                  <li key={point} className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-1 mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* ======================= PERSONAL INJURY CARE ======================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/personal-injury-care-toledo.jpg"
                alt="Personal injury recovery and care at Reynolds Clinic"
                width={800}
                height={600}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Comprehensive Personal Injury Care
              </h3>
              <p className="text-gray-700 mb-6">
                We provide a safe, supportive space for physical rehab,
                prioritizing privacy and comfort. Our dedicated team offers
                compassionate support and holistic guidance for sustainable
                recovery and resilience.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized care tailored to recovery needs.",
                  "Compassionate support and expert guidance.",
                  "Confidential, stress-free environment.",
                  "Holistic approach addressing emotional and physical healing.",
                  "Commitment to comprehensive recovery solutions.",
                ].map((point) => (
                  <li key={point} className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-teal-600 mt-1 mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ======================= RECOVERY ======================= */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-4">
              Accident Injury Recovery
            </h3>
            <p className="text-gray-700 mb-6">
              Our recovery programs are tailored to meet each client’s unique
              needs. With a holistic approach addressing physical, emotional,
              and lifestyle factors, we create structured plans with measurable
              goals. Trust our experienced professionals to guide you every step
              toward complete recovery.
            </p>
            <ul className="space-y-3">
              {[
                "Holistic approach addressing physical and emotional well-being.",
                "Collaborative goal-setting for structured recovery.",
                "Ongoing progress tracking for measurable results.",
                "Customized care tailored to your needs.",
                "Dedicated support for efficient recovery.",
              ].map((point) => (
                <li key={point} className="flex items-start text-gray-700">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ======================= NEWSLETTER CTA ======================= */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-400 text-white rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-3">
                Join Our Community For Exclusive Insights And Updates On Holistic Injury Recovery.
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto mb-8">
                Subscribe to Reynolds Clinic’s newsletter for the latest updates on physical rehabilitation and personal injury care services. Stay informed and empowered in your recovery journey.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
