"use client"
import React, { useEffect, useState } from "react";
import { columns } from "../../app/(dashboard)/dashboard/(spotadmin)/spotadmin/parking-lots/columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";

export default function LotAdminSpots({spots,lots}:{spots:any,lots:any}) {
  const [isLoading, setIsLoading] = useState(true)
  const [session, setSession] = useState<any>(null)
  const [parkingSpots, setParkingSpots] = useState<any[]>([])

 useEffect(() => {
    setIsLoading(true)

    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => {
        setSession(data)

        const userParkingLotId = data?.user?.parkingLotId

        if (userParkingLotId) {
          const filteredSpots = spots.filter(
            (spot: any) => spot.parkingLotId === userParkingLotId
          )
          setParkingSpots(filteredSpots)
        } else {
          setParkingSpots([])
        }

        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching session:", error)
        setIsLoading(false)
      })
  }, [spots])

  return (
    <div className="p-8">
      <TableHeader
        title="Parking Spot"
        linkTitle="Add Parking Spot"
        href="/dashboard/spotadmin/parking-lots/new"
        data={parkingSpots}
        model="parkingSpot"
      />
      <div className="py-8">
        <DataTable data={parkingSpots} columns={columns} />
      </div>
    </div>
  );
}
