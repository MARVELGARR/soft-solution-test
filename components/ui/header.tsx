
import Greeting from "../wholeComponent/greating";
import Notifications from "../wholeComponent/notificatiosn";
import UtilBar from "../wholeComponent/utilBar";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Searchbar from "./searchBar";

const HeaderComponent = () => {
  return (
    <div className="w-full shadow-sm px-[4rem] pb-[2rem]">
      <header className=" w-full flex items-center justify-between">
            <Greeting className="w-full hidden lg:block" />

            <UtilBar className=" w-full flex items-center gap-10">
            <Searchbar />

            <Notifications className="flex items-center gap-6" />

            <div className="flex items-center gap-3">
                    <Avatar className=" w-7 h-7 sm:w-9 sm:h-9">
                        <AvatarImage className="bg-fit " src={"/img/avatar.png"} />
                        <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <p className="font-extrabold text-sm md:base w-full">Marvellous Obatale</p>
            </div>
            </UtilBar>
      </header>
    </div>
  );
};

export default HeaderComponent;
