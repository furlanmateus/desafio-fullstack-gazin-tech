import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import { observer } from 'mobx-react-lite';
import { modalStore } from './ModalStore';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Modal = () => (
  <div>
    <MuiModal
      open={modalStore.modal}
      onClose={modalStore.close}
      aria-labelledby="MuiModal-modal-title"
      aria-describedby="modal-modal-description"
      {...modalStore.state.props}
    >
      <Box sx={style}>
        {modalStore.state.props.modalTitle && (
          <Typography id="modal-modal-title" variant="h6" component="h2" paddingBottom={2}>
            {modalStore.state.props.modalTitle}
          </Typography>
        )}
        <modalStore.state.children />
      </Box>
    </MuiModal>
  </div>
);

export default observer(Modal);
