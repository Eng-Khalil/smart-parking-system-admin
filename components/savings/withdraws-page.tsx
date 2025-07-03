"use client";

import React, { useEffect, useState } from "react";
// import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { columns } from "@/app/(dashboard)/dashboard/(user)/user/savings/columns";

// Client component to handle session and filtering
export default function WithdrawalsPage({ initialWithdrawals }:any) {
  const [session, setSession] = useState(null);
  const [filteredWithdrawals, setFilteredWithdrawals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch session
  useEffect(() => {
    setIsLoading(true);
    
    fetch("/api/session")
      .then(res => res.json())
      .then(data => {
        setSession(data);
        
        // Filter withdrawals based on userId once we have session data
        if (data?.user?.id) {
          const userWithdrawals = initialWithdrawals.filter((withdrawal:any)=> 
            withdrawal.userId === data.user.id
          );
          setFilteredWithdrawals(userWithdrawals);
        } else {
          // If no user ID is found, set filtered withdrawals to empty array
          setFilteredWithdrawals([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching session:", error);
        setIsLoading(false);
      });
  }, [initialWithdrawals]);

  return (
    <div className="p-8">
      <TableHeader
        title="Withdraws"
        linkTitle="Request Withdrawal"
        href="/dashboard/user/withdraws/new"
        data={filteredWithdrawals}
        model="withdrawal"
      />
      
      <div className="py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <p>Loading withdrawals data...</p>
          </div>
        ) : (
          <DataTable 
            data={filteredWithdrawals} 
            columns={columns}
          />
        )}
      </div>
    </div>
  );
}