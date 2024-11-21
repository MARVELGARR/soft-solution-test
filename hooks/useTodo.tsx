import { GetPost } from "@/actions/getPosts";
import { useQuery } from "@tanstack/react-query";


const useTodo = () => {

    const {} = useQuery({
        queryKey: ["todos"],
        queryFn: () => GetPost()
    })

    return {};
}
 
export default useTodo;