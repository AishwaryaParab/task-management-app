import { useDispatch } from "react-redux";
import Status from "../status/Status";
import "./TaskItem.css";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteTask } from "../../store/taskSlice";
import { useNavigate } from "react-router-dom";

const TaskItem = ({ id, title, desc, status, date }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask({ id }));
  }

  return (
    <div className="task-item">
        <div className="task-icon">
            <div>
                <p>T</p>
            </div>
        </div>

        <div className="task-details">
            <div>
                <h3 className="title">{title}</h3>
                <Status status={status} />
            </div>
            <p className="desc">
                {desc}
            </p>
            <div>
                <p className="date">{date}</p>
                <div className="task-actions">
                    <AiOutlineEdit onClick={() => {navigate(`/tasks/edit/${id}`)}} className="edit" color="#034EA2" />
                    <RiDeleteBin6Line onClick={() => {handleDeleteTask(id)}} className="delete" color="red" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskItem