// "use client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
// } from "@/components/ui/card";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// import toast from "react-hot-toast";
// import TextInput from "../FormInputs/TextInput";
// import FormHeader from "../FormInputs/FormHeader";
// import FormFooter from "./FormFooter";

// import FormSelectInput from "../admin/FormSelectInput";
// import { createCity } from "@/actions/cities";
// import { createArea } from "@/actions/areas";
// import { createStreet } from "@/actions/streets";
// import { createParkingLot } from "@/actions/parkingLots";

// type RegionFormProps = {
//   editingId?: string | undefined;
//   initialData?: any | undefined | null;
//   areas:any[];
//   regions:any[];
//   streets:any[];
//   cities:any[];
// };

// export default function CreateSpotForm({
//   editingId,
//   initialData,
//   areas,
//   regions,
//   streets,
//   cities
// }: RegionFormProps) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<any>({
//     defaultValues: {
//       name: initialData?.name || "",
//     },
//   });

   
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//     const [selectedRegion,setSelectedRegion]=useState<any>(regions[0]);
//     const [selectedCity,setSelectedCity]=useState<any>(cities[0]);
//     const [selectedArea,setSelectedArea]=useState<any>(areas[0]);
//     const [selectedStreet,setSelectedStreet]=useState<any>(streets[0]);
  
   

//   async function saveData(data: any) {
//     try {
//       setLoading(true);

//       const lotData = {
//         name: data.name,
//         regionId:selectedRegion.value,
//         cityId:selectedCity.value,
//         streetId:selectedStreet.value,
//         areaId:selectedArea.value,
//       };

//       await createParkingLot(lotData);

//       toast.success("parking lot created successfully");
//       reset();
//       router.push("/dashboard/admin/parking-lot");
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//       toast.error("Something went wrong!");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(saveData)}>
//       <FormHeader
//         href="/admin/streets"
//         parent=""
//         title="streets"
//         editingId={editingId}
//         loading={loading}
//       />

//       <div className="grid grid-cols-12 gap-6 py-8">
//         <div className="lg:col-span-10 col-span-full space-y-3">
//           <Card>
//             <CardHeader>
//               <CardDescription>
//                 {editingId ? "Update this area" : "Add a new area"}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-2 gap-6">
//                 <TextInput
//                   register={register}
//                   errors={errors}
//                   label="street Name"
//                   name="name"
//                   placeholder="e.g. Spenders Lounge"
//                 />
//                  <FormSelectInput
//                                   label="Region"
//                                   options={regions}
//                                   option={selectedRegion}
//                                   setOption={setSelectedRegion}
//                                 />
//                  <FormSelectInput
//                                   label="City"
//                                   options={cities}
//                                   option={selectedCity}
//                                   setOption={setSelectedCity}
//                                 />
//                  <FormSelectInput
//                                   label="Area"
//                                   options={areas}
//                                   option={selectedArea}
//                                   setOption={setSelectedArea}
//                                 />
//                  <FormSelectInput
//                                   label="Street"
//                                   options={streets}
//                                   option={selectedStreet}
//                                   setOption={setSelectedStreet}
//                                 />
//                   <TextInput
//                   register={register}
//                   errors={errors}
//                   label="Address"
//                   name="address"
//                   placeholder="address"
//                 />
//                   <TextInput
//                   register={register}
//                   errors={errors}
//                   label="Plot No"
//                   name="plotNo"
//                   placeholder="plot"
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       <FormFooter
//         href="/dashboard/parking-lots"
//         editingId={editingId}
//         loading={loading}
//         title="parking lot"
//         parent=""
//       />
//     </form>
//   );
// }

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import TextInput from "../FormInputs/TextInput";
import FormHeader from "../FormInputs/FormHeader";
import FormFooter from "./FormFooter";
import FormSelectInput from "../admin/FormSelectInput";
import { createParkingLot } from "@/actions/parkingLots";

type RegionFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  areas: any[];
  regions: any[];
  streets: any[];
  cities: any[];
};

