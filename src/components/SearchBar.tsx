import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

const SearchBar: React.FC = () => {
    
  return (
    <Paper
      component="form"
      sx={{ alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquise por CAR"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      </IconButton>
    </Paper>
  );
}
export default SearchBar;