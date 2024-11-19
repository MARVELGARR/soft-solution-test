
import { CustomerPieComponent } from "@/components/chartComponent/customerChart";
import { RevenueChartComponent } from "@/components/chartComponent/revenuChart";
import CustomerMap from "@/components/wholeComponent/customerMap";
import PopulationComponent from "@/components/wholeComponent/populationComponent";


export default function Home() {
  return (
   <div className="w-full">
      <PopulationComponent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"/>
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-3  w-full">

        <RevenueChartComponent/>
        <CustomerPieComponent/>
      </div>
      <div className="">
        <CustomerMap/>
      </div>
   </div>
  );
}
