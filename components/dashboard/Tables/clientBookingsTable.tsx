// components/dashboard/Bookings/ClientBookingsTable.tsx
"use client";

import { columns } from "../../../app/(dashboard)/dashboard/(admin)/admin/bookings/columns";
import DataTable from "@/components/DataTableComponents/DataTable";

export default function ClientBookingsTable({ data }: { data: any[] }) {
  return <DataTable columns={columns} data={data} />;
}
