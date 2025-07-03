"use client";

import { useAuthStore } from "@/actions/users";
import { useEffect } from "react";
// import { useAuthStore } from "@/store/authStore";

// Auth provider component to initialize auth state
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const initialize = useAuthStore((state) => state.initialize);
  const isLoading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    // Initialize the auth state on app load
    initialize();
  }, [initialize]);

  // You could add a global loading state here while auth is initializing

}