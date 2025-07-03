import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllStreets } from "@/actions/streets";

export default async function page() {
  const streets:any[] = (await getAllStreets()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Street"
        linkTitle="Add Street"
        href="/dashboard/admin/streets/new"
        data={streets}
        model="street"
      />
      <div className="py-8">
        <DataTable data={streets} columns={columns} />
      </div>
    </div>
  );
}
