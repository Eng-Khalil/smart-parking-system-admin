import { GridBackground } from "@/components/grid-background";
import LoginForm from "@/components/LoginForm";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import React from "react";

export default async function page() {

  return (
    <GridBackground>
      <div className="px-4">
        <LoginForm />
      </div>
    </GridBackground>
  );
}
