import { createPost, CreateTodoProp } from "@/actions/createPost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "./use-toast";



const mutateTodo = () => {
    const queryClient = useQueryClient()
    
    const {  isSuccess, data, error, mutateAsync } = useMutation({
        mutationKey: ["addTodo"],
        mutationFn: (body: CreateTodoProp) => createPost(body),
        onSuccess() {
            // Invalidate and refetch todos query
            queryClient.invalidateQueries({ queryKey: ["todos"] });
            
        },
    });
    return {mutateAsync, isSuccess, data};
}
 
export default mutateTodo;