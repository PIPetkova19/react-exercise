import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleTaskChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask(""); //чистим input, не списъка
        }
    }

    function handleRemoveTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div id="container">
            <h1 id="header">To-Do list</h1>
            <input type="text" id="inputTask" value={newTask} onChange={handleTaskChange} placeholder='Enter a task'></input>
            <button id="addBtn" onClick={handleAddTask}>Add</button>

            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>{task}
                        <button id="deleteBtn" onClick={() => handleRemoveTask(index)}> Delete</button>
                        <button id="upBtn" onClick={() => moveTaskUp(index)}>Up</button>
                        <button id="downBtn" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>)
                }
            </ul>
        </div >
    );
}

export default ToDoList