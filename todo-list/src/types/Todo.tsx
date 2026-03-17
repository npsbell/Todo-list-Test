export interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
}

export interface TodoContextType {
  todos: Todo[]
  addTodo(title: string): void
  deleteTodo(id: number): void
  toggleTodo(id: number): void
}