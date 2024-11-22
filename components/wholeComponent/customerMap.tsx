
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import MapComponent from "./te";



const CustomerMap = () => {
    return (
        <Card className="h-full w-full ">
            <CardHeader>
                <CardTitle>
                    <strong>Customer Map</strong>
                </CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent className="mt-[1.3rem]">
                <MapComponent/>
            </CardContent>
        </Card>
    );
}
 
export default CustomerMap;