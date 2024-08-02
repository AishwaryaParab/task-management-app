import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import TaskList from "../../components/taskList/TaskList";
import "./ToDoPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ToDoPage = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const progressTasks = tasks?.filter(task => task.status === 'In Progress');
  const pendingTasks = tasks?.filter(task => task.status === 'Pending');
  const completedTasks = tasks?.filter(task => task.status === 'Completed');

  const navigate = useNavigate();

  return (
    <>
        <div className="task-list">
            <div className="search">
                <IoSearchOutline />
                <input placeholder="Search To-Do" />
            </div>

            <TaskList status="In Progress" tasks={progressTasks} />
            <TaskList status="Pending" tasks={pendingTasks} />
            <TaskList status="Completed" tasks={completedTasks} />

            <div onClick={() => navigate("/tasks/add")} className="add-btn">
              <IoMdAdd cursor="pointer" size={20} className="add-icon" />
            </div>
        </div>
    </>
  )
}

export default ToDoPage