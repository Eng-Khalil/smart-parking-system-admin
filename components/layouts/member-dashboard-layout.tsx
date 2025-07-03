"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BarChart3, CreditCard, FileText, LayoutDashboard, LogOut, Wallet, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MemberDashboardLayoutProps {
  children: React.ReactNode
}

export function MemberDashboardLayout({ children }: MemberDashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-white">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard/member" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary">
              <CreditCard className="h-4 w-4" />
            </div>
            <span>BUTSACCO</span>
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
                    pathname === "/dashboard/member" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/member">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
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
                    pathname === "/dashboard/member/accounts" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/member/accounts">
                    <Wallet className="mr-2 h-4 w-4" />
                    My Accounts
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/member/loans" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/member/loans">
                    <CreditCard className="mr-2 h-4 w-4" />
                    My Loans
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/member/savings" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/member/savings">
                    <Wallet className="mr-2 h-4 w-4" />
                    My Savings
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/member/transactions" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/member/transactions">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Transactions
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Services</h3>
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/member/apply-loan" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/member/apply-loan">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Apply for Loan
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === "/dashboard/member/statements" &&
                      "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Link href="/dashboard/member/statements">
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
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Mary Member</span>
              <span className="text-xs text-gray-500">member@example.com</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
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
            <Link href="/dashboard/member" className="flex items-center gap-2 font-bold text-xl text-primary">
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
                      pathname === "/dashboard/member" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/member">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
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
                      pathname === "/dashboard/member/accounts" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/member/accounts">
                      <Wallet className="mr-2 h-4 w-4" />
                      My Accounts
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/member/loans" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/member/loans">
                      <CreditCard className="mr-2 h-4 w-4" />
                      My Loans
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/member/savings" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/member/savings">
                      <Wallet className="mr-2 h-4 w-4" />
                      My Savings
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/member/transactions" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/member/transactions">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Transactions
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Services</h3>
                <div className="space-y-1">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/member/apply-loan" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/member/apply-loan">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Apply for Loan
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === "/dashboard/member/statements" &&
                        "bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/dashboard/member/statements">
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
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Mary Member</span>
                <span className="text-xs text-gray-500">member@example.com</span>
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
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <div className="md:hidden w-5" />
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Member Portal
            </Button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
