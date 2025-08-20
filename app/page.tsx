import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert Medical Care, <span className="text-blue-600">Personalized</span> for You
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive healthcare services with expert doctors and advanced diagnostics.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/book"
                className="rounded-xl px-5 py-3 bg-blue-600 text-white hover:bg-blue-700"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="rounded-xl px-5 py-3 border hover:bg-gray-50"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-[420px]">
            <Image
              src="https://reynoldsclinic.com/images/clinic-hero.jpg"
              alt="Reynolds Clinic"
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Why Choose Reynolds Clinic</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Expert Doctors", desc: "Board-certified specialists across key disciplines." },
            { title: "Advanced Diagnostics", desc: "Modern lab & imaging for accurate results." },
            { title: "Telemedicine", desc: "Convenient online consultations from anywhere." },
            { title: "Personalized Care", desc: "Plans tailored to your unique health goals." },
          ].map((f) => (
            <div key={f.title} className="p-6 border rounded-2xl hover:shadow-md transition">
              <h3 className="font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to take control of your health?</h3>
          <p className="mt-2 text-muted-foreground">
            Schedule an appointment with our care team today.
          </p>
          <Link
            href="/book"
            className="inline-block mt-6 rounded-xl px-6 py-3 bg-blue-600 text-white hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
