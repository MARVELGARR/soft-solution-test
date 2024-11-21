import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";


type customerListProp = {
    name: string,
    email: string,
    image: string,

}

const CustomerList = () => {


    const customerList: customerListProp[] = [
        {
          name: "Ana Black",
          email: "ana@gmail.com",
          image: '/img/c1.jpeg', 
        },
        {
          name: "George Litz",
          email: "georgelitz@gmail.com",
          image: '/img/c2.jpeg'
        },
        {
          name: "John Miller",
          email: "jmiller@gmail.com",
          image: '/img/c3.jpeg' // or provide a URL if available
        },
        {
          name: "Jane Jonhson",
          email: "jj@gmail.com",
          image: '/img/c4.jpeg'
        },
        {
          name: "Mezei Ágnes",
          email: "fefekartika@gmail.com",
          image: '/img/c5.png'
        },
        {
          name: "Katona Beatrix",
          email: "edobram@gmail.com",
          image: '/img/c6.png'
        },
        {
          name: "Halász Emese",
          email: "jiloputri@yahoo.com",
          image: '/img/c7.png'
        },
      ];



    return (
        <Card className="w-full md:w-fit">
            <CardHeader>
                <CardTitle>
                    <strong>Customer List</strong>
                </CardTitle>
            </CardHeader>
            <CardContent className="mt-[0.9rem]">
                <ul className="flex flex-col gap-2">

                    {customerList.map((item, index)=>{
                        return (
                            <li key={index} className="flex items-center gap-4 cursor-pointer">
                                <Avatar className=" h-auto ">
                                    <AvatarImage  src={item.image} alt="customer Image"/>
                                    <AvatarFallback>{`c${index + 1}`}</AvatarFallback>
                                </Avatar>
                                <div className="">
                                    <strong className="font-bold">{item.name}</strong>
                                    <p className=" font-thin text-xs">{item.email}</p>
                                </div>
                            </li>   
                        )
                    })}
                </ul>
            </CardContent>
        </Card>
    );
}
 
export default CustomerList;