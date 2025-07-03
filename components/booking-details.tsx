// import { Calendar, Clock, CreditCard, MapPin, User2, CheckCircle } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { notFound } from "next/navigation";
// import { getBookingById } from "@/actions/bookings";

// type BookingPageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function Page({params}: {params: Promise<{ id: string }>}):Promise<any> {
//   const {id}=await params;
 
//   const booking=await getBookingById(id)

//   if (!booking) return notFound();

//   const start = new Date(booking.startTime);
//   const end = new Date(start.getTime() + booking.hours * 60 * 60 * 1000);
//   const duration = `${booking.hours} hour${booking.hours !== 1 ? "s" : ""}`;

//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-6">
//       <div className="flex items-center gap-2">
//         <CheckCircle className="text-green-500 w-5 h-5" />
//         <h2 className="text-xl font-semibold">Booking Confirmed</h2>
//         <Badge variant="secondary" className="ml-auto capitalize">
//           {booking.bookingStatus.toLowerCase()}
//         </Badge>
//       </div>
//       <p className="text-muted-foreground text-sm">Booking ID: {booking.id}</p>

//       <Card>
//         <CardHeader>
//           <CardTitle>Parking Lot</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-2">
//           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//             <MapPin className="w-4 h-4" />
//             {booking.parkingLot.name}
//           </div>
//           <div className="text-sm">Spot: {booking.parkingSpot.slotNumber}</div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Booking Details</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3 text-sm">
//           <div className="flex justify-between items-center">
//             <span className="flex items-center gap-2">
//               <Calendar className="w-4 h-4" />
//               Start Time
//             </span>
//             <span>{start.toLocaleString()}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="flex items-center gap-2">
//               <Clock className="w-4 h-4" />
//               Duration
//             </span>
//             <span>{duration}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="flex items-center gap-2">
//               <Calendar className="w-4 h-4" />
//               End Time
//             </span>
//             <span>{end.toLocaleString()}</span>
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Guest Information</CardTitle>
//         </CardHeader>
//         <CardContent className="flex items-center gap-3">
//           <Avatar>
//             <AvatarImage src="/placeholder-user.jpg" />
//             <AvatarFallback>
//               {booking.user.name?.[0]?.toUpperCase() ?? "U"}
//             </AvatarFallback>
//           </Avatar>
//           <div>
//             <div className="font-medium">{booking.user.name}</div>
//             <div className="text-sm text-muted-foreground">{booking.user.email}</div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Payment Summary</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3 text-sm">
//           <div className="flex justify-between">
//             <span>Total Amount</span>
//             <span>${booking.totalAmount.toFixed(2)}</span>
//           </div>
//           <Separator />
//           <div className="flex items-center gap-2">
//             <CreditCard className="w-4 h-4" />
//             Payment Method: {booking.paymentMethod}
//             <Badge variant="outline" className="ml-auto capitalize">
//               {booking.paymentStatus.toLowerCase()}
//             </Badge>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }






import {
  Calendar,
  Clock,
  CreditCard,
  MapPin,
  User2,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { notFound } from "next/navigation";
import { getBookingById } from "@/actions/bookings";
import dynamic from "next/dynamic";
import { BookingStatusActions } from "./BookingStatusActions";


export default async function BookingDetails({booking}:{booking:any}) {
  

  if (!booking) return notFound();

  const start = new Date(booking.startTime);
  const end = new Date(start.getTime() + booking.hours * 60 * 60 * 1000);
  const duration = `${booking.hours} hour${booking.hours !== 1 ? "s" : ""}`;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <CheckCircle className="text-green-500 w-5 h-5" />
        <h2 className="text-xl font-semibold">Booking Confirmed</h2>
        <Badge variant="secondary" className="ml-auto capitalize">
          {booking.bookingStatus.toLowerCase()}
        </Badge>
      </div>
      <p className="text-muted-foreground text-sm">Booking ID: {booking.id}</p>

      <BookingStatusActions
        bookingId={booking.id}
        currentStatus={booking.bookingStatus}
      />

      <Card>
        <CardHeader>
          <CardTitle>Parking Lot</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {booking.parkingLot.name}
          </div>
          <div className="text-sm">Spot: {booking.parkingSpot.slotNumber}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Start Time
            </span>
            <span>{start.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Duration
            </span>
            <span>{duration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              End Time
            </span>
            <span>{end.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Guest Information</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              {booking.user.name?.[0]?.toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{booking.user.name}</div>
            <div className="text-sm text-muted-foreground">{booking.user.email}</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Total Amount</span>
            <span>${booking.totalAmount.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Payment Method: {booking.paymentMethod}
            <Badge variant="outline" className="ml-auto capitalize">
              {booking.paymentStatus.toLowerCase()}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
