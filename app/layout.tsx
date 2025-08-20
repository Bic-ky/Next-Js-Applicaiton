import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reynolds Clinic | Premier Healthcare Services | Expert Medical Care",
  description:
    "Reynolds Clinic offers comprehensive healthcare services with expert doctors, advanced diagnostics, telemedicine, and personalized patient care. Book your appointment today.",
  keywords: [
    "healthcare",
    "medical clinic",
    "doctors",
    "telemedicine",
    "primary care",
    "specialists",
    "diagnostics",
    "patient portal",
    "medical center",
  ],
  robots: "index, follow",
  authors: [{ name: "Reynolds Clinic" }],
  openGraph: {
    title: "Reynolds Clinic | Premier Healthcare Services",
    description:
      "Comprehensive healthcare services with expert doctors, advanced diagnostics, and personalized patient care.",
    type: "website",
    url: "https://reynoldsclinic.com",
    images: [
      {
        url: "https://reynoldsclinic.com/images/clinic-hero.jpg",
        alt: "Reynolds Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reynolds Clinic | Premier Healthcare Services",
    description: "Comprehensive healthcare services with expert doctors and personalized care.",
    images: ["https://reynoldsclinic.com/images/clinic-hero.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Reynolds Clinic",
    description:
      "Premier healthcare services with expert doctors, advanced diagnostics, and personalized patient care",
    url: "https://reynoldsclinic.com",
    logo: "https://reynoldsclinic.com/images/reynolds-clinic-logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Healthcare Drive",
      addressLocality: "Medical City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US",
    },
    telephone: "+1-555-REYNOLDS",
    email: "info@reynoldsclinic.com",
    medicalSpecialty: ["Primary Care", "Cardiology", "Dermatology", "Orthopedics", "Pediatrics"],
    availableService: [
      { "@type": "MedicalTherapy", name: "Primary Care" },
      { "@type": "MedicalTherapy", name: "Specialist Consultations" },
      { "@type": "MedicalTest", name: "Advanced Diagnostics" },
      { "@type": "MedicalTherapy", name: "Telemedicine" },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
