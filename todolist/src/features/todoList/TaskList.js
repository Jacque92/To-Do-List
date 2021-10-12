import React from "react";
import { Task } from "./Task";

export const TaskList = ({ allTasks, handleDelete, handleComplete }) => {
  return (
    <Task
      allTasks={allTasks}
      handleDelete={handleDelete}
      handleComplete={handleComplete}
    />
  );
};
