import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";



function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDelete(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }
  
  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
          categories={CATEGORIES}
          selectedCategory={category}
          onSelectCategory={setCategory}
      />
      <NewTaskForm 
          categories={CATEGORIES.filter((cat) => cat !== "All")}
          onTaskFormSubmit={handleAddTask}
      />
      <TaskList onDeleteTask={handleDelete} tasks={visibleTasks} />
    </div>
  );
}

export default App;
