"use client";

import { useState, useEffect } from "react";

/**
 * A component that ensures content is only rendered after hydration
 * to prevent hydration mismatches with localStorage-based state
 */
export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}

// Example usage in a layout or page:
// 
// import { ClientOnly } from "@/components/ClientOnly";
//
// export default function Layout({ children }) {
//   return (
//     <div>
//       <Header />
//       <ClientOnly>
//         {/* Components that use localStorage/sessionStorage */}
//         <AuthComponent />
//       </ClientOnly>
//       {children}
//     </div>
//   );
// }