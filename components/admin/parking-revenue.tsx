"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Mon", revenue: 1200000, bookings: 145 },
  { name: "Tue", revenue: 1350000, bookings: 162 },
  { name: "Wed", revenue: 1180000, bookings: 138 },
  { name: "Thu", revenue: 1420000, bookings: 171 },
  { name: "Fri", revenue: 1680000, bookings: 203 },
  { name: "Sat", revenue: 2100000, bookings: 256 },
  { name: "Sun", revenue: 1950000, bookings: 234 },
]

export function ParkingRevenueChart() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Weekly Revenue & Bookings</h3>
        <p className="text-sm text-muted-foreground">Revenue and booking trends for the past 7 days</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => [
                name === "revenue" ? `UGX ${value.toLocaleString()}` : value,
                name === "revenue" ? "Revenue" : "Bookings",
              ]}
            />
            <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} dot={{ fill: "#2563eb" }} />
            <Line type="monotone" dataKey="bookings" stroke="#16a34a" strokeWidth={2} dot={{ fill: "#16a34a" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
