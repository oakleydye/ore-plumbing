'use client';

import { Auth0Provider } from '@auth0/nextjs-auth0';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  return <Auth0Provider>{children}</Auth0Provider>;
}
