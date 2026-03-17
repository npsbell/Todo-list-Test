import { useState } from "react"
import { useTodos } from "../hooks/useTodos"

export const TodoPage = () => {

  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos()

  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return
    addTodo(title)
    setTitle("")
  }

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">
          Add
        </button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>

            <span>
              {todo.completed ? "Done" : "Not Done"}
            </span>

            <div>
              <button onClick={() => toggleTodo(todo.id)}>
                Toggle
              </button>

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}