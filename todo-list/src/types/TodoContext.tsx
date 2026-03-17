import type { Todo } from "./Todo"

export interface TodoContextType {
  todos: Todo[]
  addTodo(title: string): void
  deleteTodo(id: number): void
  toggleTodo(id: number): void
}