import { CustomerPieComponent } from "@/components/chartComponent/customerChart";
import { RevenueChartComponent } from "@/components/chartComponent/revenuChart";
import CustomerList from "@/components/wholeComponent/customerList";
import CustomerMap from "@/components/wholeComponent/customerMap";
import MenuComponent from "@/components/wholeComponent/menuComponent";
import PopulationComponent from "@/components/wholeComponent/populationComponent";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-3 flex-wrap">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      {/* Population Component */}
      <PopulationComponent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4" />
      
      {/* Revenue and Customer Pie Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 w-full">
        <RevenueChartComponent />
        <CustomerPieComponent />
      </div>

      {/* Customer Map and Customer List (Mobile-friendly layout) */}
      <div className="md:flex md:flex-row grid grid-cols-1 gap-2 h-[28rem] md:h-auto md:gap-[1rem] md:justify-start md:items-start">
        <div className="flex-grow mb-4 md:mb-0">
          <CustomerMap />
        </div>
        <div className="md:flex-shrink-0 flex-grow">
          <CustomerList />
        </div>
      </div>

      {/* Menu Component */}
      <div className="mt-[28rem] md:mt-0">
        <MenuComponent />
      </div>
    </div>
  );
}
