# 📝 Todo List App (React + Vite)

## 🚀 How to Run

```bash
git clone <repo-url>
cd todo-list
npm install
npm run dev
```

Open: http://localhost:5173

---

## 💡 Thought Process

This project was designed with a focus on **clean structure, scalability, and maintainability**, even for a small application.

---

### 🧠 Architecture & Structure

The codebase is organized into clear layers to follow separation of concerns:

* `api/` → handles data fetching
* `services/` → contains business logic (validation, CRUD operations)
* `context/` → manages global state using React Context API
* `hooks/` → provides custom hooks (e.g., `useTodos`) for cleaner state access
* `types/` → defines shared TypeScript interfaces (Todo, Context types)
* `pages/` → responsible for UI rendering

This structure improves readability, reusability, and makes the code easier to scale.

---

### ⚙️ State Management

I used **React Context API** to manage global state and avoid prop drilling.
A custom hook (`useTodos`) is used to encapsulate context logic and simplify usage across components.

---

### ✅ Validation Strategy

Validation is implemented in multiple layers:

* UI layer: prevents empty input before submission
* Service layer: enforces rules (length, required fields) and throws errors

This ensures consistent and reliable data handling.

---

### ⏳ Loading & ❌ Error Handling

* Implemented `loading` and `error` states in the Context layer
* Displayed a loading spinner during data fetching
* Provided an error UI with a retry option

---

### 🎯 User Experience

* Alerts provide immediate feedback for user actions
* Confirmation dialog prevents accidental deletion
* Controlled form inputs ensure better state management

---

### 🌐 Routing

Used React Router to manage navigation and implemented a **404 page** for unknown routes.

---

## 📌 Notes

* Uses a mock API (`/todos.json`)
* All CRUD operations are handled on the client side
* Designed to be easily extendable (e.g., connect to real backend or add new features)

---
