import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


type Params = {
  params: { todo: string }
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    // Delete the todo by its id (passed in params.todo)
    const deletedTodo = await prisma.todo.delete({
      where: {
        id: params.todo, // The todo id passed in the URL
      },
    });

    // If deletion is successful, return a success response
    return NextResponse.json({ message: "Todo deleted successfully", deletedTodo }, { status: 200 });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
  }
}
export async function PATCH(
  req: NextRequest,
  { params }: Params
) {
  const data = await req.json();
  const { body, checked } = data;

  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: params.todo,
      },
      data: {
        ...(body && { body }),
        ...(checked !== undefined && { completed: checked }),
      },
    });

    return NextResponse.json(
      { message: "Todo updated successfully", updatedTodo },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: String(error) },
      { status: 500 }
    );
  }
}
