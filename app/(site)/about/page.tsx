"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function AboutReynoldsClinic() {
  // ---- Contact details (used in schema + CTAs) ----
  const CLINIC_NAME = "Reynolds Clinic";
  const PHONE_TEL = "+14195353214";
  const PHONE_DISPLAY = "(419) 535-3214";
  const ADDRESS = "2450 N Reynolds Rd A, Toledo, OH 43615";

  // ---- Voice / Siri optimization: Speakable JSON-LD ----
  const speakableJSON = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Reynolds Clinic | Empowering Health Journeys",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
  };

  // ---- Business schema ----
  const businessJSON = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_NAME,
    url: "https://www.reynoldsclinic.net/about",
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
    sameAs: [
      "https://www.facebook.com/",
      "https://www.google.com/maps",
      "https://www.yelp.com/",
    ],
  };

  // ---- Founder schema ----
  const founderJSON = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Munir Ahmad",
    jobTitle: "Founder",
    worksFor: { "@type": "Organization", name: CLINIC_NAME },
  };

  // ---- Reviews schema (from testimonial section) ----
  const reviewsJSON = {
    "@context": "https://schema.org",
    "@type": "Product", // Using Product container so multiple Review are valid for SEO snippets
    name: "Reynolds Clinic Services",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "300",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Andy Myers" },
        reviewBody:
          "I came to Reynolds clinic years ago after my life completely fell apart. Dr Ahmed was a life saver. I’m truly grateful.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Cherilyn Stenson" },
        reviewBody:
          "Very friendly and caring staff. They listen to your concerns and are affordable. Highly recommend.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Eric Goncz" },
        reviewBody:
          "Been going there for 10 years. Dr. Ahmed helped me create a better life and stay sober. The staff are awesome.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== JSON-LD for voice/Siri & SEO ===== */}
      <Script
        id="speakable-jsonld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJSON) }}
      />
      <Script
        id="business-jsonld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJSON) }}
      />
      <Script
        id="founder-jsonld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJSON) }}
      />
      <Script
        id="reviews-jsonld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJSON) }}
      />

      {/* ======================= HERO ======================= */}
      <header className="relative overflow-hidden">
        <div className="relative h-[50vh] md:h-[62vh]">
          {/* Background image (doctor chest + stethoscope, like screenshot) */}
          <Image
            src="/doctor.png"
            alt="Reynolds Clinic—compassionate medical team serving Toledo"
            fill
            priority
            className="object-cover"
          />
          {/* Soft gradient from left for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-transparent" />
          {/* Content card */}
          <div className="relative h-full">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl bg-white/5 shadow-xl rounded-xl p-6 sm:p-8">
                <h1 className="speakable-headline text-3xl md:text-5xl font-bold leading-tight mb-4">
                  Reynolds Clinic: Empowering Health Journeys
                </h1>
                <p className="speakable-summary text-base md:text-lg text-gray-700 mb-6">
                  We provide comprehensive, holistic, affordable healthcare
                  solutions in Toledo and surrounding areas—addressing addiction
                  recovery, weight management, and injury rehabilitation. Our
                  personalized care plans focus on sustainable well-being,
                  empowering individuals to achieve lasting health and vitality.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:toledodoc@gmail.com`}
                    className="inline-flex items-center justify-center border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors"
                    aria-label={`Email ${CLINIC_NAME}`}
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ======================= ABOUT (blue headline in screenshot) ======================= */}
      <section aria-labelledby="about-title" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            About Reynolds Clinic
          </h2>
          <p className="text-gray-700 max-w-5xl">
            Founded with a vision to transform healthcare, Reynolds Clinic has
            been at the forefront of compassionate and affordable healthcare
            solutions in Toledo and its surrounding areas. Our journey began
            with a commitment to address the most pressing health challenges
            individuals face while improving their quality of life. Our medical
            clinic team of dedicated health professionals offers personalized
            and empathetic care plans that empower individuals to overcome
            addiction, manage weight, and recover from injuries. By focusing on
            holistic health and the root causes of these challenges, we provide
            sustainable care that improves overall well-being.{" "}
            <span className="font-semibold text-blue-700">
              Contact us today
            </span>{" "}
            to discover how we can support your health journey.
          </p>
        </div>
      </section>

        {/* ======================= OUR MISSION ======================= */}
        <section
          aria-labelledby="mission-title"
          className="bg-[#25272D] text-white py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Icon */}
            <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
              <div className="relative flex items-center justify-center w-40 h-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 120 120"
                  className="w-40 h-40 text-transparent bg-gradient-to-br from-teal-400 to-blue-900 rounded-full p-0.5"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="58"
                    stroke="url(#grad)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="60" cy="60" r="20" stroke="url(#grad)" strokeWidth="2" fill="none" />
                  <circle cx="60" cy="60" r="8" stroke="url(#grad)" strokeWidth="2" fill="none" />
                  <line x1="60" y1="10" x2="60" y2="25" stroke="url(#grad)" strokeWidth="2" />
                  <line x1="60" y1="95" x2="60" y2="110" stroke="url(#grad)" strokeWidth="2" />
                  <line x1="10" y1="60" x2="25" y2="60" stroke="url(#grad)" strokeWidth="2" />
                  <line x1="95" y1="60" x2="110" y2="60" stroke="url(#grad)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="grad" x1="0" x2="120" y1="0" y2="120" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2dd4bf" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left max-w-3xl">
              <h2
                id="mission-title"
                className="text-3xl md:text-4xl font-bold mb-4 tracking-tight speakable-headline"
              >
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-200 speakable-summary leading-relaxed">
                Our mission is to empower health journeys with comprehensive and affordable
                healthcare solutions in Toledo and surrounding areas.
              </p>
            </div>
          </div>
        </section>


      {/* ======================= HEALTH GUIDE CTA ======================= */}
      <section
        aria-labelledby="guide-title"
        className="py-12 md:py-16 bg-[#f5fafc]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="guide-title"
            className="text-2xl md:text-3xl font-bold text-blue-900 mb-3"
          >
            Read Our Comprehensive Health Guide
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Explore the immense value of our affordable healthcare solutions
            guide—designed to empower your health journey with comprehensive
            care insights.
          </p>
          <Link
            href="/guide"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            READ OUR GUIDE NOW
          </Link>
        </div>
      </section>

      {/* ======================= TRANSFORM YOUR HEALTH + TESTIMONIALS ======================= */}
      <section
        aria-labelledby="transform-title"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="transform-title"
            className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-3"
          >
            Transform Your Health In Toledo And Surrounding Areas
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-center mb-10">
            At Reynolds Clinic, we provide personalized holistic health
            solutions tailored to your needs. Serving Toledo and beyond, our
            affordable healthcare solutions support individuals in overcoming
            addiction, managing weight, and recovering from injuries. Our
            experienced medical team empowers you to take control of your health
            journey with compassionate care.
          </p>

          {/* Testimonial cards (3 columns on desktop) */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Molly Dugan */}
            <article className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
              <div className="text-blue-600 text-4xl leading-none mb-3">❝</div>
              <p className="text-gray-800 text-sm leading-relaxed">
                The staff is incredible. I love the nurses. Those gals are so kind, helpful & also silly & funny. They're always so cool to me & enjoyable to be around. Very friendly, comfortable environment. Dr. Ahmed is awesome. He's very easy to talk to, listens & wants to genuinely help. Same with Dr. G. This place has gotten me through so much. I'm very grateful for the care I receive here.
              </p>
              <p className="mt-4 font-semibold text-gray-900">– Molly Dugan</p>
            </article>

            {/* Kelsey Spivey */}
            <article className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
              <div className="text-blue-600 text-4xl leading-none mb-3">❝</div>
              <p className="text-gray-800 text-sm leading-relaxed">
                Doctor Adas is amazing. Probably the best doctor I have ever had. The entire staff is amazing. I went to another doctor for years, and I wish I had switched sooner because Dr. Adas is so much better!! Would recommend 100%
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                – Kelsey Spivey
              </p>
            </article>

            {/*Justin Wansitler */}
            <article className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
              <div className="text-blue-600 text-4xl leading-none mb-3">❝</div>
              <p className="text-gray-800 text-sm leading-relaxed">
                The staff is absolutely wonderful. The doctors are amazing. I have been going here for over nine years and this place and its program saved my life and I am somewhere in life where I never pictured myself making very good money married children house nice vehicle and I don't think it would've been possible without the help of the Reynolds clinic
              </p>
              <p className="mt-4 font-semibold text-gray-900">– Justin Wansitler</p>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
