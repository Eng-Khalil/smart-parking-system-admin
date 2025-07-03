import { getBookingById } from '@/actions/bookings';
import BookingDetails from '@/components/booking-details';
import React from 'react'

export default async function  Page({ params }: { params: Promise<{ id: string }> }){
  const { id } = await params;
  
    const booking = await getBookingById(id);
  return (
    <div>
      <BookingDetails booking={booking}/>
    </div>
  )
}
