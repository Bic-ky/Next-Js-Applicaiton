import Navbar from '@/app/(site)/components/Navbar'
import Footer from '@/app/(site)/components/Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}