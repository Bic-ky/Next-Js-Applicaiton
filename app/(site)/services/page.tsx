'use client'

import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Award, Shield, Heart, Activity, Users, CheckCircle, ChevronRight, Plus, Minus } from 'lucide-react';
import { 
  HeartIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  VideoCameraIcon,
  UserIcon,
  StarIcon,
  CheckIcon,
  ClockIcon,
  CalendarIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image';

const Services = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const services = [
    {
      id: 'drug-rehabilitation',
      title: 'Drug Rehabilitation',
      subtitle: 'Addiction Recovery Programs',
      description: 'Comprehensive addiction treatment with medical detox, therapy, and long-term support for lasting recovery.',
      image: '🏥',
      features: ['Medical Detox', 'Individual Therapy', 'Group Support', 'Aftercare Planning'],
      icon: Shield,
      color: 'blue'
    },
    {
      id: 'weight-loss',
      title: 'Weight Management',
      subtitle: 'Medical Weight Loss',
      description: 'Physician-supervised programs with FDA-approved medications and personalized nutrition plans.',
      image: '⚖️',
      features: ['Metabolic Testing', 'Medication Options', 'Nutrition Plans', 'Progress Monitoring'],
      icon: Activity,
      color: 'green'
    },
    {
      id: 'mens-health',
      title: "Men's Health",
      subtitle: 'Erectile Dysfunction Treatment',
      description: 'Confidential ED treatment and comprehensive men\'s wellness care for optimal health.',
      image: '💪',
      features: ['ED Evaluation', 'Oral Medications', 'Hormone Testing', 'Lifestyle Guidance'],
      icon: Heart,
      color: 'red'
    },
    {
      id: 'injury-treatment',
      title: 'Injury Treatment',
      subtitle: 'Accident & Pain Management',
      description: 'Expert care for auto accidents, workplace injuries, and comprehensive pain management.',
      image: '🩹',
      features: ['Emergency Care', 'Pain Management', 'Rehabilitation', 'Legal Documentation'],
      icon: Users,
      color: 'purple'
    },
    {
      id: 'hormone-therapy',
      title: 'Hormone Therapy',
      subtitle: 'Bioidentical HRT',
      description: 'Balance hormones naturally with bioidentical replacement therapy for men and women.',
      image: '🧬',
      features: ['Hormone Testing', 'Bioidentical Options', 'Custom Protocols', 'Anti-Aging Benefits'],
      icon: Award,
      color: 'indigo'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: '📅' },
    { number: '5,000+', label: 'Patients Treated', icon: '👥' },
    { number: '95%', label: 'Satisfaction Rate', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🕐' }
  ];

  const faqs = [
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Medicare, Medicaid, and private insurance. Contact us to verify your coverage.'
    },
    {
      question: 'How long do treatments typically take?',
      answer: 'Treatment duration varies by service. Drug rehab programs range 30-90 days, while other treatments have personalized timelines.'
    },
    {
      question: 'Do you offer telehealth consultations?',
      answer: 'Yes, we provide telehealth services for consultations, follow-ups, and certain monitoring appointments.'
    },
    {
      question: 'What should I expect at my first visit?',
      answer: 'Your initial visit includes medical history review, examination, any needed tests, and personalized treatment planning.'
    }
  ];

  const toggleFaq = (index : any) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
<section
  id="about"
  className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden"
>
  {/* Background Elements & BG Image (desktop/tablet only) */}
<div className="absolute inset-0 overflow-hidden hidden lg:block" aria-hidden="true">
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-primary-200/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

  {/* Desktop background image */}
  <div className="relative w-full h-screen">
    <Image
      src="/about.png"
      alt="A professional doctor"
      fill
      priority
      sizes="(min-width:1024px) 100vw"
      className="object-contain"
    />
  </div>
</div>

  {/* Main Content (now centered) */}
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
    {/* Mobile/Small screens: Image on top */}
   {/* Mobile/Small screens: Image on top */}
<div className="mb-8">
  <div className="relative w-full max-w-sm mx-auto sm-aspect-square">
    <Image
      src="/about.png"
      alt="A professional doctor"
      fill
      sizes="100vw"
      className="object-cover"
      priority
    />
  </div>
</div>

    {/* Content */}
    <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 lg:ml-20">
      <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <MapPin className="w-4 h-4 mr-2" />
        Toledo, Ohio Healthcare Services
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Your Health,
        <span className="text-blue-600"> Our Priority</span>
      </h1>

      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        Comprehensive medical care specializing in addiction recovery, weight management,
        men's health, and wellness treatments.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
          <Phone className="w-5 h-5 mr-2" />
          Schedule Today
        </button>
        <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert care tailored to your unique health needs with personalized treatment plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-blue-600 font-medium text-sm">{service.subtitle}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gray-50 text-gray-700 py-3 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Reynolds Clinic?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience personalized healthcare with our expert team and comprehensive approach to wellness.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Medical Team</h3>
                    <p className="text-gray-600">Board-certified physicians with specialized training and years of experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Personalized Care</h3>
                    <p className="text-gray-600">Customized treatment plans tailored to your specific health goals and needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Comprehensive Support</h3>
                    <p className="text-gray-600">Complete care throughout your treatment journey with ongoing monitoring.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Schedule your consultation today and take the first step towards better health.
                </p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full">
                  Schedule Consultation
                </button>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="flex items-center justify-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    123 Medical Center Dr, Toledo, OH
                  </div>
                  <div className="flex items-center justify-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    Mon-Fri 8AM-6PM, Sat 9AM-2PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and treatments
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take Control of Your Health Today
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Reynolds Clinic to schedule your consultation and discover personalized healthcare solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors flex-1">
              Call Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors flex-1">
              Book Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;