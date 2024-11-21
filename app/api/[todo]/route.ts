import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { todo: string } }) {
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
export async function PATCH(req: Request,  { params }: { params: { todo: string } }) {

    const data = await req.json()

    const { body } = data

  try {
    // Delete the todo by its id (passed in params.todo)
    const editTodo = await prisma.todo.update({
      where: {
        id: params.todo, // The todo id passed in the URL
      },
      data:{
        body
      }
    });

    // If deletion is successful, return a success response
    return NextResponse.json({ message: "Todo deleted successfully", editTodo }, { status: 200 });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
  }
}
