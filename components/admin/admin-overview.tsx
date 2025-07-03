"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { RecentBookings } from "@/components/admin/recent-bookings"
import { ParkingRevenueChart } from "@/components/admin/parking-revenue"
import { DashboardStatCard } from "@/components/admin/start-card"

export default function SmartParkingDashboard({parkingSpots,bookings}:{parkingSpots:any,bookings:any}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">Smart Parking Super_Admin</h1>
            <p className="text-muted-foreground">Monitor and manage your parking infrastructure in real-time.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search parking lots..." className="pl-8 w-[250px]" />
            </div>
            <Button variant="outline">Filter</Button>
            <Button>Export Report</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="parking-lots">Parking Lots</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardStatCard
          title="Total Parking Spots"
          value={parkingSpots.length}
          change="+5.2%"
          trend="up"
          description="from last month"
          icon="parking"
        />
        <DashboardStatCard
          title="Occupancy Rate"
          value="78.5%"
          change="+12.3%"
          trend="up"
          description="from last week"
          icon="occupancy"
        />
        <DashboardStatCard
          title="Daily Revenue"
          value="UGX 2,450,000"
          change="+8.7%"
          trend="up"
          description="from yesterday"
          icon="revenue"
        />
        <DashboardStatCard
          title="Bookings"
          value={bookings.length}
          change="-3.1%"
          trend="down"
          description="from last hour"
          icon="bookings"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <ParkingRevenueChart />
        </Card>
        <Card className="p-6">
          <RecentBookings  bookings={bookings}/>
        </Card>
      </div> 
    </div>
  )
}
