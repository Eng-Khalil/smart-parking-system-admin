import { getAllBookings } from '@/actions/bookings';
import { getAllParkingLots } from '@/actions/parkingLots';
import { getAllParkingSpots } from '@/actions/parkingSpots';
import LotAdminSpots from '@/components/admin/lot-admin-spots'
import React from 'react'

export default async function Page() {
  const spots:any[] = (await getAllParkingSpots()) || [];
  const lots:any[] = (await getAllParkingLots()) || [];
  return (
    <div>
      <LotAdminSpots lots={lots} spots={spots}/>
    </div>
  )
}
