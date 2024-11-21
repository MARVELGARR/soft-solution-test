import { GetPost } from "@/actions/getPosts";
import { Todo } from '@prisma/client'
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const useTodo = () => {
    const todoFilterState = useSelector((state: RootState) => state.filter)
    const todoReduxState = useSelector((state: RootState) => state.todos)

    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ["todos"],
        queryFn: GetPost,
        placeholderData: todoReduxState
    })

    const filteredTodos = (data || todoReduxState || []).filter(todo => {
        if (todoFilterState === 'active') return !todo.completed
        if (todoFilterState === 'completed') return todo.completed
        return true
    })

    return { 
        data: data || todoReduxState || [], 
        filteredTodos, 
        isLoading, 
        error, 
        isSuccess 
    };
}

export default useTodo;