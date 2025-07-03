"use client";

import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "parkingSpot.slotNumber",
    header: ({ column }) => <SortableColumn column={column} title="Spot No"/>,
  },
  {
    accessorKey: "parkingLot.name",
    header: ({ column }) => <SortableColumn column={column} title="Lot Name"/>,
  },
  {
    accessorKey: "bookingStatus",
    header: ({ column }) => <SortableColumn column={column} title="Status"/>,
  },
 {
  accessorKey: "hours",
  header: ({ column }) => <SortableColumn column={column} title="Duration" />,
  cell: ({ row }) => {
    const isoTime = row.original?.hours;
    const date = isoTime ? new Date(isoTime) : null;
    const time = date ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : "N/A";
    return <span>{time}</span>;
  }
},
  // {
  //   accessorKey: "hours",
  //   header: ({ column }) => <SortableColumn column={column} title="Duration"/>,
  // },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
  id: "view",
  header: "View",
  cell: ({ row }) => {
    const booking = row.original;
    return (
      <Link href={`/dashboard/spotadmin/bookings/${booking.id}`}>
        <Button variant="outline" size="sm">
          View
        </Button>
      </Link>
    );
  },
},
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original;
      return (
        <ActionColumn
          row={row}
          model="booking"
          editEndpoint={`booking/update/${booking.id}`}
          id={booking.id}
        />
      );
    },
  },
];
