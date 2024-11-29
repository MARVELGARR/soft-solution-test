import { Todo } from "./createPost";

export const GetPost = async (): Promise<Todo[]> => {
    try {
        const res = await fetch(`/api/todo`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
    
        if (!res.ok) {
            throw new Error('Failed to fetch todos');
        }

        const data = await res.json();
        
        // Handle potential nested response
        return data.todos || data;
    } catch (error) {
        console.error("Fetch todos error:", error);
        return []; // Return empty array instead of null
    }
};