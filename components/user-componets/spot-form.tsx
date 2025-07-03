// "use client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
// } from "@/components/ui/card";
// import { useRouter } from "next/navigation";
// import { useEffect, useState, useMemo } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// import TextInput from "../FormInputs/TextInput";
// import FormHeader from "../FormInputs/FormHeader";
// import FormFooter from "./FormFooter";
// import FormSelectInput from "../admin/FormSelectInput";
// import { createParkingSpot } from "@/actions/parkingSpots"; // Adjust this import

// type SpotFormProps = {
//   editingId?: string | undefined;
//   initialData?: any | undefined | null;
//   regions: any[];
//   cities: any[];
//   areas: any[];
//   streets: any[];
//   parkingLots: any[]; // Include parking lots to associate a spot
// };

// export default function SpotForm({
//   editingId,
//   initialData,
//   regions,
//   cities,
//   areas,
//   streets,
//   parkingLots,
// }: SpotFormProps) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<any>({
//     defaultValues: {
//       slotCode: initialData?.slotCode || "",
//       slotNumber: initialData?.slotNumber || 1,
//       pricePerHour: initialData?.pricePerHour || 0,
//     },
//   });

//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const [selectedRegion, setSelectedRegion] = useState<any>(regions[0]);
//   const [selectedCity, setSelectedCity] = useState<any>(cities[0]);
//   const [selectedArea, setSelectedArea] = useState<any>(areas[0]);
//   const [selectedStreet, setSelectedStreet] = useState<any>(streets[0]);
//   const [selectedLot, setSelectedLot] = useState<any>(parkingLots[0]);

//   const filteredCities = useMemo(() => {
//     return cities.filter((city) => city.regionId === selectedRegion?.value);
//   }, [cities, selectedRegion]);

//   const filteredAreas = useMemo(() => {
//     return areas.filter((area) => area.cityId === selectedCity?.value);
//   }, [areas, selectedCity]);

//   const filteredStreets = useMemo(() => {
//     return streets.filter((street) => street.areaId === selectedArea?.value);
//   }, [streets, selectedArea]);

//   useEffect(() => {
//     if (!filteredCities.some((c) => c.value === selectedCity?.value) && filteredCities.length > 0) {
//       setSelectedCity(filteredCities[0]);
//     }
//   }, [filteredCities, selectedCity]);

//   useEffect(() => {
//     if (!filteredAreas.some((a) => a.value === selectedArea?.value) && filteredAreas.length > 0) {
//       setSelectedArea(filteredAreas[0]);
//     }
//   }, [filteredAreas, selectedArea]);

//   useEffect(() => {
//     if (!filteredStreets.some((s) => s.value === selectedStreet?.value) && filteredStreets.length > 0) {
//       setSelectedStreet(filteredStreets[0]);
//     }
//   }, [filteredStreets, selectedStreet]);

//   async function saveData(data: any) {
//     try {
//       setLoading(true);

//       const payload = {
//         slotCode: data.slotCode,
//         slotNumber: parseFloat(data.slotNumber),
//         pricePerHour: parseFloat(data.pricePerHour),
//         streetId: selectedStreet.value,
//         parkingLotId: selectedLot.value,
//         spotStatus: data.spotStatus || "AVAILABLE",
//       };

//       await createParkingSpot(payload); // <- Update API call
//       toast.success("Parking spot created successfully");
//       reset();
//       router.push("/dashboard/admin/parking-spots");
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//       setLoading(false);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(saveData)}>
//       <FormHeader
//         href="/dashboard/admin/parking-spots"
//         parent=""
//         title="parking spots"
//         editingId={editingId}
//         loading={loading}
//       />

//       <div className="grid grid-cols-12 gap-6 py-8">
//         <div className="lg:col-span-12 col-span-full space-y-3">
//           <Card>
//             <CardHeader>
//               <CardDescription>
//                 {editingId ? "Update this spot" : "Add a new spot"}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-3 gap-6">
//                 <TextInput
//                   register={register}
//                   errors={errors}
//                   label="Slot Code"
//                   name="slotCode"
//                   placeholder="e.g. A1"
//                 />

//                 <TextInput
//                   register={register}
//                   errors={errors}
//                   label="Slot Number"
//                   name="slotNumber"
//                   placeholder="e.g. 1"
//                   type="number"
//                 />

//                 <TextInput
//                   register={register}
//                   errors={errors}
//                   label="Price per Hour"
//                   name="pricePerHour"
//                   placeholder="e.g. 1000"
//                   type="number"
//                 />

//                 <FormSelectInput
//                   label="Region"
//                   options={regions}
//                   option={selectedRegion}
//                   setOption={setSelectedRegion}
//                 />
//                 <FormSelectInput
//                   label="City"
//                   options={filteredCities}
//                   option={selectedCity}
//                   setOption={setSelectedCity}
//                 />
//                 <FormSelectInput
//                   label="Area"
//                   options={filteredAreas}
//                   option={selectedArea}
//                   setOption={setSelectedArea}
//                 />
//                 <FormSelectInput
//                   label="Street"
//                   options={filteredStreets}
//                   option={selectedStreet}
//                   setOption={setSelectedStreet}
//                 />

//                 <FormSelectInput
//                   label="Parking Lot"
//                   options={parkingLots}
//                   option={selectedLot}
//                   setOption={setSelectedLot}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       <FormFooter
//         href="/dashboard/admin/parking-spots"
//         editingId={editingId}
//         loading={loading}
//         title="parking spot"
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
import { createParkingSpot } from "@/actions/parkingSpots";

type SpotFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  regions: any[];
  cities: any[];
  areas: any[];
  streets: any[];
  parkingLots: any[];
};

export default function SpotForm({
  editingId,
  initialData,
  regions,
  cities,
  areas,
  streets,
  parkingLots,
}: SpotFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      slotCode: initialData?.slotCode || "",
      slotNumber: initialData?.slotNumber || 1,
      pricePerHour: initialData?.pricePerHour || 0,
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [userLotId, setUserLotId] = useState<string | null>(null);

  const [selectedRegion, setSelectedRegion] = useState<any>(regions[0]);
  const [selectedCity, setSelectedCity] = useState<any>(cities[0]);
  const [selectedArea, setSelectedArea] = useState<any>(areas[0]);
  const [selectedStreet, setSelectedStreet] = useState<any>(streets[0]);
  const [selectedLot, setSelectedLot] = useState<any>(parkingLots[0]);

  // ✅ Fetch the session user to get parkingLotId
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/session");
        const data = await res.json();
        setUserLotId(data?.parkingLotId || null);
      } catch (error) {
        console.error("Failed to fetch user session:", error);
      }
    };
    fetchSession();
  }, []);

  // ✅ Filter and auto-select the user's assigned parking lot
  useEffect(() => {
    if (userLotId) {
      const filtered = parkingLots.filter((lot) => lot.value === userLotId);
      setSelectedLot(filtered[0] ?? parkingLots[0]);
    }
  }, [userLotId, parkingLots]);

  const filteredCities = useMemo(() => {
    return cities.filter((city) => city.regionId === selectedRegion?.value);
  }, [cities, selectedRegion]);

  const filteredAreas = useMemo(() => {
    return areas.filter((area) => area.cityId === selectedCity?.value);
  }, [areas, selectedCity]);

  const filteredStreets = useMemo(() => {
    return streets.filter((street) => street.areaId === selectedArea?.value);
  }, [streets, selectedArea]);

  useEffect(() => {
    if (!filteredCities.some((c) => c.value === selectedCity?.value) && filteredCities.length > 0) {
      setSelectedCity(filteredCities[0]);
    }
  }, [filteredCities, selectedCity]);

  useEffect(() => {
    if (!filteredAreas.some((a) => a.value === selectedArea?.value) && filteredAreas.length > 0) {
      setSelectedArea(filteredAreas[0]);
    }
  }, [filteredAreas, selectedArea]);

  useEffect(() => {
    if (!filteredStreets.some((s) => s.value === selectedStreet?.value) && filteredStreets.length > 0) {
      setSelectedStreet(filteredStreets[0]);
    }
  }, [filteredStreets, selectedStreet]);

  async function saveData(data: any) {
    try {
      setLoading(true);

      const payload = {
        slotCode: data.slotCode,
        slotNumber: parseFloat(data.slotNumber),
        pricePerHour: parseFloat(data.pricePerHour),
        streetId: selectedStreet.value,
        parkingLotId: selectedLot.value,
        spotStatus: data.spotStatus || "AVAILABLE",
      };

      await createParkingSpot(payload);
      toast.success("Parking spot created successfully");
      reset();
      router.push("/dashboard/admin/parking-spots");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/dashboard/admin/parking-spots"
        parent=""
        title="parking spots"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                {editingId ? "Update this spot" : "Add a new spot"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Slot Code"
                  name="slotCode"
                  placeholder="e.g. A1"
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Slot Number"
                  name="slotNumber"
                  placeholder="e.g. 1"
                  type="number"
                />

                <TextInput
                  register={register}
                  errors={errors}
                  label="Price per Hour"
                  name="pricePerHour"
                  placeholder="e.g. 1000"
                  type="number"
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

                <FormSelectInput
                  label="Parking Lot"
                  options={
                    userLotId
                      ? parkingLots.filter((lot) => lot.value === userLotId)
                      : parkingLots
                  }
                  option={selectedLot}
                  setOption={setSelectedLot}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FormFooter
        href="/dashboard/admin/parking-spots"
        editingId={editingId}
        loading={loading}
        title="parking spot"
        parent=""
      />
    </form>
  );
}
