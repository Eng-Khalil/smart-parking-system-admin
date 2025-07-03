
"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { columns } from "@/app/(dashboard)/dashboard/(user)/user/withdraws/columns";
import Loader from "@/loader";

// Client component to handle session and filtering
export default function WithdrawPage({ initialWithdraws }: any) {
  const [session, setSession] = useState(null);
  const [filteredWithdraws, setFilteredWithdraws] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch session
  useEffect(() => {
    setIsLoading(true);

    fetch("/api/session")
      .then(res => res.json())
      .then(data => {
        setSession(data);

        // Filter withdraws based on userId once we have session data
        if (data?.user?.id) {
          const userWithdraws = initialWithdraws.filter((withdraw: any) =>
            withdraw.userId === data.user.id
          );
          setFilteredWithdraws(userWithdraws);
        } else {
          // If no user ID is found, set filtered withdraws to empty array
          setFilteredWithdraws([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching session:", error);
        setIsLoading(false);
      });
  }, [initialWithdraws]);

  return (
    <div className="p-8">
      <TableHeader
        title="Withdrawals"
        linkTitle="Add Withdrawal"
        href="/dashboard/user/withdraws/new"
        data={filteredWithdraws}
        model="withdraws"
      />

      <div className="py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <Loader />
          </div>
        ) : (
          <DataTable
            data={filteredWithdraws}
            columns={columns}
          />
        )}
      </div>
    </div>
  );
}
