"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function HormoneReplacementTherapy() {
  const CLINIC_NAME = "Reynolds Clinic";
  const PHONE_TEL = "+14195353214";
  const PHONE_DISPLAY = "(419) 535-3214";
  const ADDRESS = "2450 N Reynolds Rd A, Toledo, OH 43615";

  // Voice assistants (Siri/Google/Alexa): highlight hero headline + summary
  const speakableJSON = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hormone Replacement Therapy in Toledo, OH",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
  };

  // Business/entity schema
  const businessJSON = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_NAME,
    medicalSpecialty: "Endocrinology",
    url: "https://www.reynoldsclinic.net/services/hormone-replacement",
    telephone: PHONE_TEL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2450 N Reynolds Rd A",
      addressLocality: "Toledo",
      addressRegion: "OH",
      postalCode: "43615",
      addressCountry: "US",
    },
    areaServed: "Lucas County",
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* JSON-LD for Speakable & Business */}
      <Script
        id="speakable-jsonld-hrt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJSON) }}
      />
      <Script
        id="business-jsonld-hrt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJSON) }}
      />

      {/* ======================= HERO ======================= */}
      <header className="relative overflow-hidden">
        <div className="relative h-[56vh] md:h-[68vh]">
          <Image
            src="/doctor.png"
            alt="Hormone replacement therapy consultation and medication at Reynolds Clinic, Toledo"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-transparent" />
          <div className="relative h-full">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl bg-white/5 shadow-xl rounded-xl p-6 sm:p-8">
                <h1 className="speakable-headline text-3xl md:text-5xl font-bold leading-tight mb-4">
                  Restoring Balance With Hormone Replacement Therapy
                </h1>
                <p className="speakable-summary text-base md:text-lg text-gray-700 mb-6">
                  Experience expert hormone replacement therapy at Reynolds
                  Clinic—tailored solutions for men and women. Our personalized
                  approach helps restore hormonal balance, enhance vitality, and
                  improve overall well-being. Take the first step toward a
                  healthier, more energized life today.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors"
                    aria-label={`Call ${CLINIC_NAME} at ${PHONE_DISPLAY}`}
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
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
              Why Choose Our Hormone Replacement Therapy
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  n: "1",
                  t: "Personalized Treatment Plans",
                  d: "Receive customized hormone replacement therapy for men and women, designed to address your unique needs and deliver effective, sustainable results.",
                },
                {
                  n: "2",
                  t: "Improved Energy And Vitality",
                  d: "Regain energy, enhance metabolism, and improve overall well-being with expertly tailored hormone replacement therapy.",
                },
                {
                  n: "3",
                  t: "Comprehensive Health Support",
                  d: "Benefit from a holistic approach that supports mental clarity, bone health, cardiovascular wellness, and mood.",
                },
                {
                  n: "4",
                  t: "Expert Medical Supervision",
                  d: "Trust in our experienced professionals dedicated to optimizing your hormone levels safely and effectively.",
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

        {/* ======================= HRT FOR MEN ======================= */}
        <section aria-labelledby="hrt-men-title" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div aria-hidden className="absolute -inset-2 rounded-2xl bg-teal-500/10" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hrt-men.jpg"
                  alt="Hormone replacement therapy for men—doctor approval and plan"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <h2 id="hrt-men-title" className="text-3xl md:text-4xl font-bold mb-4">
                Hormone Replacement Therapy For Men
              </h2>
              <p className="text-gray-700 mb-6">
                Hormonal imbalances can lead to fatigue, reduced muscle mass,
                decreased libido, and mood changes. Our HRT for men is designed
                to restore testosterone balance, enhance energy and strength, and
                support long-term wellness. Every treatment is tailored to your
                needs for the best possible results.
              </p>
              <ul className="space-y-3">
                {[
                  "Restores testosterone levels for improved energy and strength.",
                  "Supports muscle mass retention and physical performance.",
                  "Enhances libido and overall sexual health.",
                  "Improves mood, focus, and cognitive function.",
                  "Reduces fatigue and promotes long-term wellness.",
                ].map((pt) => (
                  <li key={pt} className="flex items-start text-gray-800">
                    <svg className="w-5 h-5 mt-1 mr-3 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ======================= WOMEN + ASSESSMENTS ======================= */}
        <section aria-labelledby="women-assessments-title" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            {/* Women */}
            <article aria-labelledby="hrt-women-title">
              <h3 id="hrt-women-title" className="text-3xl md:text-4xl font-bold mb-4">
                Hormone Replacement Therapy For Women
              </h3>
              <p className="text-gray-700 mb-6">
                Aging, menopause, and other factors can lead to hormonal
                imbalances that affect health and quality of life. Our HRT for
                women helps alleviate symptoms such as hot flashes, fatigue,
                sleep disruption, and mood changes—restoring balance and
                enhancing overall well-being.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduces menopause symptoms, including hot flashes and night sweats.",
                  "Supports bone density and cardiovascular health.",
                  "Enhances mood stability and cognitive function.",
                  "Improves skin elasticity and overall vitality.",
                  "Promotes balanced energy levels and restful sleep.",
                ].map((pt) => (
                  <li key={pt} className="flex items-start text-gray-800">
                    <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </article>

            {/* Assessments */}
            <article aria-labelledby="assessments-title">
              <h3 id="assessments-title" className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Hormonal Health Assessments
              </h3>
              <p className="text-gray-700 mb-6">
                Before starting HRT for men or women, we conduct thorough
                assessments to determine your specific needs. Our diagnostic
                approach includes detailed lab testing, medical history review,
                and symptom analysis to ensure a precise, safe, and effective
                plan aligned with your health goals.
              </p>
              <ul className="space-y-3">
                {[
                  "In-depth hormone level testing and analysis.",
                  "Personalized evaluations based on medical history.",
                  "Tailored treatment plans for individual needs.",
                  "Continuous monitoring for optimal results.",
                  "Lifestyle and dietary guidance to support outcomes.",
                ].map((pt) => (
                  <li key={pt} className="flex items-start text-gray-800">
                    <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* ======================= SAFE & EFFECTIVE HRT ======================= */}
        <section aria-labelledby="safe-hrt-title" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 md:order-1">
              <div aria-hidden className="absolute -inset-2 rounded-2xl bg-blue-500/10" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hrt-safe.jpg"
                  alt="Safe and effective HRT treatments—bioidentical and synthetic options"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 id="safe-hrt-title" className="text-3xl md:text-4xl font-bold mb-4">
                Safe And Effective HRT Treatments
              </h2>
              <p className="text-gray-700 mb-6">
                Our hormone replacement therapy services for men and women
                prioritize safety and efficacy. We utilize bioidentical and
                synthetic options as appropriate, with precise dosing, regular
                monitoring, and adjustments to ensure the best possible
                outcomes—focused on energy, mood, and overall health.
              </p>
              <ul className="space-y-3">
                {[
                  "Bioidentical and synthetic hormone options.",
                  "Precise dosing guided by lab results.",
                  "Regular monitoring for safety and effectiveness.",
                  "Adjustments based on individual response and progress.",
                  "Holistic support for long-term hormonal health.",
                ].map((pt) => (
                  <li key={pt} className="flex items-start text-gray-800">
                    <svg className="w-5 h-5 mt-1 mr-3 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ======================= NEWSLETTER CTA ======================= */}
        <section aria-labelledby="cta-title" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-400/95 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <h2 id="cta-title" className="text-3xl font-bold mb-3">
                Stay Informed On Hormonal Health
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto mb-8">
                Subscribe to the Reynolds Clinic newsletter for expert insights,
                health tips, and updates on hormone replacement therapy for men
                and women. Stay connected with us and take charge of your wellness journey.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Contact anchor for hero CTA */}
      <div id="contact" className="sr-only" aria-hidden="true" />
    </div>
  );
}
