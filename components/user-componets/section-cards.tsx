
"use client"
import { useState, useEffect } from "react";
// import { UserDashboardCards } from "@/components/user-dashboard-cards";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  ArrowRightIcon, 
  PlusIcon, 
  DownloadIcon,
  HistoryIcon,
  CreditCardIcon,
  DollarSign,
  History
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { UserDashboardCards } from "./user-dashboard-cards";
import Link from "next/link";
// import { useSessionStore } from "@/store/authStore";


type Session = {
  accessToken: string;
  user: any;
};

export default function UserDashboard({userWallet,userWithdraws,userLoans,userSavings}:{userWallet:any,userLoans:any,userSavings:any,userWithdraws:any}) {
  const [session, setSession] = useState<Session>();
  console.log(userLoans)
  useEffect(() => {
    fetch("/api/session")
      .then(res => res.json())
      .then(data => setSession(data));
  }, []);

  const [userData, setUserData] = useState({
    firstName: session?.user?.firstName,
    lastName: session?.user?.lastName,
    walletBalance: userWallet?.balance,
    savingsTotal: 100,
    loanBalance: userLoans.amount,
    loanRepaymentDate: "2025-05-15",
    savingsGrowth: 12.5,
    nextDueAmount: 15000,
    savingsGoal: 250000,
    transactions: [
      { 
        id: "tr1", 
        date: "2025-05-01", 
        type: "Deposit", 
        amount: 25000, 
        status: "Completed" 
      },
      { 
        id: "tr2", 
        date: "2025-04-15", 
        type: "Loan Repayment", 
        amount: -15000, 
        status: "Completed" 
      },
      { 
        id: "tr3", 
        date: "2025-04-10", 
        type: "Withdrawal", 
        amount: -5000, 
        status: "Completed" 
      },
      { 
        id: "tr4", 
        date: "2025-04-01", 
        type: "Savings Deposit", 
        amount: 10000, 
        status: "Completed" 
      }
    ],
    loans: [
      {
        id: "ln1",
        amount: 100000,
        dateTaken: "2025-01-10",
        duration: 12,
        monthlyPayment: 15000,
        nextPayment: "2025-05-15",
        status: "Active",
        remainingBalance: userLoans.amount
      }
    ],
    savings: [
      {
        id: "sv1",
        type: "Regular",
        amount: 80000,
        interestRate: 8,
        startDate: "2024-11-15"
      },
      {
        id: "sv2",
        type: "Fixed Deposit",
        amount: 40000,
        interestRate: 12,
        startDate: "2025-01-20",
        maturityDate: "2025-07-20"
      }
    ]
  });

  // Format currency
  const formatCurrency = (amount:any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate savings progress
  const savingsProgress = Math.round((userData.savingsTotal / userData.savingsGoal) * 100);
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
      <h1 className="text-3xl text-blue-500 font-bold">
      {getGreeting()}, {session?.user?.firstName}!
    </h1>
        <p className="text-muted-foreground">
          Here's an overview of your SACCO account
        </p>
      </div>

      {/* Summary Cards */}
      <UserDashboardCards 
        walletBalance={userData.walletBalance}
        savingsTotal={userData.savingsTotal}
        loanBalance={userData.loanBalance}
        loanRepaymentDate={userData.loanRepaymentDate}
        savingsGrowth={userData.savingsGrowth}
        nextDueAmount={userData.nextDueAmount}
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
       <Button className="flex items-center gap-2">
          <Link href="/dashboard/user/savings/new" className="flex ">
          <PlusIcon className="size-4 mr-3" />
          Save funds
          </Link>
        </Button>
        <Button className="flex items-center gap-2" variant="outline">
          <Link href="/dashboard/user/withdraws/new" className="flex">
          <DownloadIcon className="size-4 mr-3" />
          Withdraw Funds
          </Link>
          
        </Button>
        <Button className="flex items-center gap-2" variant="outline">
            <Link href="/dashboard/user/loans/new" className="flex">
         <DollarSign className="size-4 mr-3" />
          Get a loan
          </Link>
          
        </Button>
          <Button className="flex items-center gap-2" variant="outline">
            <Link href="/dashboard/user/loan-repayments/new" className="flex">
         <History className="size-4 mr-3" />
           Pay loan
          </Link>
          
        </Button>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="loans">Loans</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        {/* Transactions Tab */}
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                Your account activity for the past 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell className={transaction.amount < 0 ? "text-destructive" : "text-green-600"}>
                        {formatCurrency(transaction.amount)}
                      </TableCell>
                      <TableCell>{transaction.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  View All Transactions
                  <ArrowRightIcon className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Loans Tab */}
        <TabsContent value="loans">
          <Card>
            <CardHeader>
              <CardTitle>Active Loans</CardTitle>
              <CardDescription>
                Your current loan accounts and repayment schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              {userData.loans.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date Taken</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Monthly Payment</TableHead>
                      <TableHead>Next Payment</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userData.loans.map((loan) => (
                      <TableRow key={loan.id}>
                        <TableCell>{formatCurrency(loan.amount)}</TableCell>
                        <TableCell>{new Date(loan.dateTaken).toLocaleDateString()}</TableCell>
                        <TableCell>{loan.duration} months</TableCell>
                        <TableCell>{formatCurrency(loan.monthlyPayment)}</TableCell>
                        <TableCell>{new Date(loan.nextPayment).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            {loan.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <p className="mb-4 text-center text-muted-foreground">
                    You don't have any active loans at the moment.
                  </p>
                  <Button>Apply for a Loan</Button>
                </div>
              )}
              <div className="mt-6">
                <Card className="bg-muted">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Loan Repayment Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 flex justify-between">
                      <span>Remaining: {formatCurrency(userData.loans[0]?.remainingBalance || 0)}</span>
                      <span>Total: {formatCurrency(userData.loans[0]?.amount || 0)}</span>
                    </div>
                    <Progress 
                      value={userData.loans[0] ? 100 - ((userData.loans[0].remainingBalance / userData.loans[0].amount) * 100) : 0} 
                      className="h-2" 
                    />
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Savings Tab */}
        <TabsContent value="savings">
          <Card>
            <CardHeader>
              <CardTitle>Your Savings</CardTitle>
              <CardDescription>
                Track your savings progress and interest earned
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Maturity Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.savings.map((saving) => (
                    <TableRow key={saving.id}>
                      <TableCell>{saving.type}</TableCell>
                      <TableCell>{formatCurrency(saving.amount)}</TableCell>
                      <TableCell>{saving.interestRate}%</TableCell>
                      <TableCell>{new Date(saving.startDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        {saving.maturityDate ? new Date(saving.maturityDate).toLocaleDateString() : "N/A"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end">
                <Button size="sm">Add New Savings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Goals Tab */}
        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Savings Goals</CardTitle>
              <CardDescription>
                Track progress towards your financial targets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-medium">Main Savings Goal</h3>
                <div className="mb-2 flex justify-between">
                  <span>Current: {formatCurrency(userData.savingsTotal)}</span>
                  <span>Target: {formatCurrency(userData.savingsGoal)}</span>
                </div>
                <Progress value={savingsProgress} className="h-2" />
                <p className="mt-2 text-sm text-muted-foreground">
                  {savingsProgress}% of your savings goal achieved
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button size="sm">Set New Goal</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}