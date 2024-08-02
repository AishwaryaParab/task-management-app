import { useState } from "react";
import "./TaskList.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import TaskItem from "../taskItem/TaskItem";

const TaskList = ({ status, tasks }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <div className="list-type" onClick={() => setOpen(!open)}>
            <p className="status">{status} <span>({tasks.length})</span></p>
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>

        {open && tasks?.map(({ id, title, desc, status, date }) =>
          <TaskItem
            key={id}
            id={id}
            title={title}
            desc={desc}
            status={status}
            date={date}
          />)}
    </div>
  )
}

export default TaskList