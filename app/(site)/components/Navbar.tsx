'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  exp?: number;     // seconds since epoch
  sub?: string;
  jti?: string;
  type?: string;
  ver?: number;
};

type NavItem =
  | { name: string; href: string; dropdown?: undefined }
  | { name: string; href: string; dropdown: { name: string; href: string }[] };

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Drug Rehabilitation', href: '/services/drug-rehabilitation' },
      { name: 'Weight Management', href: '/services/weight-management' },
      { name: "Men's Health", href: '/services/mens-health' },
      { name: 'Injury Treatment', href: '/services/injury-treatment' },
      { name: 'Hormone Therapy', href: '/services/hormone-therapy' },
    ],
  },
  { name: 'Blogs', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://127.0.0.1:8000';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Using ReturnType<typeof setTimeout> for browser compatibility
  const logoutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // One container ref—to close any open dropdown on outside click
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  // --- UI: scroll shadow ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- UI: click outside to close dropdowns ---
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!navContainerRef.current) return;
      const target = e.target as Node;
      if (!navContainerRef.current.contains(target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  // --- Auth: setup on mount, watch cross-tab & visibility ---
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setupAuthFromToken(token);

    // Sync auth across tabs
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'accessToken') {
        setupAuthFromToken(e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);

    // If the tab was hidden/asleep, re-check when visible
    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        const t = localStorage.getItem('accessToken');
        setupAuthFromToken(t, /*force*/ true);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('storage', onStorage);
      document.removeEventListener('visibilitychange', onVisibility);
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
        logoutTimerRef.current = null;
      }
    };
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Auth helpers ---
  const setupAuthFromToken = async (token: string | null, force = false) => {
    // Clear any existing timer
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
      logoutTimerRef.current = null;
    }

    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    try {
      const { exp } = jwtDecode<JwtPayload>(token);
      const now = Math.floor(Date.now() / 1000);

      if (!exp || exp <= now) {
        // Already expired
        await handleLogout(true); // skip server revoke since it's stale anyway
        return;
      }

      setIsAuthenticated(true);
      setLoading(false);

      // logout 60s before token expiry; clamp to >= 0
      const msUntilLogout = Math.max(0, (exp - now - 60) * 1000);
      logoutTimerRef.current = setTimeout(() => {
        // Choose A) client-only or B) server revoke + client logout
        void handleLogout(false); // prefer server revoke for cleanliness
      }, msUntilLogout);

      if (force && msUntilLogout === 0) {
        void handleLogout(false);
      }
    } catch (err) {
      console.error('Invalid token decode:', err);
      await handleLogout(true);
    }
  };

  const handleLogout = async (skipServer = false) => {
    try {
      const token = localStorage.getItem('accessToken') ?? undefined;
      if (!skipServer && token) {
        // Best-effort revoke on the server; ignore errors
        await fetch(`${API_BASE}/users/logout`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
        }).catch(() => {});
      }
    } finally {
      localStorage.removeItem('accessToken');
      setIsAuthenticated(false);
      setMobileMenuOpen(false);
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
        logoutTimerRef.current = null;
      }
      router.push('/');
    }
  };

  // --- UI helpers ---
  const scrollToSection = (href: string) => {
    if (!href.startsWith('#')) return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  // Highlight current route; for sections use startsWith to catch nested routes
  const isActive = (itemHref: string) => {
    if (itemHref === '/') return pathname === '/';
    return pathname?.startsWith(itemHref);
  };

  const handleDropdownToggle = (e: React.MouseEvent, itemName: string) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-nav shadow-lg bg-white/95' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navContainerRef}>
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={() => setOpenDropdown(null)}>
            <span className="text-xl lg:text-2xl font-bold text-gray-900">
              Reynolds<span className="text-teal-500">Clinic</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden text-lg lg:flex items-center space-x-8">
            {navigation.map((item) => {
              if ('dropdown' in item && item.dropdown) {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={(e) => handleDropdownToggle(e, item.name)}
                      className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.href.startsWith('#')) {
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth Button */}
          {!loading && (
            <div className="hidden lg:flex items-center ml-4">
              {isAuthenticated ? (
                <button
                  onClick={() => void handleLogout(false)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Login
                </Link>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setMobileMenuOpen((s) => !s);
              setOpenDropdown(null);
            }}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => {
              if ('dropdown' in item && item.dropdown) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="mt-2 space-y-2 pl-4 border-l-2 border-gray-200">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-150"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.href.startsWith('#')) {
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  {item.name}
                </Link>
              );
            })}

            {!loading && (
              <div className="border-t border-gray-200 px-4 py-4">
                {isAuthenticated ? (
                  <button
                    onClick={() => void handleLogout(false)}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
