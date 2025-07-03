import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getAllUsers } from "@/actions/auth";

export default async function page() {
  const users:any[] = (await getAllUsers()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Members"
        linkTitle="Add User"
        href="/dashboard/admin/members/new"
        data={users}
        model="user"
      />
      <div className="py-8">
        <DataTable data={users} columns={columns} />
      </div>
    </div>
  );
}
