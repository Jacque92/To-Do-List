import * as React from 'react';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const NewTask = ({ newTask, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} sx={{ display: 'flex', width: 1 }}>
      <TextField
        id='standard-basic'
        label='Task'
        variant='standard'
        name='title'
        onChange={handleChange}
        placeholder='Title'
        value={newTask.title || ''}
        sx={{ width: 4 / 5 }}
        required
      />
      <IconButton
        color='primary'
        size='medium'
        sx={{ width: 1 / 5, mb: 4, mt: 1.5 }}
        type='submit'
      >
        <AddShoppingCartIcon />
      </IconButton>
    </form>
  );
};
