import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllParkingLots } from "@/actions/parkingLots";
import { getAllParkingSpots } from "@/actions/parkingSpots";

export default async function page() {
  const parkingSpots:any[] = (await getAllParkingSpots()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Parking spot"
        linkTitle="Add Parking spot"
        href="/dashboard/admin/parking-spots/new"
        data={parkingSpots}
        model="parkingSpot"
      />
      <div className="py-8">
        <DataTable data={parkingSpots} columns={columns} />
      </div>
    </div>
  );
}
