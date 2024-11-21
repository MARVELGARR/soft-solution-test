'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createPost } from '@/actions/createPost'  // Assuming you have this API function
import { addTodo, editTodo, deleteTodo, toggleTodo } from '@/redux/features/filters/todoSlice'

// Define the Todo type
type Todo = {
  id: string
  text: string
  completed: boolean
}

// Define the RootState type
type RootState = {
  todos: Todo[]
}

export default function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todos)
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('all')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        
        const createdTodo = await createPost({ text: newTodo, completed: false })
        dispatch(addTodo(createdTodo)) 
        setNewTodo('') 
      } catch (error) {
        console.error("Failed to add todo", error)
      }
    }
  }

  const handleEditStart = (todo: Todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const handleEditSave = () => {
    if (editingId && editText.trim()) {
      dispatch(editTodo({ id: editingId, text: editText.trim() }))
      setEditingId(null)
      setEditText('')
    }
  }


  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex gap-2 mb-4">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <Button onClick={handleAddTodo} type="button">Add</Button>
        </form>

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

        <ul className="space-y-2">
          {filteredTodos.map(todo => (
            <li key={todo.id} className="flex items-center gap-2">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => dispatch(toggleTodo(todo.id))}
              />
              {editingId === todo.id ? (
                <Input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={handleEditSave}
                  onKeyPress={(e) => e.key === 'Enter' && handleEditSave()}
                  className="flex-grow"
                />
              ) : (
                <span className={`flex-grow ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                  {todo.text}
                </span>
              )}
              {editingId !== todo.id && (
                <Button variant="outline" size="sm" onClick={() => handleEditStart(todo)}>
                  Edit
                </Button>
              )}
              <Button variant="destructive" size="sm" onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
