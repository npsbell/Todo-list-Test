import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TodoPage } from "./pages/TodoPage"
import { NotFound } from "./pages/NotFound"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App