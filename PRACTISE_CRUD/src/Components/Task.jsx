import React from "react";

const Task = (task) => {
  return (
    <div
      className="task"
    >
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th  scope="col">Task</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr   style={{ backgroundColor: task.completed ? "green": "White" }}>
          
            <td>{task.id}</td>
            <td >{task.taskName}</td>
            <td>
              <button className="btn btn-success" onClick={() => task.completedTask(task.id)}>
                Complete
              </button>
              <button className="btn btn-danger" onClick={() => task.deleteTask(task.id)}>X</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <h1>{task.id}</h1>
      <h1>{task.taskName}</h1>
      <button onClick={() => task.completedTask(task.id)}>Complete</button>
      <button onClick={() => task.deleteTask(task.id)}>X</button> */}
    </div>
  );
};
export default Task;
