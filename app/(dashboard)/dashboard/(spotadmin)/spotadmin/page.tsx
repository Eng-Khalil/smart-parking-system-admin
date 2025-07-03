import { getAllBookings } from '@/actions/bookings';
import { getAllParkingLots } from '@/actions/parkingLots';
import { getAllParkingSpots } from '@/actions/parkingSpots';
import LotAdminDashboard from '@/components/dashboard/Tables/bookings/lot-admin-dashboard'
import React from 'react'

export default async function Page() {
   const bookings:any[] = (await getAllBookings()) || [];
     const spots:any[] = (await getAllParkingSpots()) || [];
     const lots:any[] = (await getAllParkingLots()) || [];
  return (
    <div>
      <LotAdminDashboard bookings={bookings} spots={spots} lots={lots}/>
    </div>
  )
}
