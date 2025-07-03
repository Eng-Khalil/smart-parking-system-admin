import React from "react";
import SavingsPage from "@/components/savings/savingsPage";
import { getAllSavings } from "@/actions/savings";

// This is the server component that fetches the initial data
export default async function Page() {
  // Fetch all deposits from the server action
  const savings = await getAllSavings();
  
  // Pass the deposits data to the client component
  return <SavingsPage initialSavings={savings} />;
}