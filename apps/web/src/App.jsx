import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import AppWrap from './components/AppWrap/AppWrap';
import Snackbar from './components/Snackbar/Snackbar';
import Modal from './components/Modal/Modal';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Snackbar />
      <Modal />
      <AppWrap />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
