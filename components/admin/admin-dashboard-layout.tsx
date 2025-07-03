"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  BarChart3,
  Building,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  Wallet,
  FileBarChart2,
  Menu,
  LocateOffIcon,
  Car,
  MapPin,
  BookCheckIcon,
  MapIcon,
  StretchVertical,
  MapPinHouse,
  Users2,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import UserMenu from "../user-componets/userMenu"

interface AdminDashboardLayoutProps {
  children: React.ReactNode
}

export function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden fixed md:flex w-64 flex-col border-r bg-white">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard/admin" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary">
              <Car className="h-4 w-4" />
            </div>
            <span>SMART PARKING</span>
          </Link>
        </div>
        <div className="h-[600px] overflow-y-scroll">
          <ScrollArea className="flex-1 py-2">
          <nav className="space-y-6 px-2">
            <div className="space-y-1">
              <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Overview</h3>
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
              </div>
            </div>
             <div className="space-y-1">
              <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Parking Management</h3>
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/parking-lots" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/parking-lots">
                    <Car className="mr-2 h-4 w-4" />
                    Parking Lots
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/parking-spots" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/parking-spots">
                    <MapPin className="mr-2 h-4 w-4" />
                    Parking spots
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/bookings" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/bookings">
                    <BookCheckIcon className="mr-2 h-4 w-4" />
                    Bookings
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Location Management</h3>
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/regions" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/regions">
                    <MapIcon className="mr-2 h-4 w-4" />
                    Regions
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/regions" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/cities">
                    <MapPin className="mr-2 h-4 w-4" />
                    Cities
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/areas" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/areas">
                    <MapPinHouse className="mr-2 h-4 w-4" />
                    Areas
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/streets" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/streets">
                    <StretchVertical className="mr-2 h-4 w-4" />
                    Streets
                  </Link>
                </Button>
              </div>
            </div>

           

            <div className="space-y-1">
              <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Administration</h3>
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/users" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/users">
                    <Users2 className="mr-2 h-4 w-4" />
                    Users
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/admin/settings" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/admin/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </ScrollArea>
        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-3">
           <UserMenu/>
          </div>
        </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden absolute top-3 left-3 z-50">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/dashboard/admin" className="flex items-center gap-2 font-bold text-xl text-primary">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary">
                <CreditCard className="h-4 w-4" />
              </div>
              <span>BUTSACCO</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 py-2 h-[calc(100vh-8rem)]">
            <nav className="space-y-6 px-2">
              <div className="space-y-1">
                <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Overview</h3>
                <div className="space-y-1">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin/reports" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin/reports">
                      <FileBarChart2 className="mr-2 h-4 w-4" />
                      Reports
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">User Management</h3>
                <div className="space-y-1">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin/members" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin/members">
                      <Users className="mr-2 h-4 w-4" />
                      Members
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin/staff" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin/staff">
                      <Users className="mr-2 h-4 w-4" />
                      Staff
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Financial</h3>
                <div className="space-y-1">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin/loans" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin/loans">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Loans
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin/savings" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin/savings">
                      <Wallet className="mr-2 h-4 w-4" />
                      Savings
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin/transactions" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin/transactions">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Transactions
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Administration</h3>
                <div className="space-y-1">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin/branches" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin/branches">
                      <Building className="mr-2 h-4 w-4" />
                      Branches
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/admin/settings" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/admin/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </ScrollArea>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Admin</span>
                <span className="text-xs text-gray-500">admin@butsacco.com</span>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex md:ml-[255px] flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <div className="md:hidden w-5" />
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <UserMenu/>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
