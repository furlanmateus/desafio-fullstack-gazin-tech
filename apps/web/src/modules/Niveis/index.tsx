import { Stack, Typography } from '@mui/material';
import AddFab from '../../components/Fab/AddFab';
import { modalStore } from '../../components/Modal/ModalStore';
import BasicPagination from '../../components/Pagination/Pagination';
import useNiveis from './hooks/useNiveis';
import NiveisList from './NiveisList';
import { NivelForm } from './NivelForm';

const Niveis = () => {
  const { actions, niveis, loading, handleSubmit, pagination, fetchPage } = useNiveis();

  return (
    <Stack gap={3} mt={4} alignItems="center">
      <Typography variant="h2">Níveis</Typography>
      <NiveisList
        niveis={niveis}
        loading={loading}
        emptyFeedback={'Ops, não foi possível encontrar nenhum nível.'}
        actions={actions}
      />
      {pagination.count > 0 && (
        <BasicPagination count={pagination.count} page={pagination.page} rowsPerPage={10} handleChange={fetchPage} />
      )}
      <AddFab
        onClick={() =>
          modalStore.showModal({
            children: () => <NivelForm handleSubmit={handleSubmit} />,
            props: { modalTitle: 'Cadastrar novo nível' },
          })
        }
      />
    </Stack>
  );
};

export default Niveis;
