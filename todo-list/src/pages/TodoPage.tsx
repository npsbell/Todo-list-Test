import { useState } from "react"
import { useTodos } from "../hooks/useTodos"

export const TodoPage = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useTodos()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    addTodo(title, description)
    setTitle("")
    setDescription("")
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId === null) return

    editTodo(editingId, editTitle, editDescription)

    setEditingId(null)
    setEditTitle("")
    setEditDescription("")
  }

  return (
    <div className="todo-page">
      <h1>✨ My Todo List</h1>

      {/* ADD FORM */}
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-group">
          <label htmlFor="title">📝 Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">📄 Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter todo description (optional)"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          ➕ Add Todo
        </button>
      </form>

      {/* TODO LIST */}
      {todos.length === 0 ? (
        <div className="empty-state">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <h2>No todos yet!</h2>
          <p>Add your first todo to get started</p>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              {editingId === todo.id ? (
                <form onSubmit={handleEditSubmit} className="edit-form">
                  <div className="form-group">
                    <label htmlFor={`edit-title-${todo.id}`}>📝 Title</label>
                    <input
                      id={`edit-title-${todo.id}`}
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`edit-desc-${todo.id}`}>📄 Description</label>
                    <input
                      id={`edit-desc-${todo.id}`}
                      type="text"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                    />
                  </div>

                  <div className="button-group">
                    <button type="submit" className="btn btn-success">
                      💾 Save
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setEditingId(null)}
                      className="btn btn-secondary"
                    >
                      ❌ Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="todo-content">
                    <h3>{todo.title}</h3>
                    {todo.description && <p>{todo.description}</p>}
                    
                    <span className={`todo-status ${todo.completed ? 'done' : 'not-done'}`}>
                      {todo.completed ? '✅ Done' : '⏳ Not Done'}
                    </span>
                  </div>

                  <div className="todo-actions">
                    <button 
                      onClick={() => toggleTodo(todo.id)}
                      className="btn btn-primary"
                    >
                      {todo.completed ? '↩️ Undo' : '✓ Complete'}
                    </button>

                    <button
                      onClick={() => {
                        setEditingId(todo.id)
                        setEditTitle(todo.title)
                        setEditDescription(todo.description)
                      }}
                      className="btn btn-warning"
                    >
                      ✏️ Edit
                    </button>

                    <button 
                      onClick={() => deleteTodo(todo.id)}
                      className="btn btn-danger"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}