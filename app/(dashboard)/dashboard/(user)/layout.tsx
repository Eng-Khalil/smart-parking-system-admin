import React, { ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { AppSidebar } from "@/components/user-componets/app-siderbar"
import { DataTable } from "@/components/user-componets/data-table"
import { ChartAreaInteractive } from "@/components/user-componets/chart-area-interactive"
import UserDashboard from "@/components/user-componets/section-cards"
import { UserFinancialChart } from "@/components/user-componets/user-financial"
import { SiteHeader } from "@/components/user-componets/site-header"

export default function layout({ children }: { children: ReactNode }) {
  return <div>
      <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
           {children}
      </SidebarInset>
    </SidebarProvider>
 
    </div>;
}
