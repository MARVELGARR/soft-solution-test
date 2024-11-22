"use client";

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Action from "./action";

type MonthlyData = {
  month: string; // Month name (e.g., "Jan", "Feb", etc.)
  revenue: number; // Revenue amount
  pending: number; // Pending amount (calculated as a percentage, e.g., 10% of revenue)
  income: number; // Income amount
  expense: number; // Expense amount
  fill: string
};

type BarChartData = MonthlyData[];

const chartData: BarChartData = [
  { month: "Jan", revenue: 112340, pending: 11234, income: 102340, expense: 12340, fill: "hsl(var(--chart-1))"  },
  { month: "Feb", revenue: 105000, pending: 10500, income: 95000, expense: 11000, fill: "hsl(var(--chart-2))" },
  { month: "Mar", revenue: 120000, pending: 12000, income: 110000, expense: 15000, fill: "hsl(var(--chart-3))" },
  { month: "Apr", revenue: 130000, pending: 13000, income: 120000, expense: 17000, fill: "hsl(var(--chart-4))" },
  { month: "May", revenue: 140000, pending: 14000, income: 130000, expense: 18000, fill: "hsl(var(--chart-5))" },
  { month: "Jun", revenue: 115000, pending: 11500, income: 105000, expense: 12000, fill: "hsl(var(--chart-5))" },
  { month: "Jul", revenue: 125000, pending: 12500, income: 115000, expense: 13000, fill: "hsl(var(--chart-5))" },
  { month: "Aug", revenue: 135000, pending: 13500, income: 125000, expense: 14000, fill: "hsl(var(--chart-5))" },
  { month: "Sep", revenue: 145000, pending: 14500, income: 135000, expense: 15000, fill: "hsl(var(--chart-5))" },
  { month: "Oct", revenue: 150000, pending: 15000, income: 140000, expense: 16000, fill: "hsl(var(--chart-5))" },
  { month: "Nov", revenue: 155000, pending: 15500, income: 145000, expense: 17000, fill: "hsl(var(--chart-2))" },
  { month: "Dec", revenue: 160000, pending: 16000, income: 150000, expense: 18000, fill: "hsl(var(--chart-3))" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Jan: {
    label: "Jan",
    color: "hsl(var(--chart-1))",
  },
  Feb: {
    label: "Feb",
    color: "hsl(var(--chart-2))",
  },
  Mar: {
    label: "Mar",
    color: "hsl(var(--chart-3))",
  },
  Apr: {
    label: "Apr",
    color: "hsl(var(--chart-4))",
  },
  May: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
  Jun: {
    label: "Jun",
    color: "hsl(var(--chart-5))",
  },
  Jul: {
    label: "Jul",
    color: "hsl(var(--chart-5))",
  },
  Aug: {
    label: "Aug",
    color: "hsl(var(--chart-5))",
  },
  Sep: {
    label: "Sep",
    color: "hsl(var(--chart-5))",
  },
  Oct: {
    label: "Oct",
    color: "hsl(var(--chart-5))",
  },
  Nov: {
    label: "Nov",
    color: "hsl(var(--chart-2))",
  },
  Dec: {
    label: "Dec",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function RevenueChartComponent() {
  const totalVisitors = chartData.reduce((sum, item) => sum + item.revenue, 0);

  return (
    <Card>
      <CardHeader className="w-full flex relative">
        <CardTitle className="text-xl">Revenue</CardTitle>
        <CardDescription>
          <strong className="text-3xl font-extrabold text-black">${totalVisitors}</strong>
        </CardDescription>
        <Action className={"absolute right-[3rem] top-[2rem]"} />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="revenue"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* Pending indicator */}
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "hsl(var(--chart-1))" }}
          ></div>
          <span>Pending: $11234</span>
        </div>

        {/* Income indicator */}
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "hsl(var(--chart-2))" }}
          ></div>
          <span>Income: $102340</span>
        </div>

        {/* Expense indicator */}
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "hsl(var(--chart-3))" }}
          ></div>
          <span>Expense: $12340</span>
        </div>
      </CardFooter>
    </Card>
  );
}
