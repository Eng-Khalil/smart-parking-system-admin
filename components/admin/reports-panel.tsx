import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Printer } from "lucide-react"

export function ReportsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Reports</CardTitle>
        <CardDescription>Generate and download financial reports for your SACCO.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
            <TabsTrigger value="annual">Annual</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              <ReportCard title="Savings Report" description="Monthly savings summary" date="July 2023" />
              <ReportCard
                title="Loan Report"
                description="Monthly loan disbursements and repayments"
                date="July 2023"
              />
              <ReportCard title="Income Statement" description="Monthly income and expenses" date="July 2023" />
              <ReportCard title="Balance Sheet" description="Monthly financial position" date="July 2023" />
              <ReportCard title="Member Activity" description="Monthly member transactions" date="July 2023" />
              <ReportCard title="Delinquency Report" description="Monthly loan delinquency status" date="July 2023" />
            </div>
          </TabsContent>
          <TabsContent value="quarterly" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              <ReportCard title="Savings Report" description="Quarterly savings summary" date="Q2 2023" />
              <ReportCard
                title="Loan Report"
                description="Quarterly loan disbursements and repayments"
                date="Q2 2023"
              />
              <ReportCard title="Income Statement" description="Quarterly income and expenses" date="Q2 2023" />
              <ReportCard title="Balance Sheet" description="Quarterly financial position" date="Q2 2023" />
            </div>
          </TabsContent>
          <TabsContent value="annual" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              <ReportCard title="Annual Report" description="Comprehensive annual financial report" date="2022" />
              <ReportCard title="Audit Report" description="Annual audited financial statements" date="2022" />
              <ReportCard title="Performance Analysis" description="Annual performance metrics and KPIs" date="2022" />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

interface ReportCardProps {
  title: string
  description: string
  date: string
}

function ReportCard({ title, description, date }: ReportCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium">{date}</div>
        <div className="mt-4 flex space-x-2">
          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
            <Printer className="h-4 w-4" />
            <span className="sr-only">Print</span>
          </Button>
          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
            <FileText className="h-4 w-4" />
            <span className="sr-only">View</span>
          </Button>
          <Button size="sm" className="h-8 px-2 text-xs">
            <Download className="mr-1 h-3 w-3" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
