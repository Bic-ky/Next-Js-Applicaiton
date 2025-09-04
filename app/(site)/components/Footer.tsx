'use client'

import Link from 'next/link'

const footerNavigation = {
  services: [
    { name: 'Primary Care', href: '#' },
    { name: 'Specialist Care', href: '#' },
    { name: 'Advanced Diagnostics', href: '#' },
    { name: 'Telemedicine', href: '#' },
    { name: 'Emergency Care', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Careers', href: '#' },
    { name: 'News & Updates', href: '#' },
    { name: 'Contact Us', href: '#contact' },
  ],
  support: [
    { name: 'Patient Portal', href: '#' },
    { name: 'Appointment Booking', href: '#' },
    { name: 'Insurance', href: '#' },
    { name: 'Health Resources', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'HIPAA Notice', href: '#' },
    { name: 'Accessibility', href: '#' },
  ],
}

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.017 0C8.396 0 8.025.024 6.782.071 5.544.117 4.698.229 3.953.473c-.789.306-1.459.717-2.126 1.384S.785 3.162.48 3.95C.236 4.695.124 5.541.078 6.78.031 8.025.007 8.396.007 12.017c0 3.622.024 3.993.071 5.236.046 1.239.158 2.085.402 2.83.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.745.244 1.591.356 2.83.402 1.243.047 1.614.071 5.236.071s3.993-.024 5.236-.071c1.239-.046 2.085-.158 2.83-.402.789-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.337 1.384-2.126.244-.745.356-1.591.402-2.83.047-1.243.071-1.614.071-5.236s-.024-3.993-.071-5.236c-.046-1.239-.158-2.085-.402-2.83-.306-.789-.717-1.459-1.384-2.126C19.481.902 18.811.491 18.022.185 17.277-.059 16.431-.171 15.192-.224 13.949-.271 13.578-.295 12.017-.295zm0 2.162c3.561 0 3.993.024 5.404.071 1.17.05 1.805.168 2.227.279.56.217.96.477 1.382.896.42.42.679.819.896 1.381.113.422.229 1.057.28 2.226.047 1.412.068 1.844.068 5.405s-.021 3.993-.068 5.405c-.051 1.17-.167 1.805-.28 2.226-.217.56-.476.96-.896 1.382-.419.419-.819.679-1.38.896-.422.113-1.057.229-2.227.28-1.411.047-1.844.068-5.405.068s-3.994-.021-5.405-.068c-1.17-.051-1.805-.167-2.226-.28-.56-.217-.96-.476-1.382-.896-.419-.419-.679-.819-.896-1.38-.113-.422-.229-1.057-.28-2.227-.047-1.411-.068-1.844-.068-5.405s.021-3.993.068-5.405c.051-1.17.167-1.805.28-2.226.217-.56.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.113 1.057-.229 2.226-.28 1.412-.047 1.844-.068 5.405-.068z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.017 7.784a4.233 4.233 0 100 8.466 4.233 4.233 0 000-8.466zm0 6.979a2.746 2.746 0 110-5.492 2.746 2.746 0 010 5.492z" clipRule="evenodd" />
        <circle cx="16.846" cy="7.155" r=".99" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
      </svg>
    ),
  },
]

const scrollToSection = (href: string) => {
  if (href.startsWith('#')) {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">
                Reynolds<span className="text-teal-400">Clinic</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing exceptional healthcare services with compassion, expertise, and cutting-edge technology since 1985.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-300">123 Healthcare Drive, Medical City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-300">(555) REYNOLDS</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-gray-300">info@reynoldsclinic.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 focus-visible:focus"
                  aria-label={`Follow us on ${item.name}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 focus-visible:focus"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 focus-visible:focus text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 focus-visible:focus"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Reynolds Clinic. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              {footerNavigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus-visible:focus"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-6 p-4 bg-red-900/20 border border-red-800/30 rounded-lg">
            <p className="text-red-200 text-sm text-center">
              <strong>Emergency:</strong> For life-threatening emergencies, call 911 immediately. 
              For urgent medical concerns, call our 24/7 hotline: (555) URGENT-1
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}