import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, User } from "lucide-react"

const recentBookings = [
  {
    id: "1",
    user: "John Doe",
    spot: "A-15",
    location: "Downtown Plaza",
    time: "2 hours ago",
    status: "CONFIRMED",
    amount: "UGX 5,000",
  },
  {
    id: "2",
    user: "Jane Smith",
    spot: "B-23",
    location: "City Center Mall",
    time: "1 hour ago",
    status: "PENDING",
    amount: "UGX 3,500",
  },
  {
    id: "3",
    user: "Mike Johnson",
    spot: "C-08",
    location: "Airport Terminal",
    time: "30 minutes ago",
    status: "COMPLETED",
    amount: "UGX 12,000",
  },
  {
    id: "4",
    user: "Sarah Wilson",
    spot: "A-42",
    location: "Shopping District",
    time: "15 minutes ago",
    status: "CONFIRMED",
    amount: "UGX 4,200",
  },
]

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-800",
  CONFIRMED: "bg-blue-100 text-blue-800",
  COMPLETED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
}

export function RecentBookings({bookings}:{bookings:any}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Recent Bookings</h3>
        <p className="text-sm text-muted-foreground">Latest parking reservations and their status</p>
      </div>
      <div className="space-y-3">
        {bookings.slice(0,4).map((booking:any) => (
          <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-sm">{booking.user.firstName}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>
                  {booking.parkingLot.name} - Spot {booking.parkingSpot.address}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{booking.startingTime}</span>
              </div>
            </div>
            <div className="text-right space-y-1">
              <Badge className={statusColors[booking.bookingStatus as keyof typeof statusColors]}>{booking.bookingStatus}</Badge>
              <p className="text-sm font-medium">{booking.totalAmount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
