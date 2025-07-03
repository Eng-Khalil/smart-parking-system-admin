"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { columns } from "@/app/(dashboard)/dashboard/(user)/user/savings/columns";
import Loader from "@/loader";

// Client component to handle session and filtering
export default function SavingsPage({ initialSavings }:any) {
  const [session, setSession] = useState(null);
  const [filteredSavings, setFilteredSavings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch session
  useEffect(() => {
    setIsLoading(true);
    
    fetch("/api/session")
      .then(res => res.json())
      .then(data => {
        setSession(data);
        
        // Filter savings based on userId once we have session data
        if (data?.user?.id) {
          const userSavings = initialSavings.filter((saving:any) => 
            saving.userId === data.user.id
          );
          setFilteredSavings(userSavings);
        } else {
          // If no user ID is found, set filtered savings to empty array
          setFilteredSavings([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching session:", error);
        setIsLoading(false);
      });
  }, [initialSavings]);

  return (
    <div className="p-8">
      <TableHeader
        title="Savings"
        linkTitle="Add Saving"
        href="/dashboard/user/savings/new"
        data={filteredSavings}
        model="savings"
      />
      
      <div className="py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <Loader/>
          </div>
        ) : (
          <DataTable 
            data={filteredSavings} 
            columns={columns}
          />
        )}
      </div>
    </div>
  );
}