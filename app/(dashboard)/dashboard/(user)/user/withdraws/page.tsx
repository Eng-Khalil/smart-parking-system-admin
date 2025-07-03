import React from "react";
import WithdrawPage from "@/components/user-componets/withdrawPage";
import { getAllwithdraws } from "@/actions/withdraws";



export default async function Page() {

  const withdraws = await getAllwithdraws();
  console.log(withdraws)
  
  // Pass the deposits data to the client component
  return <WithdrawPage initialWithdraws={withdraws} />;
}