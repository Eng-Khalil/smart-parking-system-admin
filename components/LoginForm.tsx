
"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import { Lock, LogIn, Mail } from "lucide-react";
import { loginUser } from "@/actions/auth";
import Image from "next/image";
export type LoginProps = {
  email: string;
  password: string;
};
export default function Login() {
 
  const [isLoading, setIsLoading] = useState(false);
  const router =useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    fetch("/api/session")
      .then(res => res.json())
      .then(data => setSession(data));
  }, []);

  console.log(session);

  if(session){
    router.push("/dashboard/spotadmin");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  
  // const router = useRouter();
  async function onSubmit(data: LoginProps) {
    try {
      setIsLoading(true);
     const sessionData= await loginUser(data);
     const user=(sessionData.data?.user)

     
    //  save data to zustand
    // route user according to role
    if(user?.role==="SUPER_ADMIN"){
      router.push("/dashboard/admin")
    }else if(user?.role==="SPOT_ADMIN"){
      router.push("/dashboard/spotadmin")
    }
   else{
      router.push("/")
    }
    //  console.log(res)
      
    } catch (error) {
      setIsLoading(false);
      console.log(error)
      
    }
    console.log(data);
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-1 relative ">
    <div className="flex  mt-24 md:mt-0 items-center justify-center py-12">
      <div className="mx-auto shadow-xl lg:p-6 grid w-[400px] rounded-xs gap-6">
        <div className="absolute flex justify-center items-center text-center   top-5 md:left-5 left-1/4">
        </div>
        <Image src="/images/logo-dark.png" width={100} height={100} alt="logo" className="self-center ml-[120px] rounded-full"/>
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl mt-6 md:mt-0 text-blue-950 font-bold">Login to your Account</h1>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email Address"
            register={register}
            name="email"
            type="email"
            errors={errors}
            placeholder="Eg. johndoe@gmail.com"
            icon={Mail}
          />
          <PasswordInput
            label="Password"
            forgotPasswordLink="/forgot-password"
            icon={Lock}
            register={register}
            name="password"
            type="password"
            errors={errors}
            placeholder="******"
          />

          <SubmitButton
          buttonIcon={LogIn}
            title="Login"
            loading={isLoading}
            loadingTitle="Logging in please wait..."
          />
        </form>
      </div>
    </div>
  </div>
  );
}
