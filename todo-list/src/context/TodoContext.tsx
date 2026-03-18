import { createContext, useEffect, useState } from "react";
import { fetchTodos } from "../api/TodoApi";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../services/TodoService";
import type { Todo, TodoContextType } from "../types/Todo";

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // โหลด todos
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch {
        setError("Error loading todos");
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  const handleAddTodo = (title: string, description: string) => {
    try {
      setTodos((prev) => addTodo(prev, title, description));
      alert("Todo added successfully");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleEditTodo = (id: number, title: string, description: string) => {
    try {
      setTodos((prev) => editTodo(prev, id, title, description));
      alert(`Todo "${title}" updated successfully`);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDeleteTodo = (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this todo?");

    if (!confirmDelete) return;

    setTodos((prev) => deleteTodo(prev, id));
    alert("Todo deleted");
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) => toggleTodo(prev, id));
    alert("Status updated");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo: handleAddTodo,
        deleteTodo: handleDeleteTodo,
        toggleTodo: handleToggleTodo,
        editTodo: handleEditTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
