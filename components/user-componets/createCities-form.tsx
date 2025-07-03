"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import TextInput from "../FormInputs/TextInput";
import FormHeader from "../FormInputs/FormHeader";
import FormFooter from "./FormFooter";

import FormSelectInput from "../admin/FormSelectInput";
import { createCity } from "@/actions/cities";

type RegionFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  regions:any[]
};

export default function CreateCityForm({
  editingId,
  initialData,
  regions
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
    const [selectedRegion,setSelectedRegion]=useState<any>(regions[0]);
  
   

  async function saveData(data: any) {
    try {
      setLoading(true);

      const cityData = {
        name: data.name,
        regionId:selectedRegion.value
      };
      console.log(cityData);

      await createCity(cityData);

      toast.success("city created successfully");
      reset();
      router.push("/dashboard/admin/cities");
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/admin/cities"
        parent=""
        title="cities"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                {editingId ? "Update this city" : "Add a new city"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="City Name"
                  name="name"
                  placeholder="e.g. Kampala"
                />
                 <FormSelectInput
                                  label="Region"
                                  options={regions}
                                  option={selectedRegion}
                                  setOption={setSelectedRegion}
                                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FormFooter
        href="/dashboard/cities"
        editingId={editingId}
        loading={loading}
        title="city"
        parent=""
      />
    </form>
  );
}
