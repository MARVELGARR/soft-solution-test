import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,

} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartData = [
  { browser: "safari", customers: 200, fill: "url(#gradientFill)" },
];

const chartConfig = {
  Customers: {
    label: "Customers",
  },
  safari: {
    label: "Safari",
    color: "url(#gradientFill)",
  },
};

const Chart1Svg1: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
        className={cn(className, '')}
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.5464 0.649008C22.5786 0.496636 22.4374 0.365452 22.2925 0.413099L18.8212 1.55452C18.6766 1.60209 18.6367 1.79225 18.7495 1.89697L19.6518 2.73526C19.2181 2.97643 18.9382 3.32993 18.7414 3.68355C18.5709 3.98983 18.4412 4.34035 18.3332 4.63225C18.3148 4.6819 18.2971 4.72985 18.2799 4.77561C18.0219 5.46126 17.7902 5.92416 17.227 6.19542C16.9742 6.31719 16.6367 6.30999 16.0946 6.05936C15.5898 5.82601 15.0525 5.45091 14.4326 5.01815L14.2695 4.90439C13.6145 4.44802 12.8693 3.94054 12.1018 3.6422C11.3158 3.33667 10.4192 3.21645 9.51802 3.65052C8.6005 4.09248 8.12185 4.92826 7.85807 5.7805C7.59718 6.62337 7.51146 7.5932 7.45331 8.46509C7.4423 8.63025 7.43226 8.7914 7.42248 8.94837L7.42246 8.94872C7.37813 9.66044 7.33916 10.2862 7.2389 10.8097C7.10927 11.4866 6.93133 11.6718 6.83105 11.7201C6.46768 11.8951 6.20939 11.9345 6.00654 11.9308C5.78711 11.9269 5.58854 11.8738 5.29693 11.7895L5.26597 11.7806C4.99609 11.7024 4.6368 11.5982 4.22026 11.5876C3.76872 11.5761 3.2873 11.6724 2.74174 11.9352C1.55818 12.5053 0.951393 13.7379 0.640252 14.654C0.477565 15.1329 0.377881 15.5782 0.318663 15.9027C0.288903 16.0657 0.268981 16.2003 0.25632 16.296C0.249982 16.3439 0.245444 16.3822 0.242389 16.4096L0.238877 16.4425L0.237878 16.4525L0.237555 16.4558L0.237436 16.4571L0.237387 16.4576C0.237366 16.4578 0.237345 16.4581 0.97868 16.52L0.237345 16.4581C0.198756 16.8738 0.49938 17.2386 0.908808 17.2728C1.31801 17.307 1.68102 16.9981 1.71995 16.5827L1.71998 16.5824L5.72374 13.427C5.80082 13.4347 5.88039 13.4398 5.96225 13.4413C6.41761 13.4496 6.90423 13.3495 7.45681 13.0833C8.27248 12.6904 8.56233 11.8034 8.7007 11.0808C8.82127 10.4512 8.86745 9.70153 8.91142 8.98775V8.98773C8.92054 8.83957 8.92957 8.69295 8.93915 8.54928C8.99772 7.67112 9.07723 6.86754 9.27845 6.21746C9.47677 5.57674 9.7571 5.20002 10.1438 5.01376C10.5468 4.81963 10.9924 4.83515 11.5546 5.05367C12.1352 5.27938 12.7439 5.68425 13.4166 6.1529L13.5974 6.2792C14.1881 6.69233 14.8341 7.14419 15.4637 7.43529C16.1646 7.75935 17.0116 7.96384 17.8528 7.55866C18.9941 7.00891 19.4009 6.01607 19.6705 5.29953C19.6931 5.23942 19.7144 5.18216 19.7348 5.12745C19.8454 4.83048 19.928 4.60864 20.0361 4.4145C20.1502 4.20943 20.2584 4.10365 20.3898 4.04036C20.5345 3.97065 20.6475 3.86017 20.7216 3.72906L21.4501 4.40577C21.5628 4.5105 21.7437 4.45134 21.7758 4.29924L22.5464 0.649008ZM5.43097 13.3839C5.5239 13.4017 5.62164 13.4167 5.72374 13.427L8.7007 11.0808L5.43097 13.3839ZM5.43097 13.3839C5.22567 13.3447 5.04381 13.2921 4.89021 13.2477L4.87308 13.2427C4.57707 13.1571 4.38125 13.1033 4.16523 13.0978C3.96809 13.0928 3.71887 13.1291 3.3675 13.2984C2.75721 13.5924 2.32603 14.3113 2.04766 15.1309C1.95136 15.4144 1.88117 15.6872 1.83093 15.9197L0.97868 16.52C1.72002 16.582 1.72 16.5822 1.71998 16.5824L1.72002 16.582L1.72021 16.5801L1.72218 16.5618C1.72414 16.5442 1.72741 16.5164 1.73229 16.4795C1.74206 16.4056 1.75819 16.2961 1.78291 16.1607C1.79637 16.0869 1.81228 16.0061 1.83093 15.9197L5.43097 13.3839Z"
        fill="url(#paint0_linear_1_1860)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_1860"
          x1="32.1508"
          y1="-1.27775"
          x2="-2.91501"
          y2="-12.802"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A1C734" />
          <stop offset="1" stop-color="#CDF4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default function RadialChartComponent2({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={cn(className, `flex   border-none shadow-none`)}>
      <CardContent className="flex-1 pb-0 relative w-[50%]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-[20rem] aspect-square max-h-[200px]"
        >
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
              <PolarGrid
                className=" w-20 "
                gridType="circle"
                radialLines={false}
                polarRadius={[66, 60]}
              />
                <defs>
                <linearGradient id="gradientFill" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#9EC600" />
                  <stop offset="100%" stopColor="#CDF4FF" />
                </linearGradient>
              </defs>
              <RadialBar
                className=""
                dataKey="customers"
                background
                cornerRadius={20}
                fill="url(#gradientFill)"
              />
              <PolarRadiusAxis tick={false} axisLine={false} />
            </RadialBarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="rounded-full flex items-center justify-center shadow-lg top-[2.5rem] left-[5.5rem] absolute z-10 w-[4rem] h-[4rem] bg-background">
          <Chart1Svg1 className="w-[2rem] h-[2rem] shadow-3xl drop-shadow-2xl shadow-green-500/30" />
        </div>
      </CardContent>
      <div className="ml-[4rem]">
        <strong className="  font-extrabold text-md"> + 14% </strong>
        <p className=" font-light text-xs"> Weekly customers</p>
      </div>
    </Card>
  );
}
