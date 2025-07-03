import { CreditCardIcon, PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, ReceiptIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function UserDashboardCards({ 
  walletBalance = 45000, 
  savingsTotal = 120000, 
  loanBalance = 85000,
  loanRepaymentDate = "2025-05-15",
  savingsGrowth = 12.5,
  nextDueAmount = 15000
}) {
  // Calculate days until next payment
  const dueDate = new Date(loanRepaymentDate);
  const today = new Date();
  const daysUntilPayment = 7890
//   Math.ceil((dueDate- today:any) / (1000 * 60 * 60 * 24));
  
  // Format currency
  const formatCurrency = (amount:any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Available Balance</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {formatCurrency(walletBalance)}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <CreditCardIcon className="size-6 text-primary" />
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Your active wallet balance
          </div>
          <div className="text-muted-foreground">
            Available for withdrawal or transfers
          </div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Total Savings</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {formatCurrency(savingsTotal)}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +{savingsGrowth}%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Growing steadily <PiggyBankIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Earning {savingsGrowth}% interest annually
          </div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Loan Balance</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {formatCurrency(loanBalance)}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <ReceiptIcon className="size-6 text-primary" />
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Current outstanding loan
          </div>
          <div className="text-muted-foreground">
            {daysUntilPayment > 0 ? `Next payment due in ${daysUntilPayment} days` : "Payment overdue"}
          </div>
        </CardFooter>
      </Card>
      
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Next Payment Due</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {formatCurrency(nextDueAmount)}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge 
              variant="outline" 
              className={`flex gap-1 rounded-lg text-xs ${daysUntilPayment <= 3 ? "text-destructive" : ""}`}
            >
              {new Date(loanRepaymentDate).toLocaleDateString()}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {daysUntilPayment <= 3 ? "Payment due soon!" : `Due in ${daysUntilPayment} days`}
          </div>
          <div className="text-muted-foreground">
            {daysUntilPayment <= 0 ? "Please make payment immediately" : "Schedule your payment early"}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}