import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Fab, { FabProps } from '@mui/material/Fab';

const AddFab = (props: FabProps) => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 32, right: 32 }} {...props}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default AddFab;
