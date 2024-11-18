import { inter } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";


const Greeting = ({className}:{className?: string}) => {
    
    return (
        <div className={cn(className, inter.className)}>
            <h1 className="font-bold text-xl md:text-2xl">Hi, Marvel!</h1>
            <p className=" font-light">Let’s check your store today</p>
        </div>
    );
}
 
export default Greeting;