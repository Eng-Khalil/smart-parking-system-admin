import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/dashboard/Tables/TableHeader";


export default async function page() {
  // const categories: SubCategory[] = (await getAllSubCategories()) || [];
  const categories=[
    {title:"dddddddddd"}
  ]
  return (
    <div className="p-8">
      <TableHeader
        title="Loans"
        linkTitle="Apply for loan"
        href="/dashboard/user/loans/new"
        data={categories}
        model="loan"
      />
      <div className="py-8">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
