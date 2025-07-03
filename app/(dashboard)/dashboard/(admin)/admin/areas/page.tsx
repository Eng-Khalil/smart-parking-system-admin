import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllAreas } from "@/actions/areas";

export default async function page() {
  const areas:any[] = (await getAllAreas()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Areas"
        linkTitle="Add Area"
        href="/dashboard/admin/areas/new"
        data={areas}
        model="area"
      />
      <div className="py-8">
        <DataTable data={areas} columns={columns} />
      </div>
    </div>
  );
}
