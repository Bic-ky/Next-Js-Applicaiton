'use client'

import { useState, useEffect } from 'react'
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
// Service data
const services = [
  {
    id: 1,
    name: 'Primary Care',
    description: 'Comprehensive primary healthcare services including preventive care, health screenings, and chronic disease management.',
    icon: HeartIcon,
    gradient: 'from-blue-50 to-primary-50',
    iconGradient: 'from-primary-500 to-primary-600',
    buttonColor: 'text-primary-600 hover:text-primary-700',
  },
  {
    id: 2,
    name: 'Specialist Care',
    description: 'Access to board-certified specialists in cardiology, dermatology, orthopedics, and other medical specialties.',
    icon: LightBulbIcon,
    gradient: 'from-teal-50 to-green-50',
    iconGradient: 'from-teal-500 to-teal-600',
    buttonColor: 'text-teal-600 hover:text-teal-700',
  },
  {
    id: 3,
    name: 'Advanced Diagnostics',
    description: 'State-of-the-art diagnostic imaging, laboratory services, and cutting-edge medical technology for accurate diagnosis.',
    icon: ChartBarIcon,
    gradient: 'from-purple-50 to-pink-50',
    iconGradient: 'from-purple-500 to-purple-600',
    buttonColor: 'text-purple-600 hover:text-purple-700',
  },
  {
    id: 4,
    name: 'Telemedicine',
    description: 'Convenient virtual consultations and remote monitoring services for accessible healthcare from anywhere.',
    icon: VideoCameraIcon,
    gradient: 'from-orange-50 to-red-50',
    iconGradient: 'from-orange-500 to-orange-600',
    buttonColor: 'text-orange-600 hover:text-orange-700',
  },
]

// Doctor data
const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15+ years of experience in cardiovascular medicine and preventive cardiology.',
    rating: 4.9,
    gradient: 'from-primary-500 to-teal-500',
    buttonColor: 'text-primary-600 hover:text-primary-700',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Orthopedic Surgeon',
    experience: 'Specializing in joint replacement and sports medicine with 12+ years experience.',
    rating: 4.8,
    gradient: 'from-primary-500 to-teal-500',
    buttonColor: 'text-teal-600 hover:text-teal-700',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: 'Compassionate pediatric care with expertise in child development and family medicine.',
    rating: 5.0,
    gradient: 'from-primary-500 to-teal-500',
    buttonColor: 'text-purple-600 hover:text-purple-700',
  },
]

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Jennifer Davis',
    initials: 'JD',
    content: 'The care I received at Reynolds Clinic was exceptional. Dr. Johnson took the time to listen to my concerns and provided a comprehensive treatment plan. The staff was friendly and professional throughout my visit.',
    rating: 5,
    gradient: 'from-blue-50 to-primary-50',
    avatarGradient: 'from-primary-500 to-primary-600',
  },
  {
    id: 2,
    name: 'Mark Thompson',
    initials: 'MT',
    content: 'I had my knee surgery with Dr. Chen and the results exceeded my expectations. The entire team made sure I was comfortable and well-informed throughout the process. Highly recommend!',
    rating: 4,
    gradient: 'from-teal-50 to-green-50',
    avatarGradient: 'from-teal-500 to-teal-600',
  },
  {
    id: 3,
    name: 'Amanda Lee',
    initials: 'AL',
    content: 'Dr. Rodriguez has been amazing with my daughter. She makes every visit comfortable and educational. The pediatric department at Reynolds Clinic is top-notch with caring staff.',
    rating: 5,
    gradient: 'from-purple-50 to-pink-50',
    avatarGradient: 'from-purple-500 to-purple-600',
  },
]

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
        />
      ))}
    </div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Hero Section */}
<section
  id="home"
  className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden"
>
  {/* Background Elements & BG Image (desktop/tablet only) */}
  <div className="absolute inset-0 overflow-hidden hidden lg:block" aria-hidden="true">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-primary-200/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

    {/* Desktop background image */}
    <div className="relative w-full h-full">
      <Image
        src="/doctor.png"
        alt="A professional doctor"
        fill
        priority
        sizes="(min-width:1024px) 100vw"
        className="object-contain"
      />
    </div>
  </div>

  {/* Main Content (now centered) */}
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    {/* Mobile/Small screens: Image on top */}
    <div className="lg:hidden mb-8">
      <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] sm:aspect-[16/9]">
        <Image
          src="/doctor.png"
          alt="A professional doctor"
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-12 items-center my-14">
      {/* Left Column - Content (stays same) */}
      <div className="animate-slide-up text-center lg:text-left">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full text-sm font-medium text-teal-700 mb-6">
          <CheckIcon className="w-4 h-4 mr-2" />
          Trusted Healthcare Since 1985
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Your Health is Our
          <span className="text-gradient-primary block">Priority</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          Experience comprehensive healthcare with our team of expert doctors, advanced diagnostics, and personalized treatment plans. We're committed to providing exceptional medical care when you need it most.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
          <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
            <CalendarIcon className="w-5 h-5 mr-2" />
            Book Appointment
          </button>
          <button className="group btn-secondary flex items-center justify-center">
            <VideoCameraIcon className="w-5 h-5 mr-2" />
            Virtual Consultation
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">15K+</div>
            <div className="text-sm text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">50+</div>
            <div className="text-sm text-gray-600">Expert Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Emergency Care</div>
          </div>
        </div>
      </div>

      {/* Right column is empty on desktop because the bg image fills the area.
              Keep this div if you want the grid to reserve space for the image area on lg+. */}
      <div className="hidden lg:block"></div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by experienced professionals using state-of-the-art technology and evidence-based practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className={`group service-card bg-gradient-to-br ${service.gradient}`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className={`${service.buttonColor} font-medium transition-colors`}>
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section id="doctors" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert <span className="text-gradient-primary">Doctors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of board-certified physicians and specialists are dedicated to providing exceptional healthcare with compassion and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="group doctor-card">
                <div className={`h-64 bg-gradient-to-br ${doctor.gradient} flex items-center justify-center`}>
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <UserIcon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className={`${doctor.buttonColor.split(' ')[0]} font-medium mb-2`}>{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.experience}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <StarRating rating={doctor.rating} />
                      <span className="text-sm text-gray-500 ml-1">{doctor.rating}</span>
                    </div>
                    <button className={`${doctor.buttonColor} font-medium transition-colors`}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary-600 to-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus-visible:focus">
              View All Doctors
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients <span className="text-gradient-primary">Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read testimonials from our satisfied patients who have experienced exceptional care at Reynolds Clinic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`group testimonial-card bg-gradient-to-br ${testimonial.gradient}`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatarGradient} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule your appointment today and experience the difference that personalized, compassionate healthcare can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center focus-visible:focus">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call (555) REYNOLDS
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center focus-visible:focus">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Book Online
            </button>
          </div>
        </div>
      </section>
    </>
  )
}