"use client";
import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import { Eye } from "lucide-react";
import Link from "next/link";
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
    accessorKey: "imageUrl",
    header: "User Avator",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },
  {
  id: "name",
  header: ({ column }) => <SortableColumn column={column} title="Name" />,
  cell: ({ row }) => {
    const firstName = row.original?.firstName || "";
    const lastName = row.original?.lastName || "";
    const fullName = `${firstName} ${lastName}`.trim();
    return <span>{fullName || "N/A"}</span>;
  },
},
 {
    accessorKey: "role",
    header: ({ column }) => <SortableColumn column={column} title="Role" />,
  },
  {
  accessorKey: "createdAt",
  header: "Date Created",
  cell: ({ row }) => {
    const date = row.original?.createdAt;
    const userId = row.original?.id; // or .userId depending on your structure
    const formattedDate = date ? new Date(date).toLocaleString() : "N/A";

    return (
      <div className="flex flex-col space-y-1">
        <span>{formattedDate}</span>
        {userId && (
          <Link
            href={`/dashboard/admin/members/${userId}`}
            className="text-blue-500 flex gap-2 hover:underline text-sm"
          >
            <Eye/> View Details
          </Link>
        )}
      </div>
    );
  },
},


  // {
  //   accessorKey: "createdAt",
  //   header: "Date Created",
  //   cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
    
  // },
];
