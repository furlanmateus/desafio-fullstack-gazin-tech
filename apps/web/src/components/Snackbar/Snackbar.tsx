import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { observer } from 'mobx-react-lite';
import { snackbarStore } from './SnackbarStore';
import React from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbar = () => {
  return (
    <MuiSnackbar
      id="customSnackbar.snackbar"
      open={snackbarStore.snackbarOpen}
      autoHideDuration={3000}
      onClose={snackbarStore.close}
    >
      <Alert
        id="customSnackbar.alert"
        onClose={snackbarStore.close}
        severity={snackbarStore.state.severity}
        sx={{ width: '100%' }}
      >
        {snackbarStore.state.message}
      </Alert>
    </MuiSnackbar>
  );
};

export default observer(Snackbar);
