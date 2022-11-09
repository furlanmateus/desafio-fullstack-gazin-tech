import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Action } from '../../../components/GridTable/GridTable';
import { snackbarStore } from '../../../components/Snackbar/SnackbarStore';
import { modalStore } from '../../../components/Modal/ModalStore';
import { niveisRepository } from './niveisRepository';
import { Nivel } from '../types';
import { NivelForm } from '../NivelForm';

const handleSnackbarFeedback = (success: boolean) => {
  if (!success) {
    snackbarStore.showSnackbar({ message: 'Erro ao criar ou editar nível!', severity: 'error' });
    return;
  }

  snackbarStore.showSnackbar({ message: 'Nível criado/editado com sucesso!', severity: 'success' });
};

interface Pagination {
  page: number;
  count: number;
}

const useNiveis = () => {
  const [loading, setLoading] = useState(true);
  const [niveis, setNiveis] = useState<Nivel[]>();
  const [pagination, setPagination] = useState<Pagination>({ page: 1, count: 0 });

  const fetchNiveis = async () => {
    setLoading(true);

    const response = await niveisRepository.fetch({
      page: String(pagination.page),
    });

    if (response.ok && response.data) {
      setNiveis(response.data.edges);
      setPagination((curr) => ({ ...curr, count: response.data.totalCount }));
    }
    setLoading(false);
  };

  const fetchPage = (page: number) => {
    console.log(page);
    setPagination((curr) => ({ ...curr, page }));
  };

  const deleteNivel = async (item: Nivel) => {
    const res = await niveisRepository.remove(item.id);

    if (res.ok) {
      fetchNiveis();
      snackbarStore.showSnackbar({ message: 'Nivel removido com sucesso!', severity: 'success' });
    }
  };

  const handleSubmit = async (data: Nivel) => {
    setLoading(true);

    const response = await niveisRepository.save(data);
    if (response.ok && response.data) {
      modalStore.close();
      fetchNiveis();
    }

    handleSnackbarFeedback(response.ok);
    setLoading(false);
  };

  const editNivel = async (item: Nivel) => {
    modalStore.showModal({
      children: () => <NivelForm id={item.id} handleSubmit={handleSubmit} />,
      props: { modalTitle: 'Editar nível' },
    });
  };

  const actions: Action<Nivel>[] = [
    {
      Icon: EditIcon,
      execute: editNivel,
    },
    {
      Icon: DeleteForeverIcon,
      execute: deleteNivel,
    },
  ];

  useEffect(() => {
    fetchNiveis();
  }, [pagination.page]);

  return {
    niveis,
    loading,
    fetchNiveis,
    deleteNivel,
    handleSubmit,
    fetchPage,
    actions,
    pagination,
  };
};

export default useNiveis;
