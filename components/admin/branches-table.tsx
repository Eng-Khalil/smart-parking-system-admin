"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Plus } from "lucide-react";

export function BranchesTable() {
  const [branches] = useState([
    {
      id: "B001",
      name: "Main Branch",
      location: "Kampala Central",
      manager: "Robert Johnson",
      staff: 12,
      status: "Active",
    },
    {
      id: "B002",
      name: "Eastern Branch",
      location: "Jinja",
      manager: "Sarah Williams",
      staff: 8,
      status: "Active",
    },
    {
      id: "B003",
      name: "Northern Branch",
      location: "Gulu",
      manager: "David Okello",
      staff: 6,
      status: "Active",
    },
    {
      id: "B004",
      name: "Western Branch",
      location: "Mbarara",
      manager: "Patricia Mbabazi",
      staff: 7,
      status: "Inactive",
    },
    {
      id: "B005",
      name: "Southern Branch",
      location: "Masaka",
      manager: "Unassigned",
      staff: 5,
      status: "Under Construction",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input placeholder="Filter branches..." className="max-w-sm" />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Branch
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Branch ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Staff Count</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {branches.map((branch) => (
              <TableRow key={branch.id}>
                <TableCell className="font-medium">{branch.id}</TableCell>
                <TableCell>{branch.name}</TableCell>
                <TableCell>{branch.location}</TableCell>
                <TableCell>{branch.manager}</TableCell>
                <TableCell>{branch.staff}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      branch.status === "Active"
                        ? "default"
                        : branch.status === "Inactive"
                        ? "destructive"
                        : "outline"
                    }
                  >
                    {branch.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit branch</DropdownMenuItem>
                      <DropdownMenuItem>Assign manager</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Deactivate branch
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
