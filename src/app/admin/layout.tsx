import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "@/utils/providers";
import { Auth0Provider } from "@/components/auth0-provider";
import { AdminHeader } from "./_components/admin-header";
import { AdminSidebar } from "./_components/admin-sidebar";

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
        <title>O.R.E. Plumbing Admin</title>
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
                <AdminSidebar />

                {/* Main Content */}
                <main className="flex-1 p-4 lg:p-6 pt-20 lg:pt-6">{children}</main>
              </div>
            </Providers>
          </Auth0Provider>
        </div>
      </body>
    </html>
  );
}
