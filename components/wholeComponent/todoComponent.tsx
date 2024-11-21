"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addTodo, editTodo, deleteTodo, toggleTodo } from "@/redux/features/filters/todoSlice";
import { useToast } from "@/hooks/use-toast";
import useTodo from "@/hooks/useTodo";
import mutateTodo from "@/hooks/mutateTodo";
import useEditPost from "@/hooks/useEditPost";
import { RootState } from "@/redux/store";
import { Todo } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";

export const baseUrl = `localhost:3000`;

export default function TodoList() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const { mutateAsync: createTodo } = mutateTodo();
  const { mutateAsync: updateTodo } = useEditPost();

  const { filteredTodos, isLoading } = useTodo();

  // Handle adding a new todo
  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        const newTodoData = await createTodo({ text: newTodo, completed: false });
        if (newTodoData) {
          toast({ title: "Todo Created", description: "Your todo has been created", className: "bg-green-400" });
          dispatch(addTodo(newTodoData));
          setNewTodo(""); // Reset the input field
        } else {
          toast({ title: "Error", description: "Failed to create todo.", variant: "destructive" });
        }
      } catch (error) {
        console.error("Failed to add todo", error);
        toast({ title: "Error", description: "An error occurred while creating the todo.", variant: "destructive" });
      }
    }
  };

  // Handle deleting a todo
  const handleDeleteTodo = async (id: string) => {
    try {
      const res = await fetch(`/api/${id}`, { method: "DELETE", headers: { "Content-Type": "application/json" } });
      if (res.ok) {
        dispatch(deleteTodo(id));
        toast({ title: "Todo Deleted", description: "Your todo has been deleted", className: "bg-green-400" });
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      } else {
        toast({ title: "Todo Deletion Failed", description: "Failed to delete todo.", variant: "destructive" });
      }
    } catch (error) {
      console.error("Failed to delete todo", error);
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    }
  };

  // Start editing a todo
  const handleEditStart = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.body);
  };

  // Save edited todo
  const handleEditSave = async () => {
    if (editingId && editText.trim()) {
      try {
        updateTodo({ id: editingId, body: editText.trim() }).then(()=>{
          
          toast({ title: "Todo Updated", description: "Your todo has been updated", className: "bg-green-400" });
          dispatch(editTodo({ id: editingId, text: editText.trim() }));
          setEditingId(null);
          setEditText("");
        }).catch(()=>{

          toast({ title: "Error", description: "Failed to update todo.", variant: "destructive" });
        })

        
      } catch (error) {
        console.error("Failed to update todo", error);
        toast({ title: "Error", description: "An error occurred while saving the todo.", variant: "destructive" });
      }
    }
  };

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add Todo Form */}
        <form className="flex gap-2 mb-4">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <Button onClick={handleAddTodo} type="button">
            Add
          </Button>
        </form>

        {/* Filter Todos */}
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Filter todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        {/* Todo List */}
        <ul className="space-y-2">
          {filteredTodos?.map((todo) => (
            <li key={todo.id} className="flex items-center gap-2">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => dispatch(toggleTodo(todo.id))}
              />
              {/* Edit Todo */}
              {editingId === todo.id ? (
                <Input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleEditSave()}
                  className="flex-grow"
                />
              ) : (
                <span className={`flex-grow ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
                  {todo.body}
                </span>
              )}
              {/* Edit and Delete Buttons */}
              {editingId !== todo.id && (
                <Button variant="outline" size="sm" onClick={() => handleEditStart(todo)}>
                  Edit
                </Button>
              )}
              <Button variant="destructive" size="sm" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
