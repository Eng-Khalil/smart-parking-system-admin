"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export function MemberSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<null | {
    id: string
    name: string
    accountNumber: string
    idNumber: string
    phone: string
    email: string
    memberSince: string
    savingsBalance: string
    loanBalance: string
    loanStatus: string
  }>(null)

  // Mock search function
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults(null)
      return
    }

    // Mock data - in a real app, this would be an API call
    setSearchResults({
      id: "M001",
      name: "John Doe",
      accountNumber: "ACC10023456",
      idNumber: "ID98765432",
      phone: "+256 700 123 456",
      email: "john@example.com",
      memberSince: "Jan 12, 2023",
      savingsBalance: "$3,500",
      loanBalance: "$2,500",
      loanStatus: "Active",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Search by name, ID, or account number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>

      {searchResults ? (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Member Information</CardTitle>
              <CardDescription>Basic details about the member</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Name</p>
                  <p className="text-sm">{searchResults.name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Account Number</p>
                  <p className="text-sm">{searchResults.accountNumber}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">ID Number</p>
                  <p className="text-sm">{searchResults.idNumber}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm">{searchResults.phone}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm">{searchResults.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Member Since</p>
                  <p className="text-sm">{searchResults.memberSince}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="accounts">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="loans">Loans</TabsTrigger>
            </TabsList>
            <TabsContent value="accounts" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="mt-4">Savings Account</CardTitle>
                  <CardDescription>Current savings account balance and details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Current Balance</p>
                        <p className="text-2xl font-bold">{searchResults.savingsBalance}</p>
                      </div>
                      <Button>View Statement</Button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Last Deposit</p>
                        <p className="text-sm">$500 on Jul 10, 2023</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Last Withdrawal</p>
                        <p className="text-sm">$200 on Jul 5, 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="loans" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Loan Status</CardTitle>
                  <CardDescription>Current loan details and repayment information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Outstanding Balance</p>
                        <p className="text-2xl font-bold">{searchResults.loanBalance}</p>
                      </div>
                      <Badge variant="outline">{searchResults.loanStatus}</Badge>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Loan Type</p>
                        <p className="text-sm">Business Loan</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Interest Rate</p>
                        <p className="text-sm">12% per annum</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Next Payment Due</p>
                        <p className="text-sm">Jul 30, 2023</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Payment Amount</p>
                        <p className="text-sm">$250</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button>Process Payment</Button>
                      <Button variant="outline">View Schedule</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed">
          <div className="text-center">
            <Search className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">Search for a member to view their details</p>
          </div>
        </div>
      )}
    </div>
  )
}
