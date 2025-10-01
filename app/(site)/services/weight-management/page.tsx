"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function WeightManagement() {
  const CLINIC_NAME = "Reynolds Clinic";
  const PHONE_TEL = "+14195353214";
  const PHONE_DISPLAY = "(419) 535-3214";
  const ADDRESS = "2450 N Reynolds Rd A, Toledo, OH 43615";

  // Voice assistants: speakable blocks for hero headline/summary
  const speakableJSON = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Comprehensive Weight Loss Programs in Toledo, OH",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
  };

  // Business entity (tuned for weight loss service)
  const businessJSON = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_NAME,
    medicalSpecialty: "WeightLoss",
    url: "https://www.reynoldsclinic.net/services/weight-management",
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
      {/* JSON-LD */}
      <Script
        id="speakable-jsonld-weight"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJSON) }}
      />
      <Script
        id="business-jsonld-weight"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJSON) }}
      />

      {/* ======================= HERO ======================= */}
      <header className="relative overflow-hidden">
        <div className="relative h-[56vh] md:h-[68vh]">
          <Image
            src="/doctor.png"
            alt="Medical weight programs at Reynolds Clinic"
            fill
            priority
            className="object-cover"
          />
        {/* soft left overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-transparent" />
          <div className="relative h-full">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              {/* translucent content card per screenshot style */}
              <div className="max-w-3xl bg-white/5 shadow-xl rounded-xl p-6 sm:p-8">
                <h1 className="speakable-headline text-3xl md:text-5xl font-bold leading-tight mb-4">
                  Comprehensive Weight Loss Programs In Toledo For Success
                </h1>
                <p className="speakable-summary text-base md:text-lg text-gray-700 mb-6">
                  Discover how Reynolds Clinic’s medical weight loss programs in Toledo, Ohio, and surrounding areas can help you achieve your ideal weight through personalized and holistic approaches. The expert-led programs at our Toledo weight loss clinic focus on sustainable lifestyle changes, creating long-term success in your health and wellness journey.{" "}
                  <span className="sr-only">
                    Start your journey to a healthier you today.
                  </span>
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
              Why Choose Our Weight Loss Programs
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  n: "1",
                  t: "Personalized Weight Loss Plans",
                  d: "Our tailored medical weight loss programs in Toledo, Ohio, ensure every individual’s unique needs are met, providing a roadmap to sustainable success.",
                },
                {
                  n: "2",
                  t: "Holistic Approach To Weight Management",
                  d: "Our Toledo weight loss clinic focuses on the whole person, addressing both physical and mental aspects of weight management for lasting results.",
                },
                {
                  n: "3",
                  t: "Supportive Community Network",
                  d: "Join a compassionate community with our Toledo weight loss clinic to maintain your success and motivation throughout your weight loss journey.",
                },
                {
                  n: "4",
                  t: "Convenient Local Access",
                  d: "With locations in Toledo, Ohio, accessing our medical weight loss services is easy and convenient for our clients.",
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

        {/* ======================= WEIGHT LOSS INJECTIONS ======================= */}
        <section aria-labelledby="injections-title" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 md:order-1">
              <div aria-hidden className="absolute -inset-2 rounded-2xl bg-teal-500/10" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/weight-loss-injections.jpg"
                  alt="Weight loss injections administered by medical professional"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 id="injections-title" className="text-3xl md:text-4xl font-bold mb-4">
                Weight Loss Injections
              </h2>
              <p className="text-gray-700 mb-6">
                At Reynolds Clinic, we offer innovative weight loss injections as part of our comprehensive medical weight loss program in Toledo, Ohio. These injections boost metabolism and promote fat reduction, supporting your weight loss journey. Administered by medical professionals at our weight loss clinic in Toledo in a safe and controlled environment, each medical weight loss program in Toledo, Ohio is tailored to align with your personal care plan. By integrating weight loss injections within our holistic approach, our weight loss clinic in Toledo provides a powerful tool to help you achieve and maintain your ideal weight.
              </p>
              <ul className="space-y-3">
                {[
                  "Boosts metabolism and aids in fat loss.",
                  "Administered by experienced medical professionals.",
                  "Part of a comprehensive weight management strategy.",
                  "Supports sustainable and healthy weight reduction.",
                  "Customized to complement diet and exercise plans.",
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

        {/* ======================= ORAL + COMPREHENSIVE SERVICES ======================= */}
        <section aria-labelledby="oral-comprehensive-title" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            {/* Oral Medications */}
            <article aria-labelledby="oral-title">
              <h3 id="oral-title" className="text-3xl md:text-4xl font-bold mb-4">
                Oral Weight Loss Medications
              </h3>
              <p className="text-gray-700 mb-6">
                At Reynolds Clinic, we offer oral weight loss medications as part of our comprehensive medical weight loss program in Toledo, Ohio. These medications are designed to aid in weight loss by regulating appetite, increasing feelings of fullness, or interfering with fat absorption. The team of experienced healthcare professionals at our weight loss clinic in Toledo evaluates each individual’s health profile to determine the most suitable medication, ensuring it aligns with your overall health goals. By integrating these medications with our holistic weight management approach, our weight loss clinic in Toledo aims to provide a sustainable and effective solution for achieving and maintaining your ideal weight.
              </p>
              <ul className="space-y-3">
                {[
                  "Prescriptions based on individual health assessments.",
                  "Support appetite control and weight reduction.",
                  "Designed to complement personalized diet and exercise plans.",
                  "Monitored by healthcare professionals for safety and efficacy.",
                  "Part of a holistic strategy for long-term weight management.",
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

            {/* Comprehensive Services */}
            <article aria-labelledby="comprehensive-title">
              <h3 id="comprehensive-title" className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Weight Loss Services
              </h3>
              <p className="text-gray-700 mb-6">
                At Reynolds Clinic, we provide comprehensive medical weight loss programs in Toledo, Ohio, tailored to help you achieve and maintain a healthy lifestyle. The expert team at our weight loss clinic in Toledo offers personalized guidance and evidence-based strategies to support your weight management journey. With a holistic approach, we address nutrition, fitness, and behavioral habits, ensuring sustainable success. Whether you're looking for medical interventions (like weight loss injections), counseling, or ongoing support, our weight loss programs in Toledo are designed to deliver measurable results and empower you every step of the way.
              </p>
              <ul className="space-y-3">
                {[
                  "Customized weight loss plans focused on your needs.",
                  "Medical interventions, including weight loss injections.",
                  "Nutritional counseling for healthy eating habits.",
                  "Fitness and exercise guidance for long-term results.",
                  "Ongoing support and motivation for long-term success.",
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

        {/* ======================= MEDICAL WEIGHT LOSS PROGRAMS ======================= */}
        <section aria-labelledby="medical-programs-title" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-2">
              <h2 id="medical-programs-title" className="text-3xl md:text-4xl font-bold mb-4">
                Medical Weight Loss Programs
              </h2>
              <p className="text-gray-700 mb-6">
                Our medical weight loss programs at Reynolds Clinic are designed for individuals seeking a medically supervised approach to weight management. The experienced healthcare professionals at our weight loss clinic in Toledo conduct comprehensive assessments and develop customized plans tailored to your unique health needs. We use evidence-based practices to provide medical weight loss services in Toledo, including nutritional counseling, exercise guidance, and behavioral therapy. Our medical weight loss programs in Toledo, Ohio, promote healthy lifestyle changes and sustainable results, ensuring that you achieve your weight loss goals safely and effectively. Trust our expertise to guide you on your path to better health.
              </p>
              <ul className="space-y-3">
                {[
                  "Medically supervised weight loss plans.",
                  "Comprehensive health assessments and evaluation.",
                  "Evidence-based practices for effective results.",
                  "Integration of nutrition, exercise, and behavior therapy.",
                  "Focus on sustainable and healthy lifestyle changes.",
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

            <div className="relative order-1 md:order-1">
              <div aria-hidden className="absolute -inset-2 rounded-2xl bg-blue-500/10" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/medical-weight-loss-programs.jpg"
                  alt="Medical weight loss program consultation at Reynolds Clinic"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======================= HOLISTIC WEIGHT MANAGEMENT ======================= */}
        <section aria-labelledby="holistic-title" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="holistic-title" className="text-3xl md:text-4xl font-bold mb-4">
              Holistic Weight Management
            </h2>
            <p className="text-gray-700 mb-6 max-w-5xl">
              Reynolds Clinic offers a holistic weight management approach that addresses the root causes of weight gain while promoting overall well-being. Our medical weight loss programs in Toledo, Ohio, integrate physical, mental, and emotional health to support lasting lifestyle changes. We provide personalized care plans that include nutrition, exercise, mindfulness, and stress management. The team at our weight loss clinic in Toledo aims to help you achieve a balanced and healthy life with dedicated support from our health experts. Join our community to experience guided care from start to success.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <ul className="space-y-3">
                {[
                  "Focus on physical, mental, and emotional health.",
                  "Personalized care plans for holistic well-being.",
                  "Integration of nutrition, exercise, and stress management.",
                  "Dedicated support from a team of health experts.",
                ].map((pt) => (
                  <li key={pt} className="flex items-start text-gray-800">
                    <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  "Achieve lasting weight loss and overall wellness.",
                  "Nutrition counseling for healthy habits.",
                  "Fitness guidance tailored to your goals.",
                  "Ongoing coaching and accountability.",
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
        <section aria-labelledby="cta-title" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-400/95 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <h2 id="cta-title" className="text-3xl font-bold mb-3">
                Ready To Take Control Of Your Health Journey?
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto mb-8">
                Sign up for our newsletter to receive the latest updates, tips, and success stories from Reynolds Clinic. Stay informed about our medical weight loss programs and holistic health services in Toledo, Ohio, and let us support you on your path to a healthier life.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Anchor for hero CTA */}
      <div id="contact" className="sr-only" aria-hidden="true" />
    </div>
  );
}
