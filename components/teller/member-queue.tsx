import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function MemberQueue() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blue-700">Member Queue</h3>
        <p className="text-sm text-muted-foreground">Members waiting for service</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-md border p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <span className="text-xs font-medium">P</span>
            </div>
            <div>
              <p className="font-medium">Peter Ochieng</p>
              <p className="text-xs text-muted-foreground">Loan Application</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Q001</Badge>
            <p className="text-xs text-muted-foreground">Waiting: 5 min</p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-md border p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <span className="text-xs font-medium">A</span>
            </div>
            <div>
              <p className="font-medium">Alice Nakato</p>
              <p className="text-xs text-muted-foreground">Deposit</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Q002</Badge>
            <p className="text-xs text-muted-foreground">Waiting: 3 min</p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-md border p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              <span className="text-xs font-medium">J</span>
            </div>
            <div>
              <p className="font-medium">John Mugisha</p>
              <p className="text-xs text-muted-foreground">Withdrawal</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Q003</Badge>
            <p className="text-xs text-muted-foreground">Waiting: 2 min</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-center text-sm font-medium">Next Member</p>
        <Button className="w-full">Call Member</Button>
      </div>
    </div>
  )
}
