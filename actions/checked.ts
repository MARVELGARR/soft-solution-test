import { toast } from "@/hooks/use-toast";

const checkedTodo = async ({id, checked}: {id: string, checked: string | boolean}) => {
  try {
    const res = await fetch(`/api/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked }),
    });

  } catch (error) {

    throw new Error(" something went wrong ");
  }
};

export default checkedTodo;
