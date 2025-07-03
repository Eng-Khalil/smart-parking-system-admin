import React from "react";
import { columns } from "../../app/(dashboard)/dashboard/(spotadmin)/spotadmin/parking-lots/columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllParkingLots } from "@/actions/parkingLots";

export default async function LotAdmin({parkingLots}:{parkingLots:any}) {



  return (
    <div className="p-8">
      <TableHeader
        title="Parking Lot"
        linkTitle="Add Parking Lot"
        href="/dashboard/spotadmin/parking-lots/new"
        data={parkingLots}
        model="parkingLot"
      />
      <div className="py-8">
        <DataTable data={parkingLots} columns={columns} />
      </div>
    </div>
  );
}

