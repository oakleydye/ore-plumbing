'use client';

import { useAuth } from '@/components/auth0-provider';
import { useState } from 'react';

export function AdminHeader() {
  const { user, logout, isLoading } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // Call our logout endpoint which will clear the session
      await fetch('/api/auth/logout', { method: 'POST' });
      // Then redirect to Auth0 logout
      logout();
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback to direct logout
      logout();
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoading) {
    return (
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Ore Plumbing Admin
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Ore Plumbing Admin
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">Welcome, {user?.name || "Admin"}</span>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
