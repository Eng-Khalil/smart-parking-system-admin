export function LoanDisbursementsChart() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blue-700">Loan Disbursements & Repayments</h3>
        <p className="text-sm text-muted-foreground">Monthly loan activities for the current year</p>
      </div>

      <div className="h-[300px] w-full">
        {/* In a real application, you would use a chart library like Recharts */}
        <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
          <p className="text-muted-foreground">Loan disbursements and repayments chart would be displayed here</p>
        </div>
      </div>
    </div>
  )
}
