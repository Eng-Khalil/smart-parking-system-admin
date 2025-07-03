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
  CreditCard,
  FileText,
  LayoutDashboard,
  LogOut,
  Users,
  Menu,
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import UserMenu from "../user-componets/userMenu"

interface TellerDashboardLayoutProps {
  children: React.ReactNode
}

export function TellerDashboardLayout({ children }: TellerDashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden h-full fixed md:flex w-64 flex-col border-r bg-white">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard/teller" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary">
              <CreditCard className="h-4 w-4" />
            </div>
            <span>SMART PARKING</span>
          </Link>
        </div>
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
                    pathname === "/dashboard/teller" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/spotadmin">
                    <LayoutDashboard className="mr-2 h-4 w-4"/>
                    Dashboard
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">LOT MANAGEMENT</h3>
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/spotadmin/parking-spots" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/spotadmin/parking-lots">
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    Parking Spots
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/bookings/withdrawals" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/spotadmin/bookings">
                    <ArrowUpFromLine className="mr-2 h-4 w-4" />
                    Bookings
                  </Link>
                </Button>
              </div>
            </div>

          </nav>
        </ScrollArea>
        {/* <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Tom Teller</span>
              <span className="text-xs text-gray-500"></span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div> */}
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
            <Link href="/dashboard/teller" className="flex items-center gap-2 font-bold text-xl text-primary">
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
                      pathname === "/dashboard/teller" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/teller">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Transactions</h3>
                <div className="space-y-1">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/teller/deposits" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/teller/deposits">
                      <ArrowDownToLine className="mr-2 h-4 w-4" />
                      Deposits
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/teller/withdrawals" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/teller/withdrawals">
                      <ArrowUpFromLine className="mr-2 h-4 w-4" />
                      Withdrawals
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/teller/loan-payments" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/teller/loan-payments">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Loan Payments
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Management</h3>
                <div className="space-y-1">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/teller/members" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/teller/members">
                      <Users className="mr-2 h-4 w-4" />
                      Members
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/teller/statements" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/teller/statements">
                      <FileText className="mr-2 h-4 w-4" />
                      Statements
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </ScrollArea>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Tom Teller</span>
                <span className="text-xs text-gray-500">teller@butsacco.com</span>
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
      <div className="flex md:ml-[258px] flex-1 flex-col">
       <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
  <div className="md:hidden w-5" />
  <div className="flex-1" />
  <div className="flex items-center gap-4">
    <UserMenu
    />
  </div>
</header>

        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
