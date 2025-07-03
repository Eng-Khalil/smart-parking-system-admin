import { BarChart3, CreditCard, ArrowDownToLine, ArrowUpFromLine } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TellerStatCardProps {
  title: string
  value: string
  description: string
  icon: "deposit" | "withdrawal" | "loan" | "transactions"
}

export function TellerStatCard({ title, value, description, icon }: TellerStatCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "deposit":
        return <ArrowDownToLine className="h-4 w-4 text-muted-foreground" />
      case "withdrawal":
        return <ArrowUpFromLine className="h-4 w-4 text-muted-foreground" />
      case "loan":
        return <CreditCard className="h-4 w-4 text-muted-foreground" />
      case "transactions":
        return <BarChart3 className="h-4 w-4 text-muted-foreground" />
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {getIcon()}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
