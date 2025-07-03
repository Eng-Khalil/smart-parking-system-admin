import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock } from "lucide-react"

interface ActiveBooking {
  id: string
  spotCode: string
  userName: string
  timeRemaining: string
  status: "ACTIVE" | "EXPIRING"
}

const activeBookings: ActiveBooking[] = [
  {
    id: "1",
    spotCode: "A-001",
    userName: "John Doe",
    timeRemaining: "1h 23m",
    status: "ACTIVE",
  },
  {
    id: "2",
    spotCode: "B-015",
    userName: "Jane Smith",
    timeRemaining: "15m",
    status: "EXPIRING",
  },
  {
    id: "3",
    spotCode: "C-008",
    userName: "Mike Johnson",
    timeRemaining: "2h 45m",
    status: "ACTIVE",
  },
  {
    id: "4",
    spotCode: "A-025",
    userName: "Sarah Wilson",
    timeRemaining: "45m",
    status: "ACTIVE",
  },
  {
    id: "5",
    spotCode: "B-032",
    userName: "David Brown",
    timeRemaining: "8m",
    status: "EXPIRING",
  },
]

export function ActiveBookings() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Active Bookings</h3>
      <ScrollArea className="h-[300px]">
        <div className="space-y-3">
          {activeBookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{booking.spotCode}</span>
                  <Badge variant={booking.status === "EXPIRING" ? "destructive" : "default"}>{booking.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{booking.userName}</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-3 w-3" />
                <span className={booking.status === "EXPIRING" ? "text-red-600" : ""}>{booking.timeRemaining}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
