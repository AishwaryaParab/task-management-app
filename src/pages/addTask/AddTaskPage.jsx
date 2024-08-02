import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import "./AddTaskPage.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/taskSlice";
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const AddTaskPage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title) {
        dispatch(addTask({ id: uuidv4(), title, desc, status: "Pending", date: dayjs().format('ddd DD, MMMM YYYY') }))
        navigate("/");
    }
  }

  return (
    <>
        <div className="add-task">
            <div className="input-fields">
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" />
                <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter the description" />
            </div>

            <div className="actions">
                <Button onClick={() => navigate("/")} type="outlined" label="Cancel" />
                <Button onClick={handleAddTask} type="fill" label="ADD" />
            </div>
        </div>
    </>
  )
}

export default AddTaskPage;