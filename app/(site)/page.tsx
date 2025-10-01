"use client";

import { useState, useEffect } from "react";
import {
  CheckIcon,
  PhoneIcon,
  CalendarIcon,
  StarIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BoltIcon,
  HeartIcon,
  BeakerIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// --- Clinic constants ---
const SITE_URL = "https://www.reynoldsclinic.net/pages/medical-health-care-solutions-toledo";
const CLINIC_NAME = "Reynolds Clinic";
const CLINIC_PHONE_DISPLAY = "(419) 535-3214";
const CLINIC_PHONE_TEL = "14195353214";
const CLINIC_ADDRESS = "2450 N Reynolds Rd A, Toledo, OH 43615";
const CITY_REGION = "Toledo, OH";

// --- Services ---
const services = [
  {
    id: 1,
    name: "Drug Rehabilitation",
    description: "Outpatient Suboxone clinic offering medication-assisted treatment for opioid addiction with compassionate care.",
    icon: ShieldCheckIcon,
    gradient: "from-blue-50 to-blue-100",
    iconGradient: "from-blue-500 to-blue-600",
    href: "/pages/drug-rehabilitation",
  },
  {
    id: 2,
    name: "Weight Loss Programs",
    description: "Medical weight loss clinic with Semaglutide and GLP-1 plans for sustainable, physician-guided results.",
    icon: ChartBarIcon,
    gradient: "from-teal-50 to-green-100",
    iconGradient: "from-teal-500 to-teal-600",
    href: "/pages/weight-loss-programs",
  },
  {
    id: 3,
    name: "Erectile Dysfunction Treatment",
    description: "Discreet, evidence-based ED treatment options to restore confidence and improve men's wellness.",
    icon: BoltIcon,
    gradient: "from-purple-50 to-pink-100",
    iconGradient: "from-purple-500 to-purple-600",
    href: "/pages/erectile-dysfunction-treatment",
  },
  {
    id: 4,
    name: "Accident Injury Treatment",
    description: "Compassionate care for accident injuries including weight loss, men's health therapy, and injury recovery.",
    icon: HeartIcon,
    gradient: "from-orange-50 to-red-100",
    iconGradient: "from-orange-500 to-orange-600",
    href: "/pages/accident-injury",
  },
  {
    id: 5,
    name: "Hormone Replacement Therapy (HRT)",
    description: "Personalized hormone replacement therapy to restore energy, balance, and quality of life.",
    icon: BeakerIcon,
    gradient: "from-indigo-50 to-sky-100",
    iconGradient: "from-indigo-500 to-indigo-600",
    href: "/pages/hrt-hormone-replacement-therapy",
  },
];

// --- Testimonials ---
const testimonials = [
  {
    id: 1,
    name: "Molly Dugan",
    initials: "MD",
    content: "The staff is incredible. I love the nurses. Those gals are so kind, helpful & also silly & funny. They're always so cool to me & enjoyable to be around. Very friendly, comfortable environment. Dr. Ahmed is awesome. He's very easy to talk to, listens & wants to genuinely help. Same with Dr. G. This place has gotten me through so much. I'm very grateful for the care I receive here.",
    rating: 5,
    gradient: "from-blue-50 to-blue-100",
    avatarGradient: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Kelsey Spivey",
    initials: "KS",
    content: "Doctor Adas is amazing. Probably the best doctor I have ever had. The entire staff is amazing. I went to another doctor for years, and I wish I had switched sooner because Dr. Adas is so much better!! Would recommend 100%",
    rating: 5,
    gradient: "from-teal-50 to-green-100",
    avatarGradient: "from-teal-500 to-teal-600",
  },
  {
    id: 3,
    name: "Justin Wansitler",
    initials: "JW",
    content: "The staff is absolutely wonderful. The doctors are amazing. I have been going here for over nine years and this place and its program saved my life and I am somewhere in life where I never pictured myself making very good money married children house nice vehicle and I don't think it would've been possible without the help of the Reynolds clinic",
    rating: 5,
    gradient: "from-purple-50 to-pink-100",
    avatarGradient: "from-purple-500 to-purple-600",
  },
];

// Star rating component
const StarRating = ({ rating }: any) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
      />
    ))}
  </div>
);

export default function MedicalHealthcareSolutionsToledo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // --- JSON-LD for Voice Search SEO ---
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: CLINIC_NAME,
    url: SITE_URL,
    telephone: `+${CLINIC_PHONE_TEL}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2450 N Reynolds Rd A",
      addressLocality: "Toledo",
      addressRegion: "OH",
      postalCode: "43615",
      addressCountry: "US",
    },
    areaServed: ["Toledo", "Lucas County", "Northwest Ohio"],
    medicalSpecialty: ["SubstanceAbuseTherapy", "WeightLoss", "MensHealth", "Rehabilitation", "Endocrinology"],
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, idx) => ({
      "@type": "Service",
      position: idx + 1,
      name: s.name,
      description: s.description,
      areaServed: CITY_REGION,
      provider: {
        "@type": "MedicalClinic",
        name: CLINIC_NAME,
        telephone: `+${CLINIC_PHONE_TEL}`,
      },
      url: s.href.startsWith("http") ? s.href : `${SITE_URL.replace(/\/$/, "")}${s.href}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What medical solutions do you offer in Toledo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Drug rehab, weight loss programs, erectile dysfunction treatment, accident injury care, and hormone replacement therapy.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Call ${CLINIC_PHONE_DISPLAY} or use the Contact page to request an appointment.`,
        },
      },
      {
        "@type": "Question",
        name: "Is treatment personalized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We tailor each plan to your history, goals, medications, and follow-up needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you treat accident injuries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We assess injuries, treat pain, and coordinate rehabilitation to speed recovery.",
        },
      },
      {
        "@type": "Question",
        name: "Is erectile dysfunction treatment discreet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Visits are private and solutions are evidence-based and personalized.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer medical weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide physician-guided weight loss with coaching and sustainable goals.",
        },
      },
      {
        "@type": "Question",
        name: "What is hormone replacement therapy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HRT adjusts hormone levels to improve energy, focus, mood, and overall wellness.",
        },
      },
      {
        "@type": "Question",
        name: "Where are you located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${CLINIC_ADDRESS}. Call ${CLINIC_PHONE_DISPLAY} for directions or scheduling.`,
        },
      },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Medical & Health Care Solutions in Toledo",
    url: SITE_URL,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
  };

  if (!mounted) {
    return (
      <div className="min-h-screen animate-pulse bg-gradient-to-br from-blue-50 via-white to-teal-50" />
    );
  }

  return (
    <div className="min-h-screen">
      {/* Meta Tags */}
      <head>
        <title>Medical & Health Care Solutions in Toledo | Reynolds Clinic</title>
        <meta
          name="description"
          content="Reynolds Clinic in Toledo offers drug rehabilitation, medical weight loss, ED treatment, accident injury care, and hormone replacement therapy. Call (419) 535-3214."
        />
        <link rel="canonical" href={SITE_URL} />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Medical & Health Care Solutions in Toledo | Reynolds Clinic" />
        <meta
          property="og:description"
          content="Drug rehab, weight loss, ED treatment, accident injury care, and HRT in Toledo. Call (419) 535-3214."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Reynolds Clinic" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
        />
      </head>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
          {/* ===== Full Background Image (sharp) ===== */}
          <div className="absolute inset-0 -z-10">
            <picture>
              {/* Optional: mobile-optimized source */}
              <source media="(max-width: 1023px)" srcSet="/doctor-mobile.png 1x, /doctor-mobile@2x.png 2x" />
              {/* Desktop/high-DPR source */}
              <img
                src="/doctor.png"
                alt="Dr. Ahmed, Reynolds Clinic Toledo"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>

            {/* Soft readability gradient (no blur, very light) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20" />
          </div>

          {/* ===== Decorative Glows (desktop only, no image blur) ===== */}
          <div className="absolute inset-0 overflow-hidden hidden lg:block pointer-events-none" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" />
          </div>

          {/* ===== Content ===== */}
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">

          <div className="lg:hidden mb-8 sm:mb-12">
            <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/doctor.png"
                alt="Dr. Ahmed, Reynolds Clinic Toledo"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
            </div>
          </div>


            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left space-y-6 sm:space-y-8">
                {/* Badge */}
                <div className="speakable-headline inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full text-xs sm:text-sm font-medium text-teal-700">
                  <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                  <span>Serving Toledo patients for decades</span>
                </div>

             {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block mb-2 whitespace-nowrap">Suboxone Treatment</span>
                <span className="block mb-2 whitespace-nowrap">Weight Loss, ED</span>
                <span className="block whitespace-nowrap">
                  Personal Injury Care
                </span>
                <span className="block mt-2 text-xl sm:text-xl md:text-4xl lg:text-3xl whitespace-nowrap">
                  In Toledo, OH
                </span>
              </h1>


                {/* Description */}
                <p className="speakable-summary text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Reynolds Clinic offers expert care in addiction recovery, medical weight loss, erectile dysfunction treatment, as well as personal injury and accident recovery. As one of the earliest and leading outpatient Suboxone clinics in Toledo, we provide personalized and compassionate care plans for men and women across Lucas County and nearby areas.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href={`tel:${CLINIC_PHONE_TEL}`}
                    className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
                    aria-label={`Call ${CLINIC_NAME} at ${CLINIC_PHONE_DISPLAY}`}
                  >
                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    Call {CLINIC_PHONE_DISPLAY}
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-gray-500">Focus</div>
                    <div className="mt-1 text-sm sm:text-base font-semibold text-blue-600">Recovery & Wellness</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-gray-500">Approach</div>
                    <div className="mt-1 text-sm sm:text-base font-semibold text-blue-600">Personalized Plans</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-gray-500">Location</div>
                    <div className="mt-1 text-sm sm:text-base font-semibold text-blue-600">{CITY_REGION}</div>
                  </div>
                </div>
              </div>

              {/* Right column is intentionally empty on desktop to keep layout; background shows through */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

      {/* ABOUT SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Explore Our Addiction, Weight Loss, and ED treatment options.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-50 max-w-4xl mx-auto leading-relaxed px-4">
              Learn about Suboxone treatment, medical weight loss programs, hormone replacement therapy (HRT), and erectile dysfunction (ED) treatment in Toledo. Our comprehensive guide helps men and women navigate their healthcare options with expert support and real solutions. 
            </p>
            <a
              href="/pages/about"
              className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Read Our Guide Now
            </a>
          </div>
        </div>
      </section>

      {/* OUTPATIENT SUBOXONE SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Outpatient Suboxone Clinic In Toledo For The Treatment Of Substance Use Disorders Such As Opioid Addiction
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Reynolds Clinic specializes in medication-assisted treatment (MAT) using Suboxone (buprenorphine/naloxone) to support long-term opioid recovery. As a certified Suboxone clinic in Toledo, we provide flexible, evidence-based addiction treatment that meets SAMHSA standards and supports lasting sobriety without restrictive barriers.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100" />
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL WEIGHT LOSS SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-green-100" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Medical Weight Loss Clinic In Toledo, OH – Semaglutide & GLP-1 Plans
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our medical weight loss programs feature physician-supervised treatment using proven medications like Semaglutide and other GLP-1 options. We create personalized weight loss plans that combine medication management with nutritional counseling and lifestyle coaching. Our approach helps you lose weight safely and sustainably with ongoing medical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE CARE SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight px-4">
              Compassionate Care For Addiction, Weight Loss, Men's Health Therapy, ED & Injury Recovery
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              At Reynolds Clinic, we believe in patient-first care. Our experienced team provides supportive services in substance use disorder for opioid or other addiction treatments such as Suboxone and medication-assisted treatment (MAT) plans. In addition, we offer Semaglutide & GLP-1s for medical weight loss, hormone replacement therapy (HRT), and ED treatment in Toledo. Discover how our personalized healthcare services can improve your well-being and restore your quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
              Evidence-based medical care for addiction recovery, weight loss, men's health, injury rehabilitation, and hormone balance—right here in Toledo.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={s.href}
                className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${s.gradient} border border-gray-100`}
                aria-label={`${s.name} in Toledo`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${s.iconGradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {s.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                  {s.description}
                </p>
                <span className="text-blue-700 font-medium transition-colors text-sm inline-flex items-center">
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-12 lg:mb-16">
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              <h2 id="testimonials" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Testimonials
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At Reynolds Clinic, your well-being is our number one priority. Don't just take our word for it—see what our loyal patients have to say! We are proud of the results we achieve, and we've built some fantastic relationships along the way. Read about some of the experiences our patients have had during their visits to Reynolds Clinic. We look forward to assisting you on your road to a happier, healthier life!
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center p-6 sm:p-8">
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                    WHAT OUR CLIENTS SAY
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${t.gradient} border border-gray-100`}
              >
                <div className="flex items-center mb-4 gap-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${t.avatarGradient} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-base sm:text-lg">{t.initials}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 truncate text-sm sm:text-base">{t.name}</h4>
                    <StarRating rating={t.rating} />
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed line-clamp-6">
                  "{t.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH INSIGHTS NEWSLETTER */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Stay Informed With Our Health Insights!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
            Subscribe to our newsletter and receive the latest updates on affordable healthcare solutions, quality FDA-approved medications, and expert pharmacy service. Stay ahead with personalized health advice and convenient pharmacy hours tailored to your needs.
          </p>
        </div>
      </section>

      {/* TRUST BADGE SECTION */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-4">
            Visit our medical clinic in Toledo. We offer affordable and friendly healthcare practices for men and women to overcome drug addiction, manage weight effectively and more.
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-full p-4 sm:p-6 shadow-xl">
              <ShieldCheckIcon className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="faqs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faqs" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
            FAQs: Quick Answers
          </h2>
          <ul className="space-y-4 sm:space-y-6">
            {[
              ["What services do you offer?", "Drug rehab, weight loss, ED treatment, accident injury care, and HRT."],
              ["How can I book?", `Call ${CLINIC_PHONE_DISPLAY} or use the Contact page.`],
              ["Are plans personalized?", "Yes. Your plan is based on goals, history, and medications."],
              ["Do you treat injuries?", "Yes. We assess, treat, and guide rehabilitation."],
              ["Is ED treatment private?", "Yes. Discreet, evidence-based care."],
              ["Do you offer medical weight loss?", "Yes. Physician-guided with sustainable targets."],
              ["What is HRT?", "Therapy to optimize hormone levels for energy, focus, and mood."],
              ["Where are you located?", `${CLINIC_ADDRESS}.`],
            ].map(([q, a], i) => (
              <li key={i} className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">{q}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{a}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
              aria-label="Get directions on Google Maps"
            >
              <span className="mr-2">📍</span> Get Directions
            </a>
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER INFO BAR */}
      <footer className="py-6 sm:py-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">About Us</h3>
              <p className="text-xs sm:text-sm">Leading medical clinic in Toledo for addiction recovery and wellness.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Services</h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>Drug Rehabilitation</li>
                <li>Weight Loss</li>
                <li>ED Treatment</li>
                <li>HRT Therapy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Contact Us</h3>
              <p className="text-xs sm:text-sm mb-1">{CLINIC_ADDRESS}</p>
              <a href={`tel:${CLINIC_PHONE_TEL}`} className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm">
                {CLINIC_PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Stay Connected</h3>
              <p className="text-xs sm:text-sm mb-2">Sign up now and stay ahead of the curve</p>
              <a
                href="/subscribe"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Join Our Mailing List
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}