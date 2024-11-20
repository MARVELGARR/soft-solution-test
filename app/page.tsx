import { CustomerPieComponent } from "@/components/chartComponent/customerChart";
import { RevenueChartComponent } from "@/components/chartComponent/revenuChart";
import CustomerList from "@/components/wholeComponent/customerList";
import CustomerMap from "@/components/wholeComponent/customerMap";
import MenuComponent from "@/components/wholeComponent/menuComponent";
import PopulationComponent from "@/components/wholeComponent/populationComponent";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-3">
      <PopulationComponent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4" />
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-3  w-full">
        <RevenueChartComponent />
        <CustomerPieComponent />
      </div>

      <div className="flex gap-[1rem] h-[28rem] justify-start items-start ">
        <div className="flex-grow  ">
          <CustomerMap />
        </div>
        <div className=" flex-shrink-0 ">
          <CustomerList />
        </div>
      </div>

      <MenuComponent/>
    </div>
  );
}
