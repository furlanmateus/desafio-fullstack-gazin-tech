import { Stack, Typography } from '@mui/material';
import AddFab from '../../components/Fab/AddFab';
import { modalStore } from '../../components/Modal/ModalStore';
import BasicPagination from '../../components/Pagination/Pagination';
import DesenvolvedoresList from './DesenvolvedoresList';
import { DesenvolvedorForm } from './DesenvolvedorForm';
import useDesenvolvedores from './hooks/useDesenvolvedores';

const Desenvolvedores = () => {
  const { actions, desenvolvedores, loading, handleSubmit, pagination, fetchPage } = useDesenvolvedores();

  return (
    <Stack gap={3} mt={4} alignItems="center">
      <Typography variant="h2">DESENVOLVEDORES</Typography>
      <DesenvolvedoresList
        desenvolvedores={desenvolvedores}
        loading={loading}
        emptyFeedback={'Ops, não foi possível encontrar nenhum desenvolvedor.'}
        actions={actions}
      />
      {pagination.count > 0 && (
        <BasicPagination count={pagination.count} page={pagination.page} rowsPerPage={10} handleChange={fetchPage} />
      )}
      <AddFab
        onClick={() =>
          modalStore.showModal({
            children: () => <DesenvolvedorForm handleSubmit={handleSubmit} />,
            props: { modalTitle: 'Cadastrar novo desenvolvedor' },
          })
        }
      />
    </Stack>
  );
};

export default Desenvolvedores;
