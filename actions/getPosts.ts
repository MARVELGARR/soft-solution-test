export const GetPost = async () => {
    try {
      const res = await fetch(`/api/todo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      if (res.ok) {
        const post = await res.json();
        return post; // Return the post data if the request is successful
      } else {
        console.error("Error gettinf posts:", res.status);
        return null; // Return null if the request failed
      }
    } catch (error) {
      console.error("Request failed:", error);
      throw new Error("Request failed"); // Throw an error to be caught in the calling function
    }
};