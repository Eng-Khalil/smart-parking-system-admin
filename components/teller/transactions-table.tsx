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
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TransactionsTable() {
  const [transactions] = useState([
    {
      id: "T001",
      member: "John Doe",
      type: "Deposit",
      amount: "$1,000",
      date: "Jul 15, 2023 10:23 AM",
      status: "Completed",
    },
    {
      id: "T002",
      member: "Jane Smith",
      type: "Withdrawal",
      amount: "$500",
      date: "Jul 15, 2023 11:05 AM",
      status: "Completed",
    },
    {
      id: "T003",
      member: "Robert Johnson",
      type: "Loan Repayment",
      amount: "$750",
      date: "Jul 15, 2023 12:30 PM",
      status: "Pending",
    },
    {
      id: "T004",
      member: "Emily Davis",
      type: "Deposit",
      amount: "$2,000",
      date: "Jul 15, 2023 02:15 PM",
      status: "Completed",
    },
    {
      id: "T005",
      member: "Michael Wilson",
      type: "Withdrawal",
      amount: "$1,500",
      date: "Jul 15, 2023 03:00 PM",
      status: "Failed",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input placeholder="Search transactions..." className="max-w-sm" />
        <Button variant="outline">Export</Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Member</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.member}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.type === "Deposit"
                        ? "default"
                        : transaction.type === "Withdrawal"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "Completed"
                        ? "default"
                        : transaction.status === "Pending"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {transaction.status}
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
                      <DropdownMenuItem>Print receipt</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Reverse transaction</DropdownMenuItem>
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
