import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllwithdraws } from "@/actions/withdraws";

export default async function page() {
  const withdraws:any[] = (await getAllwithdraws()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Withdraw"
        linkTitle="withdraw cash"
        href="/dashboard/admin/withdraw/new"
        data={withdraws}
        model="loan"
      />
      <div className="py-8">
        <DataTable data={withdraws} columns={columns} />
      </div>
    </div>
  );
}
