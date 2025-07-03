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
import TextArea from "../FormInputs/TextAreaInput";
import { Label } from "../ui/label";
// import { Switch } from "../ui/switch";
import FormHeader from "../FormInputs/FormHeader";
import FormFooter from "./FormFooter";
import FormSelectInput from "../admin/FormSelectInput";
import { createSaving } from "@/actions/savings";

// Define SavingType enum (replacing Category)
export enum SavingType {
  REGULAR = "REGULAR",
  EMERGENCY = "EMERGENCY",
  RETIREMENT = "RETIREMENT",
  EDUCATION = "EDUCATION",
  VACATION = "VACATION",
  OTHER = "OTHER"
}

export type SelectOptionProps = {
  label: string;
  value: string;
};

type SavingsFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  savingTypes?: any | undefined | null;
  session?: any | undefined | null;
};

export default function CreateSavingsForm({
  editingId,
  initialData,
  savingTypes = [
    { label: "Regular Savings", value: "REGULAR" },
    { label: "Emergency Fund", value: "EMERGENCY" },
    { label: "Retirement Savings", value: "RETIREMENT" },
    { label: "Education Fund", value: "EDUCATION" },
    { label: "Vacation Fund", value: "VACATION" },
    { label: "Fixed deposit", value: "FIXED_DEPOSIT" },
    { label: "Other", value: "OTHER" },
  ],
}: SavingsFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      amount: initialData?.amount || 0,
    },
  });

  
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedSavingType, setSelectedSavingType] = useState<any>(savingTypes[0]);


  const [session, setSession] = useState<any>();
  useEffect(() => {
    fetch("/api/session")
      .then(res => res.json())
      .then(data => setSession(data));
  }, []);

  async function saveData(data: any) {
    try {
      setLoading(true);
      // DEFINING SAVINGS DATA
      const savingsData = {
        userId: session?.user.id,
        amount: parseFloat(data.amount),
        savingType: selectedSavingType.value,
      };

         await createSaving(savingsData);
      toast.success("Saving created successfully")   ;
      toast.success("saving registered successfully")
      reset();
      router.push("/dashboard/user/savings")
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/dashboard/savings"
        parent="Finance"
        title="savings"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                {editingId ? "Update your savings entry" : "Add a new savings entry"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Amount"
                    name="amount"
                    type="number"

                  />
                  
                  <FormSelectInput
                    label="Saving Type"
                    options={savingTypes}
                    option={selectedSavingType}
                    setOption={setSelectedSavingType}
                    toolTipText="Select Saving Type"
                  />
                
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
     
      <FormFooter
        href="/dashboard/savings"
        editingId={editingId}
        loading={loading}
        title="savings entry"
        parent="Finance"
      />
    </form>
  );
}