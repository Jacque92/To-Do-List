import { useState } from "react";
import { Header } from "../textDisplay/Header";

import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";
import Grid from "@mui/material/Grid";
import * as React from "react";

export const ToDoBoard = () => {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, [name]: value, isComplete: false }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      newTask.title !== "" &&
      !allTasks.some((task) => task.title === newTask.title)
    ) {
      setAllTasks((prev) => [newTask, ...prev]);
      setNewTask({});
    }
  };

  const handleDelete = (taskToRemove, event) => {
    handleComplete(taskToRemove, event);
    setAllTasks((prev) =>
      prev.filter((task) => task.title !== taskToRemove.title)
    );
  };

  const [completeTasks, setCompleteTasks] = useState([]);
  const handleComplete = (taskCompleted, event) => {
    taskCompleted.isComplete
      ? (taskCompleted.isComplete = false)
      : (taskCompleted.isComplete = true);

    if (event.target.checked) {
      setNewTask({ isComplete: false });

      setCompleteTasks((prev) => [...prev, taskCompleted]);
    } else {
      setNewTask({ isComplete: true });

      setCompleteTasks((prev) =>
        prev.filter((task) => task.title !== taskCompleted.title)
      );
    }
    if (allTasks.length > 2) {
      handleSort(allTasks);
    }
  };

  const handleSort = (tasks) => {
    const arr = tasks;
    arr.sort((a, b) => a.isComplete - b.isComplete);
  };

  return (
    <Grid
      sx={{
        width: 1 / 3,
        mx: "auto",
        mt: 6,
        py: 2,
        textAlign: "center",
      }}
      id="todoBoard"
    >
      <Header allTasks={allTasks} completeTasks={completeTasks} />

      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <TaskList
        allTasks={allTasks}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </Grid>
  );
};
