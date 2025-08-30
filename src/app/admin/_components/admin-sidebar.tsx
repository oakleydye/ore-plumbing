'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: '📊' },
  { name: 'Contact Requests', href: '/admin/contact-requests', icon: '💬' },
  { name: 'Job Photos', href: '/admin/job-photos', icon: '📷' },
  { name: 'Blog Posts', href: '/admin/blog', icon: '📝' },
  { name: 'Job Bids', href: '/admin/bids', icon: '💰' },
  { name: 'Reviews', href: '/admin/reviews', icon: '⭐' },
];

function NavigationItems({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.name}>
            <Link
              href={item.href}
              onClick={onItemClick}
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function AdminSidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-16 left-4 z-40">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-gray-300 shadow-sm"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Admin Menu</h2>
            </div>
            <div className="p-4">
              <NavigationItems onItemClick={() => setMobileMenuOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <nav className="hidden lg:block w-64 bg-white shadow-sm min-h-screen border-r">
        <div className="p-4">
          <NavigationItems />
        </div>
      </nav>
    </>
  );
}
