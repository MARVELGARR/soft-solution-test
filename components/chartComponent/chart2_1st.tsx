import { PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const chartData = [
  { browser: "safari", customers: 200, fill: "url(#gradientFill)" },
]

const chartConfig = {
  Customers: {
    label: "Customers",
  },
  safari: {
    label: "Safari",
    color: "url(#gradientFill)",
  },
}

const Chart1Svg1: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="18"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5457 0.993629C22.5782 0.843148 22.4357 0.713866 22.2891 0.760921L18.8258 1.8726C18.6792 1.91966 18.6385 2.10776 18.7526 2.21119L21.447 4.65462C21.561 4.75804 21.7443 4.69922 21.7768 4.54874L22.5457 0.993629ZM7.46308 15.1417C8.27561 14.7596 8.56666 13.8948 8.70578 13.1856C8.82657 12.5698 8.87283 11.8367 8.91679 11.1399C8.92591 10.9953 8.93493 10.8523 8.9445 10.7123C9.00305 9.85523 9.08247 9.07241 9.28319 8.43939C9.48064 7.81665 9.76045 7.44746 10.15 7.26427C10.5559 7.07343 11.0023 7.08978 11.5621 7.30218C12.1412 7.52195 12.7486 7.91625 13.4213 8.37373L13.6022 8.49707C14.1927 8.90025 14.8398 9.34215 15.4706 9.62684C16.1746 9.94455 17.0209 10.1427 17.859 9.74858C18.9976 9.21319 19.4047 8.24543 19.675 7.54386C19.6976 7.48512 19.719 7.42919 19.7394 7.37577C19.85 7.08589 19.9324 6.86986 20.0402 6.6807C20.154 6.48122 20.2626 6.3768 20.3961 6.31404C20.7709 6.13778 20.9319 5.69103 20.7556 5.31619C20.5794 4.94134 20.1326 4.78036 19.7578 4.95662C19.2614 5.19004 18.9509 5.56285 18.7372 5.93766C18.5665 6.23702 18.4366 6.57974 18.3286 6.86468L18.3279 6.86654C18.3098 6.91433 18.2923 6.96048 18.2753 7.00452C18.0182 7.67175 17.7866 8.12507 17.2208 8.39115C16.9649 8.51146 16.6267 8.50292 16.0877 8.25963C15.5841 8.03235 15.0479 7.66696 14.4277 7.2443L14.4277 7.24428L14.2649 7.1334C13.6098 6.6879 12.8632 6.19157 12.0943 5.89976C11.3059 5.6006 10.4101 5.48443 9.51176 5.90685C8.59717 6.3369 8.118 7.15135 7.85334 7.98602C7.59195 8.81041 7.50614 9.75878 7.44799 10.6101C7.43695 10.7717 7.42689 10.9293 7.4171 11.0827V11.0827C7.37277 11.7774 7.33388 12.3869 7.23383 12.8968C7.10497 13.5538 6.92821 13.7356 6.8248 13.7843C6.46025 13.9557 6.20097 13.9943 5.99771 13.9907C5.77835 13.9868 5.58012 13.9351 5.28874 13.8529L5.25787 13.8441L5.25786 13.8441C4.98777 13.7677 4.62811 13.666 4.21142 13.6556C3.76026 13.6444 3.27984 13.7383 2.73549 13.9942C1.55475 14.5494 0.9476 15.7513 0.635618 16.648C0.472721 17.1161 0.372891 17.5514 0.313573 17.8687C0.283763 18.0281 0.263801 18.1598 0.251108 18.2534C0.244754 18.3003 0.240202 18.3378 0.237135 18.3647L0.233604 18.3969L0.232597 18.4067L0.232271 18.4101L0.23215 18.4113L0.2321 18.4118C0.232078 18.4121 0.232057 18.4123 0.940895 18.4797L0.232057 18.4123C0.19285 18.8246 0.495345 19.1907 0.907699 19.2299C1.31992 19.2691 1.68589 18.9668 1.72529 18.5546L1.72532 18.5543L1.7255 18.5526L1.72746 18.5348C1.7294 18.5178 1.73266 18.4907 1.73752 18.4549C1.74726 18.383 1.76335 18.2763 1.78802 18.1444C1.83765 17.879 1.92046 17.5198 2.05231 17.1409C2.32984 16.3432 2.76066 15.6399 3.37377 15.3516C3.72635 15.1859 3.97656 15.1503 4.17409 15.1552C4.39 15.1606 4.58547 15.213 4.88129 15.2965L4.89829 15.3013C5.12058 15.364 5.40202 15.4435 5.72789 15.476C5.80645 15.4839 5.88759 15.489 5.9711 15.4905C6.42604 15.4985 6.91167 15.401 7.46308 15.1417Z"
        fill="url(#iconGradient)"/>
      <defs>
        <linearGradient id="iconGradient" x1="11.3895" y1="30.5075" x2="-8.32063" y2="-16.2322" gradientUnits="userSpaceOnUse">
          <stop stopColor="#687EFE"/>
          <stop offset="1" stopColor="#FFB7F5"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function RadialChartComponent1({ className }: { className?: string }) {
  return (
    <Card className={cn(className, `flex   border-none shadow-none`)}>
      <CardContent className="flex-1 pb-0 relative w-[50%]">
        <ChartContainer config={chartConfig} className="mx-auto w-[20rem] aspect-square max-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              data={chartData}
              startAngle={-20}
              endAngle={100}
              cx={"30%"}
              cy={"40%"}
              innerRadius={60}
              outerRadius={90}
              barSize={8}
              
            >
              <PolarGrid className=" w-20 " gridType="circle" radialLines={false} polarRadius={[66, 60]} />
              <defs>
                <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6E81FE" />
                  <stop offset="50%" stopColor="#A49CFE" />
                  <stop offset="100%" stopColor="#FFB7F5" />
                </linearGradient>
              </defs>
              <RadialBar className="" dataKey="customers" background cornerRadius={20} fill="url(#gradientFill)" />
              <PolarRadiusAxis tick={false} axisLine={false} />
            </RadialBarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="rounded-full flex items-center justify-center shadow-lg top-[2.5rem] left-[5.5rem] absolute z-10 w-[4rem] h-[4rem] bg-background">
          <Chart1Svg1 className="w-[2rem] h-[2rem] shadow-3xl drop-shadow-2xl shadow-purple-500/30" />
        </div>
      </CardContent>
      <div className="ml-[4rem]">
        <strong className="  font-extrabold text-md"> + 18% </strong>
         <p className=" font-light text-xs"> Daily customers</p>
      </div>

    </Card>
  )
}
