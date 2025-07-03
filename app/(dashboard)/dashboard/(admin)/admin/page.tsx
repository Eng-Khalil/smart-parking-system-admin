import { getAllBookings } from '@/actions/bookings';
import { getAllParkingSpots } from '@/actions/parkingSpots';
import SmartParkingDashboard from '@/components/admin/admin-overview'
import React from 'react'

export default async function Page() {
   const parkingSpots:any[] = (await getAllParkingSpots()) || [];
   const bookings:any[] = (await getAllBookings()) || [];

  return (
    <div>
      <SmartParkingDashboard parkingSpots={parkingSpots} bookings={bookings}/>
    </div>
  )
}
