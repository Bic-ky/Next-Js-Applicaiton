'use client';

import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-center text-6xl font-extrabold text-gray-900">
            401
          </h2>
          <h3 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            Unauthorized Access
          </h3>
          <p className="mt-2 text-center text-sm text-gray-600">
            You do not have permission to view this page.
          </p>
        </div>
        <div>
          <Link
            href="/login"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
