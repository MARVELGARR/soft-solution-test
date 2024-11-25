


export type CreateTodoProp = {

  text: string, 
  completed: boolean 
  
}

export type Todo = {
  id: string;  
  title?: string;  
  body: string;
  completed: boolean;  
  createdAt: Date;  
  updatedAt: Date;  
}

export const createPost = async ({text, completed} : CreateTodoProp): Promise<Todo | null> => {
    try {
      const res = await fetch(`${process.env.BASE_URL_LOCAL}/api/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({text, completed})
      });
  
      if (res.ok) {
        const post = await res.json();
        return post; // Return the post data if the request is successful
      } else {
        console.error("Post failed with status:", res.status);
        return null // Return null if the request failed
      }
    } catch (error) {
      console.error("Request failed:", error);
      throw new Error("Request failed"); // Throw an error to be caught in the calling function
    }
};