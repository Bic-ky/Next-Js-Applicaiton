"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
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
} from "@heroicons/react/24/outline";

// --- Clinic constants (edit if needed) ---
const SITE_URL =
  "https://www.reynoldsclinic.net/pages/medical-health-care-solutions-toledo";
const CLINIC_NAME = "Reynolds Clinic";
const CLINIC_PHONE_DISPLAY = "(419) 535-3214";
const CLINIC_PHONE_TEL = "14195353214";
const CLINIC_ADDRESS = "2450 N Reynolds Rd A, Toledo, OH 43615";
const CITY_REGION = "Toledo, OH";

// --- Services aligned to Solutions page ---
const services = [
  {
    id: 1,
    name: "Drug Rehabilitation",
    description:
      "Compassionate, structured programs that help you stop, stabilize, and maintain long-term recovery.",
    icon: ShieldCheckIcon,
    gradient: "from-blue-50 to-blue-100",
    iconGradient: "from-blue-500 to-blue-600",
    href: "/pages/drug-rehabilitation",
  },
  {
    id: 2,
    name: "Weight Loss Programs",
    description:
      "Medical weight management with realistic goals, ongoing coaching, and sustainable results.",
    icon: ChartBarIcon,
    gradient: "from-teal-50 to-green-100",
    iconGradient: "from-teal-500 to-teal-600",
    href: "/pages/weight-loss-programs",
  },
  {
    id: 3,
    name: "Erectile Dysfunction Treatment",
    description:
      "Discreet, evidence-based options to improve performance, confidence, and overall wellness.",
    icon: BoltIcon,
    gradient: "from-purple-50 to-pink-100",
    iconGradient: "from-purple-500 to-purple-600",
    href: "/pages/erectile-dysfunction-treatment",
  },
  {
    id: 4,
    name: "Accident Injury Treatment",
    description:
      "Get assessed, treated, and guided through recovery after car, workplace, or sports injuries.",
    icon: HeartIcon,
    gradient: "from-orange-50 to-red-100",
    iconGradient: "from-orange-500 to-orange-600",
    href: "/pages/accident-injury",
  },
  {
    id: 5,
    name: "Hormone Replacement Therapy (HRT)",
    description:
      "Personalized hormone plans to restore balance, energy, focus, and quality of life.",
    icon: BeakerIcon,
    gradient: "from-indigo-50 to-sky-100",
    iconGradient: "from-indigo-500 to-indigo-600",
    href: "/pages/hrt-hormone-replacement-therapy",
  },
];

// Testimonials (short—voice-friendly)
const testimonials = [
  {
    id: 1,
    name: "Molly Dugan",
    initials: "MD",
    content:
      "The staff is incredible. I love the nurses. Those gals are so kind, helpful & also silly & funny. They're always so cool to me & enjoyable to be around. Very friendly, comfortable environment. Dr. Ahmed is awesome. He's very easy to talk to, listens & wants to genuinely help. Same with Dr. G. This place has gotten me through so much. I'm very grateful for the care I receive here.",
    rating: 5,
    gradient: "from-blue-50 to-blue-100",
    avatarGradient: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Kelsey Spivey",
    initials: "KS",
    content:
      "Doctor Adas is amazing. Probably the best doctor I have ever had. The entire staff is amazing. I went to another doctor for years, and I wish I had switched sooner because Dr. Adas is so much better!! Would recommend 100%",
    rating: 5,
    gradient: "from-teal-50 to-green-100",
    avatarGradient: "from-teal-500 to-teal-600",
  },
  {
    id: 3,
    name: "Justin Wansitler",
    initials: "JW",
    content:
      "The staff is absolutely wonderful. The doctors are amazing. I have been going here for over nine years and this place and its program saved my life and I am somewhere in life where I never pictured myself making very good money married children house nice vehicle and I don’t think it would’ve been possible without the help of the Reynolds clinic",
    rating: 5,
    gradient: "from-purple-50 to-pink-100",
    avatarGradient: "from-purple-500 to-purple-600",
  },
];

// Small star component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
      />
    ))}
  </div>
);

export default function MedicalHealthcareSolutionsToledo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // --- JSON-LD blocks for SEO/Voice ---
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
    sameAs: [
      "https://www.facebook.com/",
      "https://www.google.com/maps", // replace with your actual profiles if available
    ],
    medicalSpecialty: [
      "SubstanceAbuseTherapy",
      "WeightLoss",
      "MensHealth",
      "Rehabilitation",
      "Endocrinology",
    ],
    openingHoursSpecification: [
      // Fill if you want hours to appear in knowledge panels
      // { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '17:00' },
    ],
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
      url: s.href.startsWith("http")
        ? s.href
        : `${SITE_URL.replace(/\/$/, "")}${s.href}`,
    })),
  };

  // Voice-friendly FAQ: short, direct answers (<25 words)
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

  // Speakable (Google beta; still helpful as a hint)
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
      <div className="min-h-screen animate-pulse">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>
          Medical & Health Care Solutions in Toledo | Reynolds Clinic
        </title>
        <meta
          name="description"
          content="Reynolds Clinic in Toledo offers drug rehabilitation, medical weight loss, ED treatment, accident injury care, and hormone replacement therapy. Call (419) 535-3214."
        />
        <link rel="canonical" href={SITE_URL} />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        {/* OG / Twitter */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Medical & Health Care Solutions in Toledo | Reynolds Clinic"
        />
        <meta
          property="og:description"
          content="Drug rehab, weight loss, ED treatment, accident injury care, and HRT in Toledo. Call (419) 535-3214."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Reynolds Clinic" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
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
      </Head>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        <div
          className="absolute inset-0 overflow-hidden hidden lg:block"
          aria-hidden="true"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl" />
          <div className="relative w-full h-full">
            <Image
              src="/doctor.png"
              alt="Toledo medical clinic team"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 0vw"
              className="object-contain object-right"
            />
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="lg:hidden mb-8">
            <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] sm:aspect-[16/9]">
              <Image
                src="/doctor.png"
                alt="Toledo medical clinic team"
                fill
                sizes="(max-width: 1023px) 100vw, 0vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="speakable-headline inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full text-sm font-medium text-teal-700 mb-6">
                <CheckIcon className="w-4 h-4 mr-2" />
                Serving Toledo patients for decades
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Medical & Health Care
                <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Solutions in Toledo
                </span>
              </h1>

              <p className="speakable-summary text-lg sm:text-xl text-gray-700 mb-8">
                Reynolds Clinic offers expert care in addiction recovery,
                medical weight loss, erectile dysfunction treatment, as well as
                personal injury and accident recovery. As one of the earliest
                and leading outpatient Suboxone clinics in Toledo, we provide
                personalized and compassionate care plans for men and women
                across Lucas County and nearby areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <a
                  href={`tel:${CLINIC_PHONE_TEL}`}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                  aria-label={`Call ${CLINIC_NAME} at ${CLINIC_PHONE_DISPLAY}`}
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call {CLINIC_PHONE_DISPLAY}
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Focus</div>
                  <div className="mt-1 font-semibold text-blue-600">
                    Recovery & Wellness
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Approach</div>
                  <div className="mt-1 font-semibold text-blue-600">
                    Personalized Plans
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="mt-1 font-semibold text-blue-600">
                    {CITY_REGION}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Evidence-based care for addiction recovery, weight loss, men’s
              health, injury rehabilitation, and hormone balance—right here in
              Toledo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={s.href}
                className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${s.gradient} border border-gray-100`}
                aria-label={`${s.name} in Toledo`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${s.iconGradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {s.name}
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {s.description}
                </p>
                <span className="text-blue-700 font-medium transition-colors text-sm inline-flex items-center">
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        aria-labelledby="testimonials"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="testimonials"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center"
          >
            Patient{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Short, real experiences—easy for voice assistants to summarize.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${t.gradient} border border-gray-100`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${t.avatarGradient} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-lg">
                      {t.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">
                      {t.name}
                    </h4>
                    <StarRating rating={t.rating} />
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "{t.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice-optimized FAQs */}
      <section className="py-16 bg-white" aria-labelledby="faqs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faqs" className="text-2xl font-bold text-gray-900 mb-6">
            FAQs: quick answers
          </h2>
          <ul className="space-y-4">
            {[
              [
                "What services do you offer?",
                "Drug rehab, weight loss, ED treatment, accident injury care, and HRT.",
              ],
              [
                "How can I book?",
                `Call ${CLINIC_PHONE_DISPLAY} or use the Contact page.`,
              ],
              [
                "Are plans personalized?",
                "Yes. Your plan is based on goals, history, and medications.",
              ],
              [
                "Do you treat injuries?",
                "Yes. We assess, treat, and guide rehabilitation.",
              ],
              [
                "Is ED treatment private?",
                "Yes. Discreet, evidence-based care.",
              ],
              [
                "Do you offer medical weight loss?",
                "Yes. Physician-guided with sustainable targets.",
              ],
              [
                "What is HRT?",
                "Therapy to optimize hormone levels for energy, focus, and mood.",
              ],
              ["Where are you located?", `${CLINIC_ADDRESS}.`],
            ].map(([q, a], i) => (
              <li key={i} className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900">{q}</h3>
                <p className="text-gray-700">{a}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                CLINIC_ADDRESS
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              aria-label="Get directions on Google Maps"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to feel better?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Call now or message us. We’ll help you choose the right plan and get
            started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call {CLINIC_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
