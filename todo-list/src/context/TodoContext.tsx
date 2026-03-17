import { createContext, useEffect, useState } from "react"
import { fetchTodos } from "../api/TodoApi"
import {
  addTodo,
  deleteTodo,
  toggleTodo
} from "../services/TodoService"
import type { Todo, TodoContextType } from "../types/Todo"

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // โหลด todos
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos()
        setTodos(data)
      } catch {
        setError("Error loading todos")
      } finally {
        setLoading(false)
      }
    }

    loadTodos()
  }, [])

  const handleAddTodo = (title: string) => {
    try {
      setTodos(prev => addTodo(prev, title))
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(prev => deleteTodo(prev, id))
  }

  const handleToggleTodo = (id: number) => {
    setTodos(prev => toggleTodo(prev, id))
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo: handleAddTodo,
        deleteTodo: handleDeleteTodo,
        toggleTodo: handleToggleTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}