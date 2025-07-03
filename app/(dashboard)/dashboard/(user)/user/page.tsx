import React from "react";
import { getAllSavings } from "@/actions/savings";
import SavingsPage from "@/components/savings/savingsPage";
import UserPage from "@/components/user-componets/user-page";
import { getAllWallets } from "@/actions/wallets";
import { getAllLoans } from "@/actions/loans";
import { getAllwithdraws } from "@/actions/withdraws";

export default async function Page() {
  
  const wallets = await getAllWallets();
  const savings = await getAllSavings();
  const loans = await getAllLoans();
  const withdraws = await getAllwithdraws();
  
  // Pass the savings data to the client component
  return <UserPage wallets={wallets} savings={savings} loans={loans} withdraws={withdraws} />;
}