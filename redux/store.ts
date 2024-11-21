import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './features/filters/filterSlice'
import  todoReducer  from './features/filters/todoSlice'
// ...

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    todos: todoReducer
}})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch