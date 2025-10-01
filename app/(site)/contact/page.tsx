"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* --- Replace with your real clinic info (voice/Siri SEO uses this) --- */
const CLINIC_NAME = "Reynolds Clinic";
const PHONE_TEL = "+14195353214";
const PHONE_DISPLAY = "(419) 535-3214";
const EMAIL = "reynoldsclinic@gmail.com";
const ADDRESS = {
  street: "2450 N Reynolds Rd A",
  city: "Toledo",
  state: "OH",
  zip: "43615",
};
const HOURS = {
  weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
  saturday: "Saturday: 9:00 AM – 4:00 PM",
  sunday: "Sunday: Emergency Only",
};

const SERVICES = [
  "Drug Rehabilitation",
  "Weight Management",
  "Men's Health (ED)",
  "Injury Treatment",
  "Hormone Therapy (HRT)",
  "General Consultation",
];

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* ===== Voice & Siri: speakable + business/contact schema ===== */
  const speakableJSON = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact Reynolds Clinic | Toledo, OH",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-summary"],
    },
  };

  const businessJSON = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_NAME,
    url: "https://www.reynoldsclinic.net/contact",
    telephone: PHONE_TEL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: PHONE_TEL,
        email: EMAIL,
        areaServed: "US-OH",
        availableLanguage: ["English"],
      },
    ],
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service || null,
        preferred_time: formData.preferredTime || null,
        message: formData.message || null,
      };

      const res = await fetch(`${API_BASE}/contacts/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 201 || res.status === 204) {
        toast.success("✅ Submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          preferredTime: "",
        });
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 1800);

        return;
      }

      // Handle error response
      let errorMsg = "Something went wrong. Please try again.";
      try {
        const err = await res.json();
        if (err?.detail) {
          if (Array.isArray(err.detail)) {
            // FastAPI validation errors
            errorMsg = err.detail.map((d: any) => d.msg || JSON.stringify(d)).join("\n");
          } else if (typeof err.detail === "string") {
            errorMsg = err.detail;
          }
        }
      } catch {
        /* ignore json parse errors */
      }
      toast.error(`❌ ${errorMsg}`);
    } catch (error) {
      console.error("Contact submit error:", error);
      toast.error("❌ Network error: Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD for voice assistants */}
      <Script id="speakable-jsonld-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJSON) }} />
      <Script id="business-jsonld-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJSON) }} />

      {/* ===== Page Intro (adds top spacing so the form isn't tight to header) ===== */}
      <section className="pt-40 md:pt-28 pb-6 bg-gradient-to-r from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="speakable-headline text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Contact Reynolds Clinic
          </h1>
          <p className="speakable-summary text-gray-700 max-w-3xl mx-auto">
            Questions, appointments, or referrals—reach our Toledo care team by phone, email, or the secure form below. We typically respond within one business day.
          </p>
        </div>
      </section>

      {/* ===== Contact Info & Form ===== */}
      <section className="m-8 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* --- Contact Information --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg grid place-items-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <a href={`tel:${PHONE_TEL}`} className="text-gray-800 block" aria-label={`Call ${CLINIC_NAME} at ${PHONE_DISPLAY}`}>
                      {PHONE_DISPLAY}
                    </a>
                    <p className="text-sm text-gray-600">Call for immediate assistance</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg grid place-items-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-gray-800 block break-all">
                      {EMAIL}
                    </a>
                    <p className="text-sm text-gray-600">We typically reply within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-700 rounded-lg grid place-items-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <address className="not-italic text-gray-800">
                      {ADDRESS.street}
                      <br />
                      {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                    </address>
                    <p className="text-sm text-gray-600">Free parking available</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg grid place-items-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                    <div className="text-gray-800 space-y-1">
                      <p>{HOURS.weekdays}</p>
                      <p>{HOURS.saturday}</p>
                      <p>{HOURS.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Contact Form --- */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send Us A Message</h2>

              {isSubmitted ? (
                <div role="status" aria-live="polite" className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you!</h3>
                  <p className="text-green-700">We’ve received your message. Our team will reach out within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm" aria-label="Contact form">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      inputMode="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="First and last name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        // Allow international or US formats (server validates strictly)
                        pattern="^\+?[0-9\-\s().]{8,20}$"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="(419) 555-1234"
                        aria-describedby="phone-help"
                      />
                      <p id="phone-help" className="text-xs text-gray-500 mt-1">
                        Example: (419) 555-1234
                      </p>
                    </div>
                  </div>

                  {/* Topic & Preferred Contact Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                        Regarding
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Choose a topic</option>
                        {SERVICES.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-2">
                        Preferred Contact Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Select a time window</option>
                        <option value="morning">Morning (8 AM – 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                        <option value="evening">Evening (4 PM – 6 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
                    aria-label="Send message to Reynolds Clinic"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. We’ll get back to you within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map Section ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Visit Our Clinic</h2>
            <p className="text-gray-600">Conveniently located in Toledo with easy access and free parking</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-80 sm:h-96 md:h-[520px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.651181573262!2d-83.6699!3d41.6673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883c7ead6b07cd65%3A0xdc1bcf4f45b138fc!2s2450%20N%20Reynolds%20Rd%20A%2C%20Toledo%2C%20OH%2043615%2C%20USA!5e0!3m2!1sen!2sus!4v1711111111111"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Reynolds Clinic Location"
              />
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPinIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">Easy to Find</h3>
                <p className="text-gray-600 text-sm">Located in the heart of Toledo, Ohio</p>
              </div>
              <div className="text-center">
                <svg className="w-8 h-8 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586l5.121 5.121V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8.5A2.5 2.5 0 006 13.5V16a2 2 0 01-2 2H3"
                  />
                </svg>
                <h3 className="font-semibold text-gray-900 mb-1">Free Parking</h3>
                <p className="text-gray-600 text-sm">Complimentary parking available for all patients</p>
              </div>
              <div className="text-center">
                <svg className="w-8 h-8 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-gray-900 mb-1">Accessible</h3>
                <p className="text-gray-600 text-sm">Wheelchair accessible with elevator access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast container (once per page) */}
      <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    </div>
  );
}
