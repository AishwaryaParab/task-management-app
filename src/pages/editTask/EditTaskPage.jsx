import { useEffect, useState } from "react";
import "./EditTaskPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../store/taskSlice";
import Button from "../../components/button/Button";
import Status from "../../components/status/Status";
import Select from "react-select";
import { options } from "../../utils/data";
import dayjs from "dayjs";

const EditTaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => state.tasks.tasks?.find((task) => task.id === id));
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (task) {
        setTitle(task.title);
        setDesc(task.desc);
        setSelectedStatus(options.find((option) => option.value === task.status));
    }
  }, [task]);

  const handleEditTask = () => {
    if (title) {
      dispatch(editTask({id: task.id, updatedTask: { title, desc, status: selectedStatus.value, date: dayjs().format('ddd DD, MMMM YYYY') }}));
      navigate('/');
    }
  }

  const handleOptions = (selectedOption) => {
    setSelectedStatus(selectedOption);
  }

  // Custom option rendering
  const CustomOption = (props) => {
    const { innerRef, innerProps, data } = props;
    return (
      <div ref={innerRef} {...innerProps} style={{padding: "10px 20px"}}>
        <Status status={data.value} />
      </div>
    );
  };

  return (
    <>
        <div className="edit-task">
            <div className="input-fields">
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" />
                <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter the description" />
                <Select
                    value={selectedStatus}
                    onChange={handleOptions}
                    className="select-status"
                    options={options}
                    components={{ Option: CustomOption }}
                />
            </div>

            <div className="actions">
                <Button onClick={() => navigate("/")} type="outlined" label="Cancel" />
                <Button onClick={handleEditTask} type="fill" label="Update" />
            </div>
        </div>
    </>
  )
}

export default EditTaskPage