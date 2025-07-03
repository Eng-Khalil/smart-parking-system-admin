
import { getAllAreas } from "@/actions/areas";
import CreateAreaForm from "@/components/user-componets/create-area-form";
import CreateStreetForm from "@/components/user-componets/create-street-form";
import React from "react";

export default async function page() {
  const areaData:any[] = (await getAllAreas()) || [];
  const areas=areaData.map((item:any,i:any)=>{
    return(
      {
        label:item.name,
       value:item.id
      }
    )
  })

 

  return (
    <div className="p-8">
      <CreateStreetForm areas={areas}/>
    </div>
  );
}


