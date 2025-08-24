import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "@/utils/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ore Plumbing Admin</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-50">
          {/* Admin Header */}
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold text-gray-900">
                    Ore Plumbing Admin
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">Welcome, Admin</span>
                  <a
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Back to Site
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Admin Sidebar and Content */}
          <div className="flex">
            {/* Sidebar */}
            <nav className="w-64 bg-white shadow-sm min-h-screen border-r">
              <div className="p-4">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/admin"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/contact-requests"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                    >
                      Contact Requests
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/job-photos"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                    >
                      Job Photos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/blog"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                    >
                      Blog Posts
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/bids"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                    >
                      Job Bids
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/reviews"
                      className="block px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-6">
              <Providers>
                {children}
              </Providers>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
