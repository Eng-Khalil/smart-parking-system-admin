
import { getAllAreas } from "@/actions/areas";
import { getAllCities } from "@/actions/cities";
import { getAllRegions } from "@/actions/regions";
import { getAllStreets } from "@/actions/streets";
import CreateAreaForm from "@/components/user-componets/create-area-form";
import CreateStreetForm from "@/components/user-componets/create-street-form";
import CreateSpotForm from "@/components/user-componets/parking-spot-form";
import SpotForm from "@/components/user-componets/spot-form";
import React from "react";

export default async function page() {
  const regionData:any[] = (await getAllRegions()) || [];
   const cityData:any[] = (await getAllCities()) || [];
  const areaData:any[] = (await getAllAreas()) || [];
  const streetData:any[] = (await getAllStreets()) || [];
 
  const regions=regionData.map((item:any,i:any)=>{
    return(
      {
        label:item.name,
       value:item.id
      }
    )
  })
  const cities=cityData.map((item:any,i:any)=>{
    return(
      {
        label:item.name,
       value:item.id,
       regionId:item.region.id,
      }
    )
  })
  const areas=areaData.map((item:any,i:any)=>{
    return(
      {
        label:item.name,
       value:item.id,
       cityId:item.city.id
      }
    )
  })
  const streets=streetData.map((item:any,i:any)=>{
    return(
      {
        label:item.name,
       value:item.id,
       areaId:item.area.id
      }
    )
  })

 

  return (
    <div className="p-8">
      <CreateSpotForm regions={regions} cities={cities} areas={areas} streets={streets}/>
    </div>
  );
}


