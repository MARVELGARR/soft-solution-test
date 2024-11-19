"use client";

import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

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
import RadialChartComponent2 from './chart2_2';
import RadialChartComponent1 from './chart2_1st';
import { Separator } from '../ui/separator';

const chartData = [
  { customer: "customer1", visitors: 295, fill: "hsl(var(--chart-1))" },
  { customer: "customer2", visitors: 290, fill: "hsl(var(--chart-2))" },
  { customer: "customer3", visitors: 487, fill: "hsl(var(--chart-3))" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function CustomerPieComponent() {
  return (
    
    <Card className="lg:flex relative hidden">
        <div className="flex flex-col max-w-[35rem]">

            <CardHeader className="items-center pb-0">
                <CardTitle>
                <strong className="text-xl font-extrabold">Customers</strong>
                </CardTitle>
                <CardDescription className="text-body-grayText">
                Customers that buy our products
                </CardDescription>
            </CardHeader>
            <Separator/>
            <CardContent className="flex-1 pb-0 relative mt-[3rem]">
                <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]  rounded-full shadow-xl "
                >
                <PieChart>
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    outerRadius={90}
                    strokeWidth={5}

                    activeIndex={0}
                    activeShape={({
                        outerRadius = 0,
                        ...props
                    }: PieSectorDataItem) => (
                        <Sector {...props} outerRadius={outerRadius + 10} />
                    )}
                    />
                </PieChart>
                </ChartContainer>
                <div className="absolute text-cyan-700 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">82.3%</span>
                <span className="text-sm text-muted-foreground">total</span>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">

            </CardFooter>
        </div>
        <div className="absolute hidden my-auto h-[25rem]  right-[2rem] lg:flex   flex-col justify-between items-end">
            <RadialChartComponent1 className='w-[15rem] rounded-full'/>
            <RadialChartComponent2 className='w-[15rem] rounded-full'/>
        </div>
    </Card>
  );
}