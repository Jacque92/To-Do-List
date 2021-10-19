import * as React from "react";
import Badge from "@mui/material/Badge";

export const Counter = ({ allTasks, completeTasks }) => {
  return (
    <div>
      <Badge
        color="secondary"
        badgeContent={allTasks.length - completeTasks.length}
      ></Badge>
      <p>Task Complete</p>
    </div>
  );
};
