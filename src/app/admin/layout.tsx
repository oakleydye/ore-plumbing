import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "@/utils/providers";
import { Auth0Provider } from "@/components/auth0-provider";
import { AdminHeader } from "./_components/admin-header";

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
          <Auth0Provider>
            <Providers>
              <AdminHeader />

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
                <main className="flex-1 p-6">{children}</main>
              </div>
            </Providers>
          </Auth0Provider>
        </div>
      </body>
    </html>
  );
}
