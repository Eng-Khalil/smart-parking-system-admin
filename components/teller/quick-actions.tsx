import { Button } from "@/components/ui/button"
import { ArrowDownToLine, ArrowUpFromLine, CreditCard, Search } from "lucide-react"

export function QuickActions() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blue-700">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Common teller operations</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Button className="flex h-auto flex-col items-center justify-center gap-2 p-6" variant="outline">
          <ArrowDownToLine className="h-6 w-6 text-blue-700" />
          <span>New Deposit</span>
        </Button>

        <Button className="flex h-auto flex-col items-center justify-center gap-2 p-6" variant="outline">
          <ArrowUpFromLine className="h-6 w-6 text-blue-700" />
          <span>New Withdrawal</span>
        </Button>

        <Button className="flex h-auto flex-col items-center justify-center gap-2 p-6" variant="outline">
          <CreditCard className="h-6 w-6 text-blue-700" />
          <span>Loan Payment</span>
        </Button>

        <Button className="flex h-auto flex-col items-center justify-center gap-2 p-6" variant="outline">
          <Search className="h-6 w-6 text-blue-700" />
          <span>Member Search</span>
        </Button>
      </div>
    </div>
  )
}
