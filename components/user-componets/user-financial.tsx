"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

// Sample data - this would come from your API in a real implementation
const financialData = [
  { date: "2025-03-01", savings: 12000, loans: 85000 },
  { date: "2025-03-05", savings: 15000, loans: 85000 },
  { date: "2025-03-10", savings: 15000, loans: 85000 },
  { date: "2025-03-15", savings: 15000, loans: 70000 },
  { date: "2025-03-20", savings: 22000, loans: 70000 },
  { date: "2025-03-25", savings: 22000, loans: 70000 },
  { date: "2025-03-30", savings: 25000, loans: 70000 },
  { date: "2025-04-01", savings: 25000, loans: 70000 },
  { date: "2025-04-05", savings: 32000, loans: 70000 },
  { date: "2025-04-10", savings: 32000, loans: 70000 },
  { date: "2025-04-15", savings: 32000, loans: 55000 },
  { date: "2025-04-20", savings: 45000, loans: 55000 },
  { date: "2025-04-25", savings: 45000, loans: 55000 },
  { date: "2025-04-30", savings: 52000, loans: 55000 },
  { date: "2025-05-01", savings: 52000, loans: 55000 },
  { date: "2025-05-05", savings: 65000, loans: 55000 },
  { date: "2025-05-10", savings: 75000, loans: 40000 },
  { date: "2025-05-15", savings: 75000, loans: 40000 },
  { date: "2025-05-20", savings: 87000, loans: 40000 },
  { date: "2025-05-25", savings: 95000, loans: 40000 },
  { date: "2025-05-30", savings: 105000, loans: 25000 },
  { date: "2025-06-01", savings: 105000, loans: 25000 },
  { date: "2025-06-05", savings: 115000, loans: 25000 },
  { date: "2025-06-10", savings: 120000, loans: 10000 },
  { date: "2025-06-15", savings: 120000, loans: 10000 },
  { date: "2025-06-20", savings: 130000, loans: 0 },
  { date: "2025-06-25", savings: 140000, loans: 0 },
  { date: "2025-06-30", savings: 150000, loans: 0 },
]

const chartConfig = {
  balance: {
    label: "Financial Balance",
  },
  savings: {
    label: "Savings",
    color: "hsl(var(--chart-1))",
  },
  loans: {
    label: "Loan Balance",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function UserFinancialChart() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")
  const [chartType, setChartType] = React.useState("balance")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("30d")
    }
  }, [isMobile])

  // Filter data based on selected time range
  const filteredData = financialData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2025-06-30") // Current reference date
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  // Format currency for tooltip
  const formatCurrency = (value:any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Financial Progress</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">
            {chartType === "balance" ? "Savings vs Loan Balance" : 
             chartType === "savings" ? "Savings Growth" : "Loan Reduction"}
          </span>
          <span className="@[540px]/card:hidden">
            {chartType === "balance" ? "Financial Balance" : 
             chartType === "savings" ? "Savings" : "Loans"}
          </span>
        </CardDescription>
        <div className="absolute right-4 top-4 flex flex-col gap-2 @[767px]/card:flex-row">
          <Select value={chartType} onValueChange={setChartType}>
            <SelectTrigger
              className="w-40"
              aria-label="Select chart type"
            >
              <SelectValue placeholder="Balance" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="balance" className="rounded-lg">
                Savings vs Loans
              </SelectItem>
              <SelectItem value="savings" className="rounded-lg">
                Savings Only
              </SelectItem>
              <SelectItem value="loans" className="rounded-lg">
                Loan Balance
              </SelectItem>
            </SelectContent>
          </Select>
          
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="90d" className="h-8 px-2.5">
              3 Months
            </ToggleGroupItem>
            <ToggleGroupItem value="30d" className="h-8 px-2.5">
              30 Days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              7 Days
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="@[767px]/card:hidden block">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="w-32"
              aria-label="Select time range"
            >
              <SelectValue placeholder="3 Months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                3 Months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                30 Days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                7 Days
              </SelectItem>
            </SelectContent>
          </Select>
          </div>
         
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSavings" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-savings)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-savings)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillLoans" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-loans)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-loans)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `${value / 1000}K`
                }
                return value
              }}
              width={45}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                    })
                  }}
                  formatter={(value, name) => {
                    if (name === "savings") {
                      return [formatCurrency(value), "Savings"]
                    }
                    if (name === "loans") {
                      return [formatCurrency(value), "Loan Balance"]
                    }
                    return [value, name]
                  }}
                  indicator="dot"
                />
              }
            />
            {(chartType === "balance" || chartType === "savings") && (
              <Area
                dataKey="savings"
                type="monotone"
                fill="url(#fillSavings)"
                stroke="var(--color-savings)"
                strokeWidth={2}
                name="savings"
              />
            )}
            {(chartType === "balance" || chartType === "loans") && (
              <Area
                dataKey="loans"
                type="monotone"
                fill="url(#fillLoans)"
                stroke="var(--color-loans)"
                strokeWidth={2}
                name="loans"
              />
            )}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}