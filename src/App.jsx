import { Route, Routes } from "react-router-dom"
import ToDoPage from "./pages/toDoList/ToDoPage"
import AddTaskPage from "./pages/addTask/AddTaskPage"
import EditTaskPage from "./pages/editTask/EditTaskPage"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ToDoPage />} />
        <Route path="/tasks/add" element={<AddTaskPage />} />
        <Route path="/tasks/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </>
  )
}

export default App
