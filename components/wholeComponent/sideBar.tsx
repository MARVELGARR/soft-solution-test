"use client";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { Analytic, Customers, DashboardSvg, MenuSvg, OrderSvg } from "@/data.tsx/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SubscriptionCard from "../ui/subscriptionCard";

type MenuItem = {
  name: string;
  icon: React.FC<{ className?: string }>;
  link: string;
  isActive: boolean
}

const SideBar = () => {
  const { state, isMobile, open } = useSidebar();
  const baseUrl = process.env.BASE_URL_LOCAL
  const pathName = usePathname()

  const sideBarMenuItems = [
    {name: "Dashboard", icon: DashboardSvg, link: `/`, isActive: pathName === `/` },
    {name: "Orders", icon: OrderSvg, link: `/orders`, isActive: pathName === `/orders`},
    {name: "Analytic", icon: Analytic, link: `/analytics`, isActive: pathName === `/analytics`},
    {name: "Customer", icon: Customers, link: `/customer`, isActive: pathName === `/customer`},
    {name: "Menu", icon: MenuSvg, link: `/menu`, isActive: pathName === `/menu`},
    {name: "Todo", icon: MenuSvg, link: `/todo`, isActive: pathName === `/todo`},
  ] as MenuItem[]

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2 p-3">
            <div className={` ${!open? "-ml-4" : ""} w-9 h-9 bg-purple-600 rounded-tl-lg rounded-br-lg flex items-center justify-center shrink-0`}>
              <Image
                width={24}
                height={24}
                className="w-6 h-6"
                alt="logo"
                src="/svg/logo.svg"
              />
            </div>
            <div
              className={`
              flex flex-col items-start
              transition-[opacity,max-width] duration-200 ease-in-out
              ${
                state === "collapsed"
                  ? "max-w-0 overflow-hidden md:opacity-0"
                  : "max-w-full md:opacity-100"
              }
              opacity-100 // Always visible on mobile
            `}
            >
              <strong className="lg:text-xl whitespace-nowrap">
                Marvellous
              </strong>
              <p className="text-[0.8em] whitespace-nowrap">Admin Dashboard</p>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarMenuItems.map((item) => (
                <SidebarMenuItem   key={item.name}>
                  <SidebarMenuButton className={cn(item.isActive ? "bg-sidebar-accent p-6 text-sidebar-accent-foreground" : "p-6 ", "rounded-lg")} variant={"default"} asChild>

                    <Link 
                      href={item.link} 
                      className="flex items-center gap-2 hover:stroke-sidebar-icon p-2 rounded-md transition-colors duration-200 "
                    >
                      <item.icon className={cn(item.isActive ? " stroke-white": "",`w-5 h-5 `)} />
                      <span className={`
                        
                        transition-all duration-200 ease-in-out
                        ${state === 'collapsed' ? 'max-w-0 overflow-hidden md:opacity-0' : 'max-w-full md:opacity-100'}
                        opacity-100 // Always visible on mobile
                      `}>
                        {item.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {state == "expanded" &&(<SubscriptionCard/>)}
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
