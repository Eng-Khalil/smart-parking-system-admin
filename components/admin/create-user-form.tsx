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
import FormFooter from "../user-componets/FormFooter";
import FormSelectInput from "../FormInputs/FormSelectInput";
import { createUser } from "@/actions/auth";



type SavingsFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
  session?: any | undefined | null;
  lots:any[]
};

export default function CreateUserForm({
  lots,
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
    //   amount: initialData?.amount || 0,
    },
  });

  
  const router = useRouter();
  
   const userRoles = [
    { label: "Lot Admin", value: "SPOT_ADMIN" },
    { label: "super admin", value: "SUPER_ADMIN" },
  ]

  const [loading, setLoading] = useState(false);
   const [selectedLot, setSelectedLot] = useState<any>(lots?.[0]);
   const [selectedRole, setSelectedRole] = useState<any>(userRoles[0]);

  const [session, setSession] = useState<any>();
  useEffect(() => {
    fetch("/api/session")
      .then(res => res.json())
      .then(data => setSession(data));
  }, []);

  async function saveData(data: any) {
    data.role=selectedRole?.value
    data.parkingLotId=selectedLot?.value

    console.log(data);
    try {
      setLoading(true);
         await createUser(data);
      toast.success("user registered successfully");
       reset();
       router.push("/dashboard/admin/users")
     
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveData)}>
      <FormHeader
        href="/admin/members"
        parent=""
        title="member"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardDescription>
                {editingId ? "Update your member member" : "Add a new member entry"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid  gap-6">
                <div className="grid lg:grid-cols-3 gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="First Name"
                    name="firstName"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Last Name"
                    name="lastName"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Email"
                    name="email"
                    type="email"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Phone Number"
                    name="phone"
                    type="tel"
                  />
                    <FormSelectInput
                                      label="Lot"
                                      options={lots}
                                      option={selectedLot}
                                      setOption={setSelectedLot}
                                      toolTipText="Select Parking Lot"
                                    />
                       <TextInput
                    register={register}
                    errors={errors}
                    label="Password"
                    name="password"
                    type="Password"
                  />
                     <FormSelectInput
                      label="Role"
                       options={userRoles}
                        option={selectedRole}
                        setOption={setSelectedRole}
                        toolTipText="Select Saving Type"
                         />
                                 
                </div>
              </div>
               <div className="w-1/3 mt-6">
           
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
     
      <FormFooter
        href="/dashboard/admin/members"
        editingId={editingId}
        loading={loading}
        title="member"
        parent=""
      />
    </form>
  );
}