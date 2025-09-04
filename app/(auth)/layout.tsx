import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Login • Reynolds Clinic' };

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      {children}
    </main>
  );
}