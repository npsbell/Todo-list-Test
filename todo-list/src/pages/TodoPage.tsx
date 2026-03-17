import { useEffect, useState } from "react"
import { fetchTodos } from "../api/TodoApi"
import type { Todo } from "../types/Todo"

export const TodoPage = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos()
        setTodos(data)
      } catch (err) {
        setError("Failed to load todos")
      } finally {
        setLoading(false)
      }
    }
    loadTodos()
  }, [])

  if (loading) return <p>Loading todos...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <span>
              {todo.completed ? "Done" : "Not Done"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}