import type React from "react"
import { TellerDashboardLayout } from "@/components/layouts/teller-dashboard-layout"

export default function TellerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <TellerDashboardLayout>{children}</TellerDashboardLayout>
}
