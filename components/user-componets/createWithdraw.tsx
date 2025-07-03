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
import { createSaving } from "@/actions/savings";
import { createWithdrawal } from "@/actions/withdraws";


type SavingsFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  session?: any | undefined | null;
};

export default function CreateWithdrawForm({
  editingId,
  initialData,
 
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

  const [session, setSession] = useState<any>();
  useEffect(() => {
    fetch("/api/session")
      .then(res => res.json())
      .then(data => setSession(data));
  }, []);

  async function saveData(data: any) {
    try {
      setLoading(true);
      const withdrawData = {
        userId: session?.user.id,
        amount: parseFloat(data.amount),
      };

         await createWithdrawal(withdrawData);
      toast.success("withdraw registered successfully")
      reset();
      router.push("/dashboard/user/withdraws")
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/dashboard/withdraws"
        parent=""
        title="withdraws"
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
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
     
      <FormFooter
        href="/dashboard/withdraws"
        editingId={editingId}
        loading={loading}
        title="withdraw"
        parent=""
      />
    </form>
  );
}