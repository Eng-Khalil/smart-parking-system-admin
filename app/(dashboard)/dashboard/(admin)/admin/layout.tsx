import { AdminDashboardLayout } from "@/components/admin/admin-dashboard-layout";
import type React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminDashboardLayout>
    {children}
    </AdminDashboardLayout>;
}
