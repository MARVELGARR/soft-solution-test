import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

// Handle PATCH request for updating a Todo (either its body or completed status)
export async function PATCH(req: Request, { params }: { params: { todo: string } }) {
  const data = await req.json();
  const { body, checked } = data; // We need to expect `body` and `checked`

  try {
    // Update the Todo: either its body or its completed status
    const updatedTodo = await prisma.todo.update({
      where: {
        id: params.todo, // The todo ID passed in the URL
      },
      data: {
        // If body is present, update the body
        ...(body && { body }),

        // If checked is present, toggle the completed status
        ...(checked !== undefined && { completed: checked }),
      },
    });

    // Return success response with updated todo
    return NextResponse.json({ message: "Todo updated successfully", updatedTodo }, { status: 200 });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
  }
}
