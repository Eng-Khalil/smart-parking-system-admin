
import CreateSavingsForm from "@/components/user-componets/create-savings-form";
import { title } from "process";
// import { Category} from "@prisma/client";
import React from "react";

export default async function page() {

  return (
    <div className="p-8">
      <CreateSavingsForm />
    </div>
  );
}


