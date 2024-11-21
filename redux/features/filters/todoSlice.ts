import { Todo } from '@prisma/client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo: (state, action: PayloadAction<string>) => 
      state.filter(todo => todo.id !== action.payload),
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.find(todo => todo.id === action.payload.id)
      if (todo) todo.body = action.payload.text
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => 
      action.payload
  },
})

export const { addTodo, toggleTodo, deleteTodo, editTodo, setTodos } = todoSlice.actions
export default todoSlice.reducer

export interface RootState {
  todos: Todo[]
}