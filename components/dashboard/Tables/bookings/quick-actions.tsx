"use client"

import { Button } from "@/components/ui/button"
import { Car, MapPin, Users, Settings, BarChart3, Clock } from "lucide-react"

export function QuickActionz() {
  const actions = [
    {
      title: "View All Spots",
      description: "Manage parking spot availability",
      icon: Car,
      action: () => console.log("View all spots"),
    },
    {
      title: "Lot Overview",
      description: "View parking lot details and capacity",
      icon: MapPin,
      action: () => console.log("Lot overview"),
    },
    {
      title: "User Management",
      description: "Manage registered users and accounts",
      icon: Users,
      action: () => console.log("User management"),
    },
    {
      title: "Reports",
      description: "Generate booking and revenue reports",
      icon: BarChart3,
      action: () => console.log("Reports"),
    },
    {
      title: "Extend Booking",
      description: "Extend parking time for active bookings",
      icon: Clock,
      action: () => console.log("Extend booking"),
    },
    {
      title: "Settings",
      description: "Configure parking rates and policies",
      icon: Settings,
      action: () => console.log("Settings"),
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto p-4 flex flex-col items-start gap-2 hover:bg-muted"
            onClick={action.action}
          >
            <div className="flex items-center gap-2">
              <action.icon className="h-4 w-4" />
              <span className="font-medium">{action.title}</span>
            </div>
            <p className="text-xs text-muted-foreground text-left">{action.description}</p>
          </Button>
        ))}
      </div>
    </div>
  )
}
