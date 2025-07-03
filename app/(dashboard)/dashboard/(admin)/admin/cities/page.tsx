import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllRegions } from "@/actions/regions";
import { getAllCities } from "@/actions/cities";

export default async function page() {
  const cities:any[] = (await getAllCities()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Cities"
        linkTitle="Add City"
        href="/dashboard/admin/cities/new"
        data={cities}
        model="city"
      />
      <div className="py-8">
        <DataTable data={cities} columns={columns} />
      </div>
    </div>
  );
}
