import { ToDoBoard } from "./features/todoList/ToDoBoard";
import * as React from "react";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid id="App">
      <ToDoBoard />
    </Grid>
  );
}
export default App;
