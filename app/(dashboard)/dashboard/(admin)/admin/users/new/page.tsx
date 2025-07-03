
import { getAllParkingLots } from "@/actions/parkingLots";
import CreateUserForm from "@/components/admin/create-user-form";
import CreateSavingsForm from "@/components/user-componets/create-savings-form";
import { title } from "process";
// import { Category} from "@prisma/client";
import React from "react";

export default async function page() {
   const parkingLots:any[] = (await getAllParkingLots()) || [];

    const lots= parkingLots.map((item:any,i:any)=>{
    return(
      {
        label:item.name,
        value:item.id
      }
    )
  })



  return (
    <div className="p-8">
      <CreateUserForm  lots={lots}/>
    </div>
  );
}


