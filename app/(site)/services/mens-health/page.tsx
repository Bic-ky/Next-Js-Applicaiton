"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function ErectileDysfunction() {
  const CLINIC_NAME = "Reynolds Clinic";
  const PHONE_TEL = "+14195353214";
  const PHONE_DISPLAY = "(419) 535-3214";
  const ADDRESS = "2450 N Reynolds Rd A, Toledo, OH 43615";

  // Voice assistants: hero headline + summary are speakable
  const speakableJSON = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Erectile Dysfunction Treatment in Toledo, OH | Restore Confidence",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
  };

  // Business/entity schema tuned for ED service (Urology)
  const businessJSON = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_NAME,
    medicalSpecialty: "Urology",
    url: "https://www.reynoldsclinic.net/services/erectile-dysfunction",
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
        id="speakable-jsonld-ed"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJSON) }}
      />
      <Script
        id="business-jsonld-ed"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJSON) }}
      />

      {/* ======================= HERO ======================= */}
      <header className="relative overflow-hidden">
        <div className="relative h-[56vh] md:h-[68vh]">
          {/* Replace with your asset:
             e.g. /images/ed-hero.jpg  or the exact uploaded filename path you use in your app */}
          <Image
            src="/doctor.png"
            alt="Consultation for erectile dysfunction treatment at Reynolds Clinic, Toledo"
            fill
            priority
            className="object-cover"
          />
          {/* Readability overlay (left bias) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-transparent" />

          {/* Content card (mirrors your style) */}
          <div className="relative h-full">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl bg-white/5 shadow-xl rounded-xl p-6 sm:p-8">
                <h1 className="speakable-headline text-3xl md:text-5xl font-bold leading-tight mb-4">
                  Erectile Dysfunction Treatment In Toledo | Restore Confidence
                </h1>
                <p className="speakable-summary text-base md:text-lg text-gray-700 mb-6">
                  Discover our specialized erectile dysfunction treatment services
                  in Toledo and beyond. Our expert team provides holistic ED therapy
                  solutions tailored to your unique needs, helping you regain
                  confidence and improve your quality of life. With personalized care
                  and advanced erectile dysfunction treatment options for men, we are
                  committed to supporting your journey to better sexual health.
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
                <p className="sr-only">
                  Contact us now to schedule your consultation and take the first
                  step toward restored health.
                </p>
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
                  t: "Personalized ED Treatment Plans",
                  d: "Our tailored erectile dysfunction treatment approach ensures client-specific individualized therapy plans that address unique needs.",
                },
                {
                  n: "2",
                  t: "Comprehensive Care Approach",
                  d: "We offer holistic erectile dysfunction treatment options for men that focus on overall well-being, not just symptoms.",
                },
                {
                  n: "3",
                  t: "Experienced Health Professionals",
                  d: "Benefit from the expertise of our seasoned professionals dedicated to providing effective erectile dysfunction treatment for men.",
                },
                {
                  n: "4",
                  t: "Confidential And Supportive Environment",
                  d: "Our clinic provides a private and empathetic setting where you can feel comfortable discussing your health concerns.",
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

        {/* ======================= CUSTOMIZED ED THERAPIES ======================= */}
        <section
          aria-labelledby="customized-ed-title"
          className="py-16 md:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            {/* Image (left on md+) */}
            <div className="relative">
              <div aria-hidden className="absolute -inset-2 rounded-2xl bg-teal-500/10" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Replace with your asset e.g. /images/ed-therapy-consult.jpg */}
                <Image
                  src="/images/ed-therapy-consult.jpg"
                  alt="Customized ED therapies consultation at Reynolds Clinic"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 id="customized-ed-title" className="text-3xl md:text-4xl font-bold mb-4">
                Customized ED Therapies
              </h2>
              <p className="text-gray-700 mb-6">
                We provide customized erectile dysfunction therapy tailored to meet
                your needs, starting with comprehensive health and lifestyle
                assessments. Our team develops a personalized ED treatment plan that
                is both effective and sustainable—combining traditional and holistic
                approaches to enhance sexual health and overall quality of life.
              </p>
              <ul className="space-y-3">
                {[
                  "Tailored treatment plans based on individual health assessments.",
                  "Combination of traditional and holistic approaches for comprehensive care.",
                  "Focus on long-term health and sustainable, high-quality results.",
                  "Continuous support and adjustments to treatment as needed.",
                  "Confidential consultations to ensure privacy and comfort.",
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

        {/* ======================= COMPREHENSIVE & NON-INVASIVE ======================= */}
        <section
          aria-labelledby="comprehensive-noninvasive-title"
          className="py-16 md:py-24 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            {/* Comprehensive ED Treatment */}
            <article aria-labelledby="comprehensive-title">
              <h3 id="comprehensive-title" className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Erectile Dysfunction Treatment
              </h3>
              <p className="text-gray-700 mb-6">
                Our ED treatment services are designed to address root causes while
                promoting long-term sexual health and vitality. We take a holistic
                approach, incorporating medical expertise, lifestyle adjustments, and
                advanced therapies to deliver effective and sustainable results for men.
              </p>
              <ul className="space-y-3">
                {[
                  "Comprehensive assessments to identify underlying causes.",
                  "Personalized treatment plans tailored to individual health needs.",
                  "Cutting-edge therapies for improved performance and confidence.",
                  "Ongoing support from specialists to track progress and adjustments.",
                  "Holistic strategies that enhance overall well-being and vitality.",
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

            {/* Non-Invasive Options */}
            <article aria-labelledby="noninvasive-title">
              <h3 id="noninvasive-title" className="text-3xl md:text-4xl font-bold mb-4">
                Non-Invasive Treatment Options
              </h3>
              <p className="text-gray-700 mb-6">
                For those seeking non-invasive ED treatments, we combine safe and
                effective solutions designed to enhance sexual health without surgery
                or medication. Our modern, minimally-discomfort therapies maximize
                results while preserving comfort and convenience.
              </p>
              <ul className="space-y-3">
                {[
                  "Minimal discomfort with maximum results—no surgery or medication.",
                  "Innovative therapies tailored to individual needs.",
                  "Focus on enhancing quality of life and confidence.",
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

        {/* ======================= HOLISTIC ED TREATMENT ======================= */}
        <section aria-labelledby="holistic-ed-title" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            {/* Image (left) */}
            <div className="relative">
              <div aria-hidden className="absolute -inset-2 rounded-2xl bg-blue-500/10" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Replace with your asset e.g. /images/ed-holistic.jpg */}
                <Image
                  src="/images/ed-holistic.jpg"
                  alt="Holistic erectile dysfunction treatment—integrated care plan"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content (right) */}
            <div>
              <h2 id="holistic-ed-title" className="text-3xl md:text-4xl font-bold mb-4">
                Holistic Erectile Dysfunction Treatment
              </h2>
              <p className="text-gray-700 mb-6">
                Our holistic ED treatment focuses on addressing root causes rather
                than just symptoms. By considering the whole person, we provide
                comprehensive solutions that integrate physical, emotional, and
                psychological health to promote overall well-being and sexual vitality.
              </p>
              <ul className="space-y-3">
                {[
                  "Focus on treating the root causes of erectile dysfunction.",
                  "Integrative approach combining physical, emotional, and psychological care.",
                  "Comprehensive solutions for long-lasting health benefits.",
                  "Balanced treatment plans tailored to individual needs.",
                  "Promotion of overall well-being and improved sexual health.",
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

        {/* ======================= THERAPY FOR ED ======================= */}
        <section aria-labelledby="therapy-ed-title" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="therapy-ed-title" className="text-3xl md:text-4xl font-bold mb-4">
              Therapy For Erectile Dysfunction
            </h2>
            <p className="text-gray-700 mb-6 max-w-5xl">
              We offer specialized therapy sessions for erectile dysfunction, giving
              clients access to a range of effective therapeutic options. Our sessions
              take a holistic approach, addressing both the physical and psychological
              factors that contribute to ED.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <ul className="space-y-3">
                {[
                  "Addressing both physical and psychological aspects of ED.",
                  "Holistic approach to enhance intimacy and sexual health.",
                  "Compassionate and understanding therapists dedicated to client success.",
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
                  "Collaborative, personalized strategies to support progress.",
                  "Clear, supportive guidance to improve outcomes.",
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
        <section aria-labelledby="newsletter-title" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-700/95 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <h2 id="newsletter-title" className="text-3xl font-bold mb-3">
                Stay Informed And Empowered On Your Health Journey By Subscribing To Our Newsletter.
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto mb-8">
                Join the Reynolds Clinic community for exclusive insights and updates on erectile dysfunction treatment options for men.
                Our newsletter offers valuable information and expert advice to help you make informed decisions about your health.
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
