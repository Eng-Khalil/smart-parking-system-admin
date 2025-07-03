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
import { createArea } from "@/actions/areas";
import { createStreet } from "@/actions/streets";

type RegionFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  areas:any[]
};

export default function CreateStreetForm({
  editingId,
  initialData,
  areas
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
    const [selectedArea,setSelectedArea]=useState<any>(areas[0]);
  
   

  async function saveData(data: any) {
    try {
      setLoading(true);

      const streetData = {
        name: data.name,
        areaId:selectedArea.value
      };

      await createStreet(streetData);

      toast.success("street created successfully");
      reset();
      router.push("/dashboard/admin/streets");
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/admin/streets"
        parent=""
        title="streets"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                {editingId ? "Update this area" : "Add a new area"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="street Name"
                  name="name"
                  placeholder="e.g. Luthuli Avenue"
                />
                 <FormSelectInput
                                  label="Area"
                                  options={areas}
                                  option={selectedArea}
                                  setOption={setSelectedArea}
                                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FormFooter
        href="/dashboard/streets"
        editingId={editingId}
        loading={loading}
        title="street"
        parent=""
      />
    </form>
  );
}
