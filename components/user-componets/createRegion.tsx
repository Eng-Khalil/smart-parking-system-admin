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

import { createRegion } from "@/actions/regions";

type RegionFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export default function CreateRegionForm({
  editingId,
  initialData,
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
   

  async function saveData(data: any) {
    try {
      setLoading(true);

      const regionData = {
        name: data.name,
      };

      await createRegion(regionData);

      toast.success("Region created successfully");
      reset();
      router.push("/dashboard/admin/regions");
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/admin/regions"
        parent=""
        title="regions"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                {editingId ? "Update this region" : "Add a new region"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Region Name"
                  name="name"
                  placeholder="e.g. Central Region"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FormFooter
        href="/dashboard/regions"
        editingId={editingId}
        loading={loading}
        title="region"
        parent="Locations"
      />
    </form>
  );
}
