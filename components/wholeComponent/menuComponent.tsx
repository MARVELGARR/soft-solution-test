"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "@/redux/features/filters/filterSlice";
import { RootState } from "@/redux/store";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

const MenuComponent = () => {
  const menuFilters = [
    { name: "All Category", id: 1 },
    { name: "Breakfast", id: 2 },
    { name: "Lunch", id: 3 },
    { name: "Dinner", id: 4 },
  ];

  const menuOptions = [
    {
      name: "Surf & Turf Gift Basket",
      quantity: 456,
      price: 89.24,
      image: "/img/menu1.jpeg",
    },
    {
      name: "Shaking Beef Tri-Tip",
      quantity: 456,
      price: 69.46,
      image: "/img/menu2.jpeg",
    },
    {
      name: "BBQ Rib Dinner",
      quantity: 456,
      price: 69.21,
      image: "/img/menu3.jpeg",
    },
    {
      name: "Chicken & Ribs Combo",
      quantity: 456,
      price: 98.49,
      image: "/img/menu4.jpeg",
    },
    {
      name: "Fried Chicken Dinner",
      quantity: 456,
      price: 83.56,
      image: "/img/menu5.jpeg",
    },
    {
      name: "Dark & Stormy",
      quantity: 456,
      price: 90.58,
      image: "/img/menu6.jpeg",
    },
  ];

  const dispatch = useDispatch();
  const currentFilter = useSelector(
    (state: RootState) => state.filter
  );

  const handleSelect = (selected: string) => {
    dispatch(setFilters(selected));
  };

  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle>Menu</CardTitle>
        <ul className=" w-full flex items-end justify-end gap-3">
          {menuFilters.map((item) => {
            return (
              <li
                onClick={() => handleSelect(item.name)}
                key={item.id}
                className={cn(
                  currentFilter == item.name ? " text-[#6C5DD3]" : "",
                  ` hover:text-[#6C5DD3] font-bold relative cursor-pointer`
                )}
              >
                {item.name}
                {currentFilter == item.name && (
                  <div className="w-full h-[0.15rem] bg-[#6C5DD3] absolute -bottom-[0.4rem]"></div>
                )}
              </li>
            );
          })}
        </ul>
        <Separator className=" -mt-11" />
      </CardHeader>
      {currentFilter == "All Category" ? (
        <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {menuOptions.slice(0, 2).map((item) => (
            <div
              key={item.name}
              className="relative cursor-pointer overflow-hidden rounded-lg"
            >
              <AspectRatio ratio={10 / 3.5}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 hover:bg-black/60 flex items-end  p-4 text-white">
                  <div className="flex items-end justify-between w-full bg-white bg-opacity-30 backdrop-blur-[27.182817459106445px] shadow-[0px_4px_6px_-2px_#1E293B1A] hover:shadow-[0px_12px_16px_-4px_#1E293B0A] p-4 rounded-lg">
                    <div className="flex flex-col w-full">
                      <h3 className="font-semibold text-black">{item.name}</h3>
                      <p className="text-xs text-gray-300">
                        {item.quantity} Served
                      </p>
                    </div>
                    <p className="text-sm text-black">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {menuOptions.slice(2).map((item) => (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-lg cursor-pointer"
            >
              <AspectRatio ratio={1}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 hover:bg-black/60 flex items-end  p-4 text-white">
                  <div className="flex items-end justify-between w-full bg-white bg-opacity-30 backdrop-blur-[27.182817459106445px] shadow-[0px_4px_6px_-2px_#1E293B1A] hover:shadow-[0px_12px_16px_-4px_#1E293B0A] p-4 rounded-lg">
                    <div className="flex flex-col w-full">
                      <h3 className="font-semibold text-black">{item.name}</h3>
                      <p className="text-xs text-gray-300">
                        {item.quantity} Served
                      </p>
                    </div>
                    <p className="text-sm text-black">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </CardContent>
      ): (
        
            <div className="h-full w-full flex items-center justify-center text-2xl font-extrabold">{"Coming soon..."}</div>
        
      )}
      
    </Card>
  );
};

export default MenuComponent;
