
type editTodoProp ={
    body: string,
    id: string
}
const editTodo = async ({body, id}: editTodoProp) => {
  try {
    const res = await fetch(`/api/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({body}),
    });
    if (res.ok) {
      const post = await res.json();
      console.log(post, "Edited "); // Return the post data if the request is successful
    } else {
      console.error("todo failed with status:", res.status);
      return null; // Return null if the request failed
    }
  } catch (error) {
    console.error("Request failed:", error);
    throw new Error("Request failed"); // Throw an error to be caught in the calling function
  }
};

export default editTodo;
