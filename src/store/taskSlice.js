import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            return {...state, tasks: [...state.tasks, action.payload]}
        },
        editTask: (state, action) => {
            const {id, updatedTask} = action.payload;
            return {...state, tasks: state.tasks.map(task =>
                    task.id === id ? {...task, ...updatedTask} : task
                )}
        },
        deleteTask: (state, action) => {
            const {id} = action.payload;
            return {...state, tasks: state.tasks.filter((task) => task.id !== id)}
        }
    }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;