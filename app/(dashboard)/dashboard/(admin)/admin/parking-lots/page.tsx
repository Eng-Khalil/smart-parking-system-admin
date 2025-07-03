import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllParkingLots } from "@/actions/parkingLots";

export default async function page() {
  const parkingLots:any[] = (await getAllParkingLots()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Parking Lot"
        linkTitle="Add Parking Lot"
        href="/dashboard/admin/parking-lots/new"
        data={parkingLots}
        model="parkingLot"
      />
      <div className="py-8">
        <DataTable data={parkingLots} columns={columns} />
      </div>
    </div>
  );
}
