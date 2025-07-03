"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { columns } from "@/app/(dashboard)/dashboard/(user)/user/savings/columns";

// Client component to handle session and filtering
export default function DepositsPage({ initialDeposits }:any) {
  const [session, setSession] = useState(null);
  const [filteredDeposits, setFilteredDeposits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch session
  useEffect(() => {
    setIsLoading(true);
    
    fetch("/api/session")
      .then(res => res.json())
      .then(data => {
        setSession(data);
        
        // Filter deposits based on userId once we have session data
        if (data?.user?.id) {
          const userDeposits = initialDeposits.filter((deposit:any) => 
            deposit.userId === data.user.id
          );
          setFilteredDeposits(userDeposits);
        } else {
          // If no user ID is found, set filtered deposits to empty array
          setFilteredDeposits([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching session:", error);
        setIsLoading(false);
      });
  }, [initialDeposits]);

  return (
    <div className="p-8">
      <TableHeader
        title="Deposits"
        linkTitle="Add Deposit"
        href="/dashboard/user/deposits/new"
        data={filteredDeposits}
        model="deposit"
      />
      
      <div className="py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <p>Loading deposits data...</p>
          </div>
        ) : (
          <DataTable 
            data={filteredDeposits} 
            columns={columns}
          />
        )}
      </div>
    </div>
  );
}