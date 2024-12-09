import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("All"); // 控制筛选器状态

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      status: "Active", // 初始状态为 Active
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const handleToggleTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="filter-buttons">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>
        <button
          className={filter === "Active" ? "active" : ""}
          onClick={() => handleFilterChange("Active")}
        >
          Active
        </button>
        <button
          className={filter === "Completed" ? "active" : ""}
          onClick={() => handleFilterChange("Completed")}
        >
          Completed
        </button>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <div key={task.id} className={`task-item ${task.status}`}>
            <span className="task-title">{task.title}</span>
            <button
              className="complete-button"
              onClick={() => handleToggleTask(task.id, "Completed")}
              disabled={task.status === "Completed"}
            >
              Complete
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
