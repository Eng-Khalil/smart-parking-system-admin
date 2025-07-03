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

export function LoanStatusTable() {
  const [loans] = useState([
    {
      id: "L001",
      member: "John Doe",
      amount: "$5,000",
      balance: "$4,500",
      nextPayment: "Jul 30, 2023",
      status: "Active",
    },
    {
      id: "L002",
      member: "Jane Smith",
      amount: "$10,000",
      balance: "$8,750",
      nextPayment: "Jul 25, 2023",
      status: "Active",
    },
    {
      id: "L003",
      member: "Robert Johnson",
      amount: "$7,500",
      balance: "$7,500",
      nextPayment: "Aug 5, 2023",
      status: "Pending",
    },
    {
      id: "L004",
      member: "Emily Davis",
      amount: "$3,000",
      balance: "$1,200",
      nextPayment: "Jul 20, 2023",
      status: "Active",
    },
    {
      id: "L005",
      member: "Michael Wilson",
      amount: "$15,000",
      balance: "$12,500",
      nextPayment: "Jul 15, 2023",
      status: "Overdue",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input placeholder="Filter loans..." className="max-w-sm" />
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button>Process Payment</Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Loan ID</TableHead>
              <TableHead>Member</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Next Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loans.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell className="font-medium">{loan.id}</TableCell>
                <TableCell>{loan.member}</TableCell>
                <TableCell>{loan.amount}</TableCell>
                <TableCell>{loan.balance}</TableCell>
                <TableCell>{loan.nextPayment}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      loan.status === "Active"
                        ? "default"
                        : loan.status === "Pending"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {loan.status}
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
                      <DropdownMenuItem>Process payment</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Generate statement</DropdownMenuItem>
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
