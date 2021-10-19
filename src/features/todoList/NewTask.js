import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const NewTask = ({ newTask, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} sx={{ display: "flex", width: 1 }}>
      <TextField
        id="standard-basic"
        label="Task"
        variant="standard"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value={newTask.title || ""}
        sx={{ width: 4 / 5 }}
        required
      />
      <Button
        variant="contained"
        type="submit"
        size="medium"
        sx={{ width: 1 / 5, mb: 4, mt: 1.5 }}
      >
        Add
      </Button>
    </form>
  );
};
