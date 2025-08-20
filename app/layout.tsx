import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Reynolds Clinic | Premier Healthcare Services | Expert Medical Care',
  description: 'Reynolds Clinic offers comprehensive healthcare services with expert doctors, advanced diagnostics, telemedicine, and personalized patient care. Book your appointment today.',
  keywords: [
    'healthcare',
    'medical clinic',
    'doctors',
    'telemedicine',
    'primary care',
    'specialists',
    'diagnostics',
    'patient portal',
    'medical center'
  ],
  authors: [{ name: 'Reynolds Clinic' }],
  creator: 'Reynolds Clinic',
  publisher: 'Reynolds Clinic',
  robots: 'index, follow',
  openGraph: {
    title: 'Reynolds Clinic | Premier Healthcare Services',
    description: 'Comprehensive healthcare services with expert doctors, advanced diagnostics, and personalized patient care.',
    url: 'https://reynoldsclinic.com',
    siteName: 'Reynolds Clinic',
    images: [
      {
        url: '/images/clinic-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Reynolds Clinic - Premier Healthcare Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reynolds Clinic | Premier Healthcare Services',
    description: 'Comprehensive healthcare services with expert doctors and personalized care.',
    images: ['/images/clinic-hero.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Reynolds Clinic",
              "description": "Premier healthcare services with expert doctors, advanced diagnostics, and personalized patient care",
              "url": "https://reynoldsclinic.com",
              "logo": "https://reynoldsclinic.com/images/reynolds-clinic-logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Healthcare Drive",
                "addressLocality": "Medical City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "telephone": "+1-555-REYNOLDS",
              "email": "info@reynoldsclinic.com",
              "medicalSpecialty": ["Primary Care", "Cardiology", "Dermatology", "Orthopedics", "Pediatrics"],
              "availableService": [
                {
                  "@type": "MedicalTherapy",
                  "name": "Primary Care"
                },
                {
                  "@type": "MedicalTherapy", 
                  "name": "Specialist Consultations"
                },
                {
                  "@type": "MedicalTest",
                  "name": "Advanced Diagnostics"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Telemedicine"
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans text-gray-900 overflow-x-hidden antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}