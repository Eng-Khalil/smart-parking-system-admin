
import { getAllRegions } from "@/actions/regions";
import CreateSavingsForm from "@/components/user-componets/create-savings-form";
import CreateCityForm from "@/components/user-componets/createCities-form";
import CreateRegionForm from "@/components/user-componets/createRegion";
import { title } from "process";
// import { Category} from "@prisma/client";
import React from "react";

export default async function page() {
  const regionsData:any[] = (await getAllRegions()) || [];
  const regions=regionsData.map((item:any,i:any)=>{
    return(
      {
        label:item.name,
       value:item.id
      }
    )
  })

 

  return (
    <div className="p-8">
      <CreateCityForm regions={regions}/>
    </div>
  );
}


