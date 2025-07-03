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

export function AuditLogsTable() {
  const [logs] = useState([
    {
      id: "AL001",
      user: "John Admin",
      action: "User Created",
      details: "Created user: Jane Smith",
      timestamp: "Jul 15, 2023 10:23 AM",
      ipAddress: "192.168.1.1",
    },
    {
      id: "AL002",
      user: "Sarah Manager",
      action: "Loan Approved",
      details: "Approved loan: L002 for $10,000",
      timestamp: "Jul 15, 2023 11:05 AM",
      ipAddress: "192.168.1.2",
    },
    {
      id: "AL003",
      user: "Tom Teller",
      action: "Deposit",
      details: "Processed deposit: $5,000 for John Doe",
      timestamp: "Jul 15, 2023 12:30 PM",
      ipAddress: "192.168.1.3",
    },
    {
      id: "AL004",
      user: "John Admin",
      action: "Settings Changed",
      details: "Updated system interest rates",
      timestamp: "Jul 15, 2023 02:15 PM",
      ipAddress: "192.168.1.1",
    },
    {
      id: "AL005",
      user: "System",
      action: "Backup Completed",
      details: "Daily database backup completed successfully",
      timestamp: "Jul 15, 2023 03:00 PM",
      ipAddress: "127.0.0.1",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input placeholder="Search logs..." className="max-w-sm" />
        <Button variant="outline">Export Logs</Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Log ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>IP Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.id}</TableCell>
                <TableCell>
                  {log.user === "System" ? (
                    <Badge variant="outline">System</Badge>
                  ) : (
                    log.user
                  )}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      log.action === "Loan Approved"
                        ? "secondary" // Map "success" to "secondary"
                        : log.action === "Settings Changed"
                        ? "destructive" // Map "warning" to "destructive"
                        : "secondary"
                    }
                  >
                    {log.action}
                  </Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {log.details}
                </TableCell>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>{log.ipAddress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
