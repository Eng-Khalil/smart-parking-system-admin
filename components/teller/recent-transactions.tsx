import { Button } from "@/components/ui/button"
import { ArrowDownToLine, ArrowUpFromLine, CreditCard } from "lucide-react"

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blue-700">Recent Transactions</h3>
        <p className="text-sm text-muted-foreground">Today's transaction history</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <ArrowDownToLine className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium">Mary Nantongo</p>
              <p className="text-xs text-muted-foreground">TX78923 · Deposit</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">UGX 500,000</p>
            <p className="text-xs text-muted-foreground">10:23 AM</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
              <ArrowUpFromLine className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium">Joseph Okumu</p>
              <p className="text-xs text-muted-foreground">TX78924 · Withdrawal</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">UGX 250,000</p>
            <p className="text-xs text-muted-foreground">11:05 AM</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <CreditCard className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium">Christine Apio</p>
              <p className="text-xs text-muted-foreground">TX78925 · Loan Repayment</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">UGX 350,000</p>
            <p className="text-xs text-muted-foreground">11:42 AM</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
              <ArrowUpFromLine className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium">Robert Kigozi</p>
              <p className="text-xs text-muted-foreground">TX78926 · Withdrawal</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">UGX 1,200,000</p>
            <p className="text-xs text-muted-foreground">12:15 PM</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <ArrowDownToLine className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium">Agnes Namukasa</p>
              <p className="text-xs text-muted-foreground">TX78927 · Deposit</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">UGX 750,000</p>
            <p className="text-xs text-muted-foreground">01:30 PM</p>
          </div>
        </div>
      </div>

      <Button variant="outline" className="w-full">
        View All Transactions
      </Button>
    </div>
  )
}
