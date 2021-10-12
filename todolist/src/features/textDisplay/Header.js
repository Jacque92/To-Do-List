import * as React from "react";
import Badge from "@mui/material/Badge";

export const Header = ({ allTasks, completeTasks }) => {
  return (
    <h1>
      TO DO LIST{" "}
      <Badge
        color="primary"
        sx={{ mb: 4 }}
        badgeContent={allTasks.length - completeTasks.length}
      ></Badge>
    </h1>
  );
};
