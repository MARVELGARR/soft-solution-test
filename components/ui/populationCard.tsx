import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

type PopulationCardProps ={
    name: string,
    Icon: React.FC<{className?: string}>
    number: string
}
const PopulationCard = ({name, Icon, number}:PopulationCardProps) => {
    return (
        <Card className=" rounded-md h-fit shadow-xl cursor-pointer">
            <CardHeader className="">
                <CardTitle className="">
                    <Icon className=""/>
                </CardTitle>
            </CardHeader>
            <CardContent >
                <p className=" text-body-grayText">{name}</p>
            </CardContent>
            <CardFooter className="">
                <strong className="text-2xl">{number}</strong>
            </CardFooter>
        </Card>
    );
}
 
export default PopulationCard;