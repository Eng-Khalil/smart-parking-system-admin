import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, Car, DollarSign, Calendar, MapPin } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  description: string
  icon: "users" | "parking" | "occupancy" | "revenue" | "bookings"
}

const iconMap = {
  users: Users,
  parking: Car,
  occupancy: MapPin,
  revenue: DollarSign,
  bookings: Calendar,
}

export function DashboardStatCard({ title, value, change, trend, description, icon }: StatCardProps) {
  const Icon = iconMap[icon]
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown
  const trendColor = trend === "up" ? "text-green-600" : "text-red-600"
  const bgColor = trend === "up" ? "bg-green-50" : "bg-red-50"

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className={`flex items-center gap-1 text-xs ${trendColor}`}>
              <TrendIcon className="h-3 w-3" />
              <span>{change}</span>
              <span className="text-muted-foreground">{description}</span>
            </div>
          </div>
          <div className={`p-3 rounded-full ${bgColor}`}>
            <Icon className={`h-6 w-6 ${trendColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
