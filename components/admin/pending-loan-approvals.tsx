import { Button } from "@/components/ui/button"

export function PendingLoanApprovals() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blue-700">Pending Loan Approvals</h3>
        <p className="text-sm text-muted-foreground">Loans awaiting approval</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <p className="font-medium">John Mutebi</p>
            <p className="text-sm text-muted-foreground">12 May 2023</p>
          </div>
          <div className="text-right">
            <p className="font-medium">UGX 5,000,000</p>
            <p className="text-sm text-blue-600">Pending Approval</p>
          </div>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <p className="font-medium">Sarah Nakato</p>
            <p className="text-sm text-muted-foreground">15 May 2023</p>
          </div>
          <div className="text-right">
            <p className="font-medium">UGX 3,200,000</p>
            <p className="text-sm text-blue-600">Pending Approval</p>
          </div>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <p className="font-medium">David Okello</p>
            <p className="text-sm text-muted-foreground">18 May 2023</p>
          </div>
          <div className="text-right">
            <p className="font-medium">UGX 2,500,000</p>
            <p className="text-sm text-blue-600">Pending Approval</p>
          </div>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </div>
      </div>

      <Button variant="outline" className="w-full">
        View All Pending Loans
      </Button>
    </div>
  )
}