export default function CreateSpotForm({
  editingId,
  initialData,
  areas,
  regions,
  streets,
  cities,
}: RegionFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      name: initialData?.name || "",
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState<any>(regions[0]);
  const [selectedCity, setSelectedCity] = useState<any>(cities[0]);
  const [selectedArea, setSelectedArea] = useState<any>(areas[0]);
  const [selectedStreet, setSelectedStreet] = useState<any>(streets[0]);

  // Filter cities by selected region
  const filteredCities = useMemo(() => {
    return cities.filter((city) => city.regionId === selectedRegion?.value);
  }, [cities, selectedRegion]);

  // Reset selected city if invalid
  useEffect(() => {
    if (
      !filteredCities.some((city) => city.value === selectedCity?.value) &&
      filteredCities.length > 0
    ) {
      setSelectedCity(filteredCities[0]);
    }
  }, [filteredCities, selectedCity]);

  // Filter areas by selected city
  const filteredAreas = useMemo(() => {
    return areas.filter((area) => area.cityId === selectedCity?.value);
  }, [areas, selectedCity]);

  // Reset selected area if invalid
  useEffect(() => {
    if (
      !filteredAreas.some((area) => area.value === selectedArea?.value) &&
      filteredAreas.length > 0
    ) {
      setSelectedArea(filteredAreas[0]);
    }
  }, [filteredAreas, selectedArea]);

  // Filter streets by selected area
  const filteredStreets = useMemo(() => {
    return streets.filter((street) => street.areaId === selectedArea?.value);
  }, [streets, selectedArea]);

  // Reset selected street if invalid
  useEffect(() => {
    if (
      !filteredStreets.some((street) => street.value === selectedStreet?.value) &&
      filteredStreets.length > 0
    ) {
      setSelectedStreet(filteredStreets[0]);
    }
  }, [filteredStreets, selectedStreet]);

  async function saveData(data: any) {
    try {
      setLoading(true);
       data.address= data.address,
        data.plotNo=data.plotNo,
        data.regionId=selectedRegion.value,
        data.cityId= selectedCity.value,
        data.areaId= selectedArea.value,
        data.streetId=selectedStreet.value,
        data.latitude=parseFloat(data.latitude),
        data.capacity=parseFloat(data.capacity),
        data.longitude=parseFloat(data.longitude)

      // const lotData = {
      //   name: data.name,
      //   address: data.address,
      //   plotNo: data.plotNo,
      //   regionId: selectedRegion.value,
      //   cityId: selectedCity.value,
      //   areaId: selectedArea.value,
      //   streetId: selectedStreet.value,
      // };
      console.log(data);

      await createParkingLot(data);

      toast.success("Parking lot created successfully");
      reset();
      router.push("/dashboard/admin/parking-lots");
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/admin/parking-lots"
        parent=""
        title="parking lots"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                {editingId ? "Update this lot" : "Add a new lot"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Parking lot Name"
                  name="name"
                  placeholder="e.g. Spenders Lounge"
                />

                <FormSelectInput
                  label="Region"
                  options={regions}
                  option={selectedRegion}
                  setOption={setSelectedRegion}
                />

                <FormSelectInput
                  label="City"
                  options={filteredCities}
                  option={selectedCity}
                  setOption={setSelectedCity}
                />

                <FormSelectInput
                  label="Area"
                  options={filteredAreas}
                  option={selectedArea}
                  setOption={setSelectedArea}
                />

                <FormSelectInput
                  label="Street"
                  options={filteredStreets}
                  option={selectedStreet}
                  setOption={setSelectedStreet}
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Address"
                  name="address"
                  placeholder="Address"
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Plot No"
                  name="plotNo"
                  placeholder="Plot Number"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Latitude"
                  name="latitude"
                  placeholder="eg 43.05"
                  // type="number"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Longitude"
                  // type="number"
                  name="longitude"
                  placeholder="e.g 00.56"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Opening hour"
                  name="openingHour"
                  placeholder=""
                  type="time"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Closing hour"
                  name="closingHour"
                  placeholder=""
                  type="time"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="price per hour"
                  name="pricePerHour"
                  placeholder="e.g 40"
                  type="number"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Capacity"
                  name="capacity"
                  placeholder="e.g 40"
                  type="number"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Security level"
                  name="securityLevel"
                  placeholder="e.g high"
              
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FormFooter
        href="/dashboard/parking-lots"
        editingId={editingId}
        loading={loading}
        title="parking lot"
        parent=""
      />
    </form>
  );
}
