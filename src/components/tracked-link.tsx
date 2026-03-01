"use client";

import { AnchorHTMLAttributes, forwardRef } from "react";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventType: "phone_click" | "email_click";
  source?: string;
}

const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  ({ eventType, source, onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Fire-and-forget — don't await so the browser follows the link normally
      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventType, source }),
        keepalive: true,
      }).catch(() => {
        // Silently ignore analytics failures
      });

      onClick?.(e);
    };

    return (
      <a ref={ref} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }
);

TrackedLink.displayName = "TrackedLink";

export default TrackedLink;
