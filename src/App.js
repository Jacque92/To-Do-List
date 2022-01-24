import { ToDoBoard } from "./features/todoList/ToDoBoard";
import * as React from "react";
import Grid from "@mui/material/Grid";

//import pages
import { Home } from "./page/Home";

function App() {
  return (
    <Grid id="App">
      <ToDoBoard />
    </Grid>
  );
}
export default App;
