"use client"
import React, { useEffect, useState } from "react";
import { columns } from "../../app/(dashboard)/dashboard/(spotadmin)/spotadmin/parking-lots/columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";

export default function LotAdminBookings({spots,bookings}:{spots:any,bookings:any}) {
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
          const filteredBookings = bookings.filter(
            (booking: any) => booking.parkingLotId === userParkingLotId
          )
          setParkingSpots(filteredBookings)
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
        title="Bookings"
        linkTitle=""
        href="j"
        data={bookings}
        model="booking"
      />
      <div className="py-8">
        <DataTable data={spots} columns={columns} />
      </div>
    </div>
  );
}
