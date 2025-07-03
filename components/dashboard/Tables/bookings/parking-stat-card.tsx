import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Car, CheckCircle, DollarSign } from "lucide-react"

interface ParkingStatCardProps {
  title: string
  value: string
  description: string
  icon: "bookings" | "available" | "occupied" | "revenue"
}

const iconMap = {
  bookings: Calendar,
  available: CheckCircle,
  occupied: Car,
  revenue: DollarSign,
}

const colorMap = {
  bookings: "text-blue-600",
  available: "text-green-600",
  occupied: "text-orange-600",
  revenue: "text-purple-600",
}

export function ParkingStatCard({ title, value, description, icon }: ParkingStatCardProps) {
  const Icon = iconMap[icon]
  const colorClass = colorMap[icon]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${colorClass}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
