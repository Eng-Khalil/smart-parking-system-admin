import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllRegions } from "@/actions/regions";

export default async function page() {
  const regions:any[] = (await getAllRegions()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Regions"
        linkTitle="Add Region"
        href="/dashboard/admin/regions/new"
        data={regions}
        model="region"
      />
      <div className="py-8">
        <DataTable data={regions} columns={columns} />
      </div>
    </div>
  );
}
