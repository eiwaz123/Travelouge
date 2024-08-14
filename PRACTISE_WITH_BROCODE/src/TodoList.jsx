import React, { useState } from "react";
// import "./index.css";
const TodoList = () => {
  const [task, setTask] = useState(["Shower", "Tanghalian", "ARAL"]);
  //gagamitin ang newTask pandagdag sa task
  const [newTask, setNewTask] = useState("");
  const handleInputChange = (event) => {
    //Pra to sa text box pag may ni type to na something pang kuha ba
    setNewTask(event.target.value);
  };
  const addTask = () => {
    //Eto yung pang execute pra mapasok ang task sa setNewTask
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);

    // setTask((t) => t.filter((_, i) => i !== index));
  };
  const moveTaskup = (index) => {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
    //pang move up nang task
  };
  const moveTaskDown = (index) => {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  };

  return (
    <div>
      <div className="text-center mt-44">
      <p class="text-6xl text-purple-600">TODO TASK</p>
      <p class="text-4xl font-medium text-purple-900 dark:text-white">Add Task</p>
        <div> 
          <input
            type="text"
           className="border-8 border-indigo-600 p-5 m-2 rounded-lg"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a task..."
          />
          <button onClick={addTask}>Add Task</button>
          <ol className="" >
            {task.map((task, index) => (
              <li className="text-5xl  text-purple-600  list-decimal border-8 border-indigo-600 p-5 m-2 rounded-lg    "  key={index}>
                {task}
                <button  className="ml-5 py-2.5 px-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => deleteTask(index)}>Delete</button>
                <button className="ml-5 py-2.5 px-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  " onClick={() => moveTaskup(index)}>Up</button>
                <button className="ml-5 py-2.5 px-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  " onClick={() => moveTaskDown(index)}>Down</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
