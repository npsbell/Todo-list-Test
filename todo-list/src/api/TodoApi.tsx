import type { Todo } from "../types/Todo"

export const fetchTodos = async (): Promise<Todo[]> => {
  //  await new Promise(res => setTimeout(res, 2000))
  const res = await fetch("/todos.json")

  if (!res.ok) {
    throw new Error("Failed to fetch todos")
  }

  return res.json()
}