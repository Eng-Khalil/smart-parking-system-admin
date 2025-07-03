"use client";

import Image from "next/image";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import SavingDetailsModal from "@/components/savings/savind-detail-pop-up";
import { useState } from "react";
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
    accessorKey: "amount",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "user.firstName",
    header: ({ column }) => <SortableColumn column={column} title="Deposited by" />,
  },
  {
    accessorKey: "savingType",
    header: ({ column }) => <SortableColumn column={column} title="Saving Type" />,
  },
  {
    accessorKey: "createdAt",
    header: "Deposit date",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
   {
    id: "view",
    header: "View",
    cell: ({ row }) => {
      const [open, setOpen] = useState(false);
      const saving = row.original;

      return (
        <>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(true)}
          >
            View
          </Button>
          <SavingDetailsModal
            open={open}
            onOpenChange={setOpen}
            saving={saving}
          />
        </>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const subcategory = row.original;
      return (
       <div className="hidden">
         <ActionColumn
          row={row}
          model="subcategory"
          editEndpoint={`subcategories/update/${subcategory.id}`}
          id={subcategory.id}
        />
       </div>
      );
    },
  },
];
