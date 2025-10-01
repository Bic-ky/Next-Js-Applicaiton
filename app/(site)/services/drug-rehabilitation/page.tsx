"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function DrugRehabilitation() {
  const CLINIC_NAME = "Reynolds Clinic";
  const PHONE_TEL = "+14195353214";
  const PHONE_DISPLAY = "(419) 535-3214";
  const ADDRESS = "2450 N Reynolds Rd A, Toledo, OH 43615";

  const speakableJSON = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Comprehensive Drug Rehabilitation Services in Toledo, OH",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
  };

  const businessJSON = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_NAME,
    medicalSpecialty: "AddictionTreatment",
    url: "https://www.reynoldsclinic.net/services/drug-rehabilitation",
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
        id="speakable-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJSON) }}
      />
      <Script
        id="business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJSON) }}
      />

      {/* ======================= HERO ======================= */}
      <header className="relative overflow-hidden">
        <div className="relative h-[56vh] md:h-[68vh]">
          {/* Background image */}
          <Image
            src="/doctor.png"
            alt="Supportive group therapy session at Reynolds Clinic in Toledo, Ohio"
            fill
            priority
            className="object-cover"
          />
          {/* Light gradient wash for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-transparent" />
          {/* Content */}
          <div className="relative h-full">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl bg-white/5 shadow-xl rounded-xl p-6 sm:p-8">
                <h1 className="speakable-headline text-3xl md:text-5xl font-bold leading-tight mb-4">
                  Comprehensive Drug Rehabilitation Services In Toledo, OH
                </h1>
                <p className="speakable-summary text-base md:text-lg text-gray-700 mb-6">
                  Explore compassionate and supportive drug recovery treatment
                  services at Reynolds Clinic, serving Toledo and surrounding
                  areas. Our holistic approach to drug addiction and
                  individualized treatment plans are designed to empower your
                  recovery journey and promote lasting wellness.{" "}
                  <span className="sr-only">
                    Contact our Toledo drug rehab center today to take the first
                    step toward a healthier, addiction-free life.
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
<section
  aria-labelledby="pillars-title"
  className="py-12 md:py-16 bg-white"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 id="pillars-title" className="sr-only">
      Why Choose Our Drug Rehabilitation Care
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          n: "1",
          t: "Personalized Treatment Plans",
          d: "Benefit from customized treatment strategies tailored to your unique drug recovery needs, ensuring effective and sustainable results.",
        },
        {
          n: "2",
          t: "Holistic Health Approach",
          d: "Experience comprehensive drug addiction recovery treatment that addresses the root causes of substance abuse, promoting overall well-being.",
        },
        {
          n: "3",
          t: "Supportive And Confidential Environment",
          d: "Recover in a safe, empathetic setting where privacy is respected, fostering trust and confidence in your drug addiction recovery treatment journey.",
        },
        {
          n: "4",
          t: "Experienced Professional Team",
          d: "Receive guidance from our skilled Toledo drug rehab center experts, who are dedicated to empowering you with the tools and support needed for successful addiction recovery.",
        },
      ].map((item) => (
        <article
          key={item.n}
          className="bg-gray-50 rounded-lg p-6 flex items-start gap-4"
        >
          {/* Circular number with border */}
          <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-blue-400 text-blue-500 text-2xl font-light flex-shrink-0">
            {item.n}
          </div>

          {/* Text */}
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
   {/* ======================= OUTPATIENT SECTION ======================= */}
        <section
          aria-labelledby="outpatient-title"
          className="py-16 md:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            {/* Image left */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-2xl bg-teal-500/10"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/outpatient-drug-rehab-toledo.jpg"
                  alt="Outpatient drug rehabilitation—patient with supportive care at Reynolds Clinic"
                  width={900}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content right */}
            <div>
              <h2
                id="outpatient-title"
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Outpatient Drug Rehabilitation
              </h2>
              <p className="text-gray-700 mb-6">
                Our outpatient drug rehabilitation services provide flexible
                drug recovery treatment options, allowing you to maintain daily
                responsibilities while receiving the care and support you need.
                Conveniently located in Toledo and serving surrounding areas,
                our drug rehab center programs are designed to fit your
                schedule, offering therapeutic interventions and personalized
                support tailored to your drug addiction treatment journey. With
                a focus on holistic rehabilitation, our Toledo drug rehab center
                creates customized drug addiction treatment plans to address
                your unique challenges, promoting sustainable recovery and a
                healthier lifestyle.
              </p>
              <ul className="space-y-3">
                {[
                  "Flexible scheduling to accommodate daily commitments.",
                  "Personalized therapeutic interventions.",
                  "Focus on holistic recovery and well-being.",
                  "Supportive community and network for recovery.",
                  "Experienced professionals guiding your journey.",
                ].map((point) => (
                  <li key={point} className="flex items-start text-gray-800">
                    <svg
                      className="w-5 h-5 mt-1 mr-3 text-teal-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ======================= AFTERCARE & HOLISTIC ======================= */}
        <section
          aria-labelledby="aftercare-holistic-title"
          className="py-16 md:py-24 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="aftercare-holistic-title" className="sr-only">
              Aftercare Support and Holistic Drug Rehabilitation Services
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Aftercare */}
              <article aria-labelledby="aftercare-title">
                <h3
                  id="aftercare-title"
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Aftercare Support And Relapse Prevention
                </h3>
                <p className="text-gray-700 mb-6">
                  At Reynolds Clinic, we provide comprehensive aftercare support
                  and relapse prevention services to ensure your continued
                  success in recovery. The aftercare programs at our Toledo drug
                  rehab center include personalized relapse prevention
                  strategies designed to help you maintain sobriety. We are
                  committed to fostering a supportive community and offering
                  resources that empower you to achieve your long-term health
                  goals after drug addiction and recovery treatment. By choosing
                  our aftercare services, you gain access to a network of
                  support that helps you thrive in your recovery journey.
                </p>
                <ul className="space-y-3">
                  {[
                    "Personalized relapse prevention strategies.",
                    "Supportive community for continued recovery.",
                    "Resources to maintain sobriety and health goals.",
                    "Access to a network of support and empowerment.",
                  ].map((point) => (
                    <li key={point} className="flex items-start text-gray-800">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Holistic */}
              <article aria-labelledby="holistic-title">
                <h3
                  id="holistic-title"
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Holistic Drug Rehabilitation Services
                </h3>
                <p className="text-gray-700 mb-6">
                  At Reynolds Clinic, we take a holistic treatment approach to
                  drug rehabilitation, addressing not just the symptoms but the
                  root causes of addiction. The drug addiction recovery
                  treatment programs at our Toledo rehab center integrate
                  nutritional counseling, mindfulness practices, and alternative
                  therapies to support your physical, mental, and emotional
                  well-being. Serving Toledo and nearby areas, we offer
                  comprehensive drug addiction treatment for recovery,
                  empowering individuals to achieve lasting health, balance, and
                  a renewed sense of well-being.
                </p>
                <ul className="space-y-3">
                  {[
                    "Incorporation of alternative therapies for holistic healing.",
                    "Focus on physical, mental, and emotional well-being.",
                    "Nutritional counseling to support recovery.",
                    "Mindfulness practices for stress management.",
                    "Comprehensive path to lasting health and balance.",
                  ].map((point) => (
                    <li key={point} className="flex items-start text-gray-800">
                      <svg
                        className="w-5 h-5 mt-1 mr-3 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ======================= NEWSLETTER CTA ======================= */}
        <section
          aria-labelledby="newsletter-title"
          className="py-16 md:py-24 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-400/95 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <h2 id="newsletter-title" className="text-3xl font-bold mb-3">
                Join Our Community And Stay Informed On The Latest In Addiction
                Recovery.
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto mb-8">
                Subscribe to the Reynolds Clinic newsletter for updates on our
                drug addiction and recovery treatment services and holistic
                health tips. Stay connected with us for exclusive insights and
                support in your recovery journey.
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
