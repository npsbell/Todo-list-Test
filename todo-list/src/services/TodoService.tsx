import type { Todo } from "../types/Todo";

const validateTitle = (title: string): string => {
  const trimmed = title.trim();

  if (!trimmed) {
    throw new Error("Todo title cannot be empty");
  }

  if (trimmed.length > 50) {
    throw new Error("Todo title too long (max 50 characters)");
  }

  return trimmed;
};

const validateDescription = (description: string): string => {
  const trimmed = description.trim();

  if (!trimmed) {
    throw new Error("Description cannot be empty");
  }

  if (trimmed.length > 100) {
    throw new Error("Description too long (max 100 characters)");
  }

  return trimmed;
};

export const createTodo = (title: string, description: string): Todo => {
  const validTitle = validateTitle(title);
  const validDescription = validateDescription(description);

  return {
    id: Date.now(),
    title: validTitle,
    description: validDescription,
    completed: false,
  };
};

// Add
export const addTodo = (
  todos: Todo[],
  title: string,
  description: string,
): Todo[] => {
  const newTodo = createTodo(title, description);
  return [...todos, newTodo];
};

// Edit
export const editTodo = (
  todos: Todo[],
  id: number,
  newTitle: string,
  newDescription: string,
): Todo[] => {
  const validTitle = validateTitle(newTitle);
  const validDescription = validateDescription(newDescription);

  return todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          title: validTitle,
          description: validDescription,
        }
      : todo,
  );
};

// Delete
export const deleteTodo = (todos: Todo[], id: number): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};

// Toggle
export const toggleTodo = (todos: Todo[], id: number): Todo[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
};
