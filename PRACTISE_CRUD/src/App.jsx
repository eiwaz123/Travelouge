import { useState } from "react";
import "./design.css";
import Task from "./Components/Task"
import Header from "./Components/header"

function App() {
  //Eto yung mismong laman nang list
  const [todoList, setTodolist] = useState([]);
  //Ginagamit to pang pasok sa loob nang todoList mula sa input
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    //eto yung pang grabe nang value doon sa input
    setNewTask(event.target.value);
  };
  const addtask = () => {
    //Dito Pinapasok ang process kung saan pinapasok ang newtask sa  todo list
    // const newTodoList = [...todoList, newTask];
    // setTodolist(newTodoList);
    //pang clear nang text
    //Second Method
    const task = {
      //Grabing the last id dito todoList.length i mminues 1 mula sa previous tapos add 1
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed:false,
    };
    setTodolist([...todoList, task]);
  };
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    setTodolist(newTodoList);
  };
  const completedTask = (id) => {
    setTodolist(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    )
  }
  return (

    <div className="App">
      <div> 
        <Header />
      </div>
      <div className="container">
        <div className="addtask">
          <input type="text" onChange={handleChange} />
          <button className="btn btn-primary" onClick={addtask}>
            Add
          </button>
        </div>
        <div className="list">
          {/* I ggrabe dito  */}
          {todoList.map((task) => {
            return (
              <Task  taskName={task.taskName} id={task.id} deleteTask={deleteTask}
              completedTask={completedTask}
              completed={task.completed}
              
      
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
