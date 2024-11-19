import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardHeader, CardTitle } from "../ui/card";


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
          image: '/img/c1', 
        },
        {
          name: "George Litz",
          email: "georgelitz@gmail.com",
          image: '/img/c2'
        },
        {
          name: "John Miller",
          email: "jmiller@gmail.com",
          image: '/img/c3' // or provide a URL if available
        },
        {
          name: "Jane Jonhson",
          email: "jj@gmail.com",
          image: '/img/c4'
        },
        {
          name: "Mezei Ágnes",
          email: "fefekartika@gmail.com",
          image: '/img/c5'
        },
        {
          name: "Katona Beatrix",
          email: "edobram@gmail.com",
          image: '/img/c6'
        },
        {
          name: "Halász Emese",
          email: "jiloputri@yahoo.com",
          image: '/img/c7'
        },
      ];



    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <strong>Customer List</strong>
                </CardTitle>
            </CardHeader>
            <CardHeader>
                <ul>

                    {customerList.map((item, index)=>{
                        return (
                            <li key={index} className="flex items-center">
                                <Avatar>
                                    <AvatarImage src={item.image} alt="customer Image"/>
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
            </CardHeader>
        </Card>
    );
}
 
export default CustomerList;