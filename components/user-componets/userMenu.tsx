"use client"

import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronRight,
  HelpCircle,
  LogOut,
  Settings,
  User,
  Monitor,
  Lock,
  Bell,
  UserCog,
  FileQuestion,
  MessageSquare,
  Contact,
  Moon,
  Sun,
  Languages,
  Accessibility,
} from "lucide-react"

export default function UserMenu() {
  const [session, setSession] = useState<{
    user: {
      email: string
      firstName: string
      lastName:string
      imageUrl: string | null
    }
  } | null>(null)

  useEffect(() => {
    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => setSession(data))
  }, [])

const handleLogout = async () => {
  try {
    const res = await fetch("/api/logout", {
      method: "POST",
    })

    if (res.ok) {
      // Optionally remove session from local state
      setSession(null)
      // Redirect to login
      window.location.href = "/"
    } else {
      const error = await res.json()
      console.error("Logout error:", error.error)
    }
  } catch (error) {
    console.error("Logout error:", error)
  }
}


  if (!session) return null

  const { email, firstName,lastName, imageUrl } = session.user
  const fallback = firstName?.charAt(0).toUpperCase() || "U"

  return (
   <div className="w-full">
     <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 cursor-pointer focus:outline-none">
        <Avatar>
          <AvatarImage src={imageUrl || ""} alt={firstName} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div className="text-left">
          <p className="text-sm font-medium">{firstName} {lastName}</p>
          <p className="text-xs text-muted-foreground">{email}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-1">
        <div className="px-2 py-2.5 mb-1">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={imageUrl || ""} alt={firstName} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{firstName}</span>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center justify-between px-2 py-2 cursor-pointer">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Edit Profile</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-56 p-1">
              <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 cursor-pointer">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Personal Information</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 cursor-pointer">
                <Settings className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Profile Settings</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem onClick={handleLogout} className="flex items-center justify-between px-2 py-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <LogOut className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Logout</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
   </div>
  )
}
