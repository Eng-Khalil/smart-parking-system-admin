import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllParkingLots } from "@/actions/parkingLots";
import { getAllBookings } from "@/actions/bookings";
import dynamic from "next/dynamic";


export default async function page() {
  const bookings:any[] = (await getAllBookings()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Booking"
        linkTitle="Add booking"
        href="/dashboard/admin"
        data={bookings}
        model="booking"
      />
      <div className="py-8">
        <DataTable data={bookings} columns={columns} />
      </div>
    </div>
  );
}
