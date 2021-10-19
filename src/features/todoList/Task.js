import * as React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

export const Task = ({ allTasks, handleDelete, handleComplete }) => {
  return allTasks.map((task) => (
    <div key={task.title.toString()}>
      <FormGroup
        sx={{
          pt: 1 / 2,
        }}
      >
        <Grid container>
          <Grid item xs={11} sx={{ textAlign: "left" }}>
            <FormControlLabel
              id="edit"
              label={task.title}
              control={
                <Checkbox onChange={(event) => handleComplete(task, event)} />
              }
            />
          </Grid>

          <Grid item xs={1}>
            <DeleteIcon onClick={(event) => handleDelete(task, event)} />
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  ));
};
