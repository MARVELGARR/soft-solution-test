import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const UtilBar = ({className, children}: {className?: string, children?: ReactNode}) => {
    return (
        <div className={cn(className, "w-full")}>
            {children}
        </div>
    );
}
 
export default UtilBar;