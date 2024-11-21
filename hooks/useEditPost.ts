
import editTodo from "@/actions/editPost";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditPost = () => {

    const queryClient = useQueryClient()

    const {mutateAsync, data, error} = useMutation({
        mutationKey: ["editPost"],
        mutationFn: (data: {body: string, id: string})=> editTodo(data),
        onSuccess() {
            // Invalidate and refetch todos query
            queryClient.invalidateQueries({ queryKey: ["todos"] });
            
        },
    })

    return {mutateAsync, data, error};
}
 
export default useEditPost;