"use client"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useEffect, useState } from "react";
import UserMenu from "./userMenu";

export function SiteHeader() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    fetch("/api/session")
      .then(res => res.json())
      .then(data => setSession(data));
  }, []);
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center border-b transition-[width,height] ease-linear px-4 lg:px-6">
  <SidebarTrigger className="-ml-1" />
  <div className="flex-1" />
  <div className="mr-4">
    <UserMenu />
  </div>
</header>
  )
}
