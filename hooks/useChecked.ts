import { useMutation, useQueryClient } from "@tanstack/react-query";
import checkedTodo from "@/actions/checked";

const useChecked = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ["complete"],
    mutationFn: (data: { id: string; checked: string | boolean }) =>
      checkedTodo(data),
    onSuccess() {
      // Invalidate and refetch todos query
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return { mutateAsync };
};
export default useChecked;
