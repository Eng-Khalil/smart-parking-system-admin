"use client"

import UserDashboard from "@/components/user-componets/section-cards"
import { UserFinancialChart } from "@/components/user-componets/user-financial"
import { useEffect, useState } from "react"

export default function UserPage({ wallets,withdraws,savings ,loans}: { wallets:any,withdraws:any,savings:any,loans:any}) {
  const [session, setSession] = useState<any>(null)
  const [userWallet, setUserWallet] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
   const [filteredWithdraws, setFilteredWithdraws] = useState<any[]>([])
  const [filteredSavings, setFilteredSavings] = useState<any[]>([])
  const [filteredLoans, setFilteredLoans] = useState<any[]>([])

  useEffect(() => {
    setIsLoading(true)

    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => {
        setSession(data)

        if (data?.user?.id) {
          const wallet = wallets.find(
            (wallet:any) => wallet.userId === data.user.id
          )
           setFilteredWithdraws(withdraws.filter((w: any) => w.userId === data.user.id))
          setFilteredSavings(savings.filter((s: any) => s.userId === data.user.id))
          setFilteredLoans(loans.filter((l: any) => l.userId === data.user.id))
          setUserWallet(wallet || null)
        } else {
          setUserWallet(null)
        }

        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching session:", error)
        setIsLoading(false)
      })
  }, [wallets, withdraws, savings, loans])

  if (isLoading) {
    return <div className="p-4">Loading...</div>
  }

  console.log(userWallet)
  return (
    <div className="">
      <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <UserDashboard userWallet={userWallet} userWithdraws={filteredWithdraws} userSavings={filteredSavings} userLoans={filteredLoans}/>
              <div className="px-4 lg:px-6">
                <UserFinancialChart />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
