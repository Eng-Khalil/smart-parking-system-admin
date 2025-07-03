import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Booking {
  id: string
  spotCode: string
  userName: string
  startTime: string
  hours: number
  amount: string
  status: "CONFIRMED" | "PENDING" | "COMPLETED" | "CANCELLED"
}

const recentBookings: Booking[] = [
  {
    id: "1",
    spotCode: "A-001",
    userName: "John Doe",
    startTime: "10:30 AM",
    hours: 2,
    amount: "UGX 2,000",
    status: "CONFIRMED",
  },
  {
    id: "2",
    spotCode: "B-015",
    userName: "Jane Smith",
    startTime: "11:15 AM",
    hours: 1.5,
    amount: "UGX 1,500",
    status: "COMPLETED",
  },
  {
    id: "3",
    spotCode: "C-008",
    userName: "Mike Johnson",
    startTime: "12:00 PM",
    hours: 3,
    amount: "UGX 3,000",
    status: "PENDING",
  },
  {
    id: "4",
    spotCode: "A-025",
    userName: "Sarah Wilson",
    startTime: "1:45 PM",
    hours: 1,
    amount: "UGX 1,000",
    status: "CONFIRMED",
  },
  {
    id: "5",
    spotCode: "B-032",
    userName: "David Brown",
    startTime: "2:30 PM",
    hours: 4,
    amount: "UGX 4,000",
    status: "CONFIRMED",
  },
]

const statusColors = {
  CONFIRMED: "bg-blue-100 text-blue-800",
  PENDING: "bg-yellow-100 text-yellow-800",
  COMPLETED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
}

export function RecentBookingz({lotBookings}:{lotBookings:any}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Recent Bookings</h3>
      <ScrollArea className="h-[300px]">
        {
          lotBookings.length===0?(
            <div className="">
              <h2 className="text-black">No Bookings yet</h2>
            </div>
          ):(
            <div className="">
              <div className="space-y-3">
          {lotBookings.slice(0,4).map((booking:any) => (
            <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{booking.spotCode}</span>
                  <Badge className={booking.bookingStatus} variant="secondary">
                    {booking.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{booking.user.firstName} <span>{booking.user.lastName}</span> </p>
                <p className="text-xs text-muted-foreground">
                  {booking.startTime} • {booking.hours}h
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{booking.totalAmount}</p>
              </div>
            </div>
          ))}
        </div>
            </div>
          )
        }
      </ScrollArea>
    </div>
  )
}
