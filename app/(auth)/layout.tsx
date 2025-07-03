import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - SaccoFinance",
  description: "Login or register to access your SaccoFinance account",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      {children}
    </div>
  );
}
