"use client"

import * as React from "react"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { 
  TrendingUpIcon, 
  TrendingDownIcon, 
  CalendarIcon, 
  ArrowRightIcon,
  AlertCircleIcon,
  CheckCircleIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { UserFinancialChart } from "./user-financial"

export default function UserFinancialInsights() {
  const [selectedPeriod, setSelectedPeriod] = React.useState("monthly")
  
  // Sample data for financial insights
  const userData = {
    savingsData: {
      currentMonth: 15000,
      previousMonth: 12000,
      total: 150000,
      goal: 250000,
      interestEarned: 3500,
      nextInterestPayment: "2025-06-30"
    },
    loanData: {
      activeLoans: 1,
      totalOutstanding: 25000,
      originalAmount: 100000,
      paymentsDue: [
        {
          date: "2025-06-15",
          amount: 15000,
          isLate: false
        }
      ],
      repaymentProgress: 75, // percentage
      nextPaymentDate: "2025-06-15"
    },
    projections: {
      monthly: {
        savingsInOneYear: 290000,
        interestInOneYear: 17400,
        loanCompletionDate: "2025-08-15",
        goalCompletionDate: "2025-10-30"
      },
      quarterly: {
        savingsInOneYear: 320000,
        interestInOneYear: 19200,
        loanCompletionDate: "2025-07-30",
        goalCompletionDate: "2025-09-15"
      }
    }
  }
  
  // Format currency
  const formatCurrency = (amount:any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Calculate days until next payment
  const calculateDaysUntil = (dateString:any) => {
    const targetDate = new Date(dateString);
    const today = new Date();
    return Math.max(0, Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
  };
  
  const daysUntilNextPayment = calculateDaysUntil(userData.loanData.nextPaymentDate);
  const daysUntilInterestPayment = calculateDaysUntil(userData.savingsData.nextInterestPayment);
  
  // Progress calculations
  const savingsProgress = Math.round((userData.savingsData.total / userData.savingsData.goal) * 100);
  const loanProgress = userData.loanData.repaymentProgress;
  
  // Monthly savings growth percentage
  const savingsGrowthPercent = ((userData.savingsData.currentMonth - userData.savingsData.previousMonth) / 
                               userData.savingsData.previousMonth * 100).toFixed(1);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Financial Insights</h1>
        <p className="text-muted-foreground">
          Track your financial progress and growth
        </p>
      </div>
      
      {/* Main chart */}
      <UserFinancialChart />
      
      {/* Financial insights cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Savings insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUpIcon className="text-primary" />
              Savings Insights
            </CardTitle>
            <CardDescription>Your savings performance and projections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Savings</p>
                <p className="text-2xl font-bold">{formatCurrency(userData.savingsData.total)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Contributions</p>
                <p className="text-2xl font-bold">{formatCurrency(userData.savingsData.currentMonth)}</p>
              </div>
            </div>
            
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-medium">Savings Goal Progress</span>
                <span className="text-sm">{savingsProgress}%</span>
              </div>
              <Progress value={savingsProgress} className="h-2" />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>Current: {formatCurrency(userData.savingsData.total)}</span>
                <span>Goal: {formatCurrency(userData.savingsData.goal)}</span>
              </div>
            </div>
            
            <div className="rounded-lg bg-muted p-3">
              <div className="flex items-center gap-2 text-sm">
                <CalendarIcon className="size-4 text-primary" />
                <span className="font-medium">Next interest payment in {daysUntilInterestPayment} days</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Expected interest: {formatCurrency(userData.savingsData.interestEarned)}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Increase Monthly Contribution
            </Button>
          </CardFooter>
        </Card>
        
        {/* Loan insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDownIcon className="text-primary" />
              Loan Insights
            </CardTitle>
            <CardDescription>Your loan status and repayment progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Outstanding Balance</p>
                <p className="text-2xl font-bold">{formatCurrency(userData.loanData.totalOutstanding)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Next Payment</p>
                <p className="text-2xl font-bold">{formatCurrency(userData.loanData.paymentsDue[0].amount)}</p>
              </div>
            </div>
            
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-medium">Repayment Progress</span>
                <span className="text-sm">{loanProgress}%</span>
              </div>
              <Progress value={loanProgress} className="h-2" />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>Paid: {formatCurrency(userData.loanData.originalAmount - userData.loanData.totalOutstanding)}</span>
                <span>Original: {formatCurrency(userData.loanData.originalAmount)}</span>
              </div>
            </div>
            
            <div className="rounded-lg bg-muted p-3">
              {daysUntilNextPayment <= 3 ? (
                <div className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircleIcon className="size-4" />
                  <span className="font-medium">Payment due in {daysUntilNextPayment} days!</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircleIcon className="size-4 text-green-500" />
                  <span className="font-medium">Next payment due in {daysUntilNextPayment} days</span>
                </div>
              )}
              <p className="mt-1 text-xs text-muted-foreground">
                Due date: {new Date(userData.loanData.nextPaymentDate).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="w-full">
              Make Payment Now
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Financial projections */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Projections</CardTitle>
          <CardDescription>See where your finances are headed</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly Contribution</TabsTrigger>
              <TabsTrigger value="quarterly">Quarterly Increase</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Projected Savings in 1 Year</h3>
                  <p className="mt-2 text-2xl font-bold">
                    {formatCurrency(userData.projections.monthly.savingsInOneYear)}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Including {formatCurrency(userData.projections.monthly.interestInOneYear)} in interest
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Goal Completion Date</h3>
                  <p className="mt-2 text-2xl font-bold">
                    {new Date(userData.projections.monthly.goalCompletionDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Based on your current savings rate
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Loan Completion</h3>
                <p className="mt-2">At your current repayment rate, your loan will be fully paid by:</p>
                <p className="mt-1 text-lg font-bold">
                  {new Date(userData.projections.monthly.loanCompletionDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="quarterly" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Projected Savings in 1 Year</h3>
                  <p className="mt-2 text-2xl font-bold">
                    {formatCurrency(userData.projections.quarterly.savingsInOneYear)}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Including {formatCurrency(userData.projections.quarterly.interestInOneYear)} in interest
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Goal Completion Date</h3>
                  <p className="mt-2 text-2xl font-bold">
                    {new Date(userData.projections.quarterly.goalCompletionDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    With quarterly contribution increases
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Loan Completion</h3>
                <p className="mt-2">With quarterly payment increases, your loan will be fully paid by:</p>
                <p className="mt-1 text-lg font-bold">
                  {new Date(userData.projections.quarterly.loanCompletionDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button variant="outline" className="flex items-center gap-2">
          View Detailed Financial Report
          <ArrowRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  )
}