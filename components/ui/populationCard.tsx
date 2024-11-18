import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

type PopulationCardProps ={
    name: string,
    Icon: React.FC<{className?: string}>
    number: number
}
const PopulationCard = ({name, Icon, number}:PopulationCardProps) => {
    return (
        <Card className="">
            <CardHeader className="">
                <CardTitle className="">
                    <Icon className=""/>
                </CardTitle>
                <CardDescription>
                    {name}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                {number}
            </CardFooter>
        </Card>
    );
}
 
export default PopulationCard;