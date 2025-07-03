"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ParkingStatCard } from "@/components/dashboard/Tables/bookings/parking-stat-card"
import { ActiveBookings } from "@/components/dashboard/Tables/bookings/active-bookings"
import { RecentBookingz } from "@/components/dashboard/Tables/bookings/recent-bookings"
import { useEffect, useState } from "react"

export default function LotAdminDashboard({spots,lots,bookings}:{spots:any,lots:any,bookings:any}) {

    const [isLoading, setIsLoading] = useState(true)
    const [session, setSession] = useState<any>(null)
    const [parkingSpots, setParkingSpots] = useState<any[]>([]);
    const [lotBookings, setLotBookings] = useState<any[]>([]);
    const [lot, setLot] = useState<any[]>([]);


  
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
            const filteredBookings=bookings.filter((b:any)=>b.parkingLotId===userParkingLotId)
            setLotBookings(filteredBookings);
            const availableLot=lots.find((l:any)=>l.id===userParkingLotId)
            setLot(availableLot);
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

    console.log(session);
  
    const filteredBookings=bookings.filter((f:any)=>f.parkingLotId===session?.user?.parkingLotId);
    const availableSpots=spots.filter((c:any)=>c.spotStatus==="AVAILABLE");
    const occupiedSpots=spots.filter((c:any)=>c.spotStatus==="OCCUPIED");

  
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">Parking Manager </h1>
            <p className="text-muted-foreground">Today is {today}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search by spot code or user..." className="pl-8 w-[250px]" />
            </div>
            <Button>New Booking</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ParkingStatCard title="Total Bookings" value={filteredBookings.length} description="Today's bookings" icon="bookings" />
        <ParkingStatCard title="Available Spots" value={availableSpots.length} description="Currently available" icon="available" />
        <ParkingStatCard title="Occupied Spots" value={occupiedSpots.length} description="Currently occupied" icon="occupied" />
        <ParkingStatCard title="Revenue" value="UGX 3,000" description="Today's earnings" icon="revenue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <RecentBookingz lotBookings={filteredBookings}/>
        </Card>
        <Card className="p-6">
          <ActiveBookings />
        </Card>
      </div>
    </div>
  )
}
