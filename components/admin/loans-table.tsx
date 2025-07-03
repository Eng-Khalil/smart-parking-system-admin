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
import { MoreHorizontal } from "lucide-react";

export function LoansTable() {
  const [loans] = useState([
    {
      id: "L001",
      member: "John Doe",
      amount: "$5,000",
      purpose: "Business",
      status: "Pending",
      applicationDate: "Jun 15, 2023",
    },
    {
      id: "L002",
      member: "Jane Smith",
      amount: "$10,000",
      purpose: "Education",
      status: "Approved",
      applicationDate: "May 22, 2023",
    },
    {
      id: "L003",
      member: "Robert Johnson",
      amount: "$7,500",
      purpose: "Home Improvement",
      status: "Rejected",
      applicationDate: "Jun 5, 2023",
    },
    {
      id: "L004",
      member: "Emily Davis",
      amount: "$3,000",
      purpose: "Medical",
      status: "Approved",
      applicationDate: "Jun 10, 2023",
    },
    {
      id: "L005",
      member: "Michael Wilson",
      amount: "$15,000",
      purpose: "Business",
      status: "Overdue",
      applicationDate: "Apr 18, 2023",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input placeholder="Filter loans..." className="max-w-sm" />
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button>New Loan</Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Loan ID</TableHead>
              <TableHead>Member</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Purpose</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Application Date</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loans.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell className="font-medium">{loan.id}</TableCell>
                <TableCell>{loan.member}</TableCell>
                <TableCell>{loan.amount}</TableCell>
                <TableCell>{loan.purpose}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      loan.status === "Approved"
                        ? "default"
                        : loan.status === "Pending"
                        ? "outline"
                        : loan.status === "Overdue"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {loan.status}
                  </Badge>
                </TableCell>
                <TableCell>{loan.applicationDate}</TableCell>
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
                      <DropdownMenuItem>Approve loan</DropdownMenuItem>
                      <DropdownMenuItem>Reject loan</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Download statement</DropdownMenuItem>
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
