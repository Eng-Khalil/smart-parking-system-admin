
import { getAllCities } from "@/actions/cities";
import CreateAreaForm from "@/components/user-componets/create-area-form";

import CreateCityForm from "@/components/user-componets/createCities-form";
import React from "react";

export default async function page() {
  const cityData:any[] = (await getAllCities()) || [];
  const cities=cityData.map((item:any,i:any)=>{
    return(
      {
        label:item.name,
       value:item.id
      }
    )
  })

 

  return (
    <div className="p-8">
      <CreateAreaForm cities={cities}/>
    </div>
  );
}


