export const createPost = async (body: any) => {
    try {
      const res = await fetch(`/api/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
  
      if (res.ok) {
        const post = await res.json();
        return post; // Return the post data if the request is successful
      } else {
        console.error("Post failed with status:", res.status);
        return null; // Return null if the request failed
      }
    } catch (error) {
      console.error("Request failed:", error);
      throw new Error("Request failed"); // Throw an error to be caught in the calling function
    }
};