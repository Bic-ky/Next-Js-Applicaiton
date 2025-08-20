export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h4 className="font-semibold mb-3">Reynolds Clinic</h4>
          <p className="text-sm text-muted-foreground">
            Premier healthcare services with expert doctors, advanced diagnostics,
            and personalized care.
          </p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Services</h5>
          <ul className="space-y-1 text-sm">
            <li>Primary Care</li>
            <li>Specialist Consultations</li>
            <li>Advanced Diagnostics</li>
            <li>Telemedicine</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Contact</h5>
          <ul className="space-y-1 text-sm">
            <li>123 Healthcare Drive</li>
            <li>Medical City, ST 12345</li>
            <li>+1 (555) 000-0000</li>
            <li>info@reynoldsclinic.com</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Links</h5>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline" href="/privacy">Privacy Policy</a></li>
            <li><a className="hover:underline" href="/terms">Terms of Service</a></li>
            <li><a className="hover:underline" href="/book">Book Appointment</a></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Reynolds Clinic. All rights reserved.
      </div>
    </footer>
  );
}
