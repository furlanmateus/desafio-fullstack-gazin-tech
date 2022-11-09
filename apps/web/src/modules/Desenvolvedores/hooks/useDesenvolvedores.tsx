import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Action } from '../../../components/GridTable/GridTable';
import { snackbarStore } from '../../../components/Snackbar/SnackbarStore';
import { Desenvolvedor, DesenvolvedorPost } from '../types';
import { desenvolvedoresRepository } from './desenvolvedoresRepository';
import { DesenvolvedorForm } from '../DesenvolvedorForm';
import { modalStore } from '../../../components/Modal/ModalStore';
import { formatDateToApi } from '../../../utils/formatters/formatDate';

const handleSnackbarFeedback = (success: boolean) => {
  if (!success) {
    snackbarStore.showSnackbar({ message: 'Erro ao criar ou editar desenvolvedor!', severity: 'error' });
    return;
  }

  snackbarStore.showSnackbar({ message: 'Desenvolvedor criado/editado com sucesso!', severity: 'success' });
};

interface Pagination {
  page: number;
  count: number;
}

const useDesenvolvedores = () => {
  const [loading, setLoading] = useState(true);
  const [desenvolvedores, setDesenvolvedores] = useState<Desenvolvedor[]>();
  const [pagination, setPagination] = useState<Pagination>({ page: 1, count: 0 });

  const fetchDesenvolvedores = async () => {
    setLoading(true);

    const response = await desenvolvedoresRepository.fetch({
      page: String(pagination.page),
    });

    if (response.ok && response.data) {
      setDesenvolvedores(response.data.edges);
      setPagination((curr) => ({ ...curr, count: response.data.totalCount }));
    }
    setLoading(false);
  };

  const fetchPage = (page: number) => {
    console.log(page);
    setPagination((curr) => ({ ...curr, page }));
  };

  const deleteDesenvolvedor = async (item: Desenvolvedor) => {
    const res = await desenvolvedoresRepository.remove(item.id);

    if (res.ok) {
      fetchDesenvolvedores();
      snackbarStore.showSnackbar({ message: 'Desenvolvedor removido com sucesso!', severity: 'success' });
    }
  };

  const handleSubmit = async ({ nivel, ...data }: Desenvolvedor) => {
    setLoading(true);
    const formattedDataDesenvolvedor: DesenvolvedorPost = {
      ...data,
      nivelId: nivel.id,
      dataNascimento: formatDateToApi(data.dataNascimento as Date),
    };

    const response = await desenvolvedoresRepository.save(formattedDataDesenvolvedor);
    if (response.ok && response.data) {
      modalStore.close();
      fetchDesenvolvedores();
    }

    handleSnackbarFeedback(response.ok);
    setLoading(false);
  };

  const editDesenvolvedor = async (item: Desenvolvedor) => {
    modalStore.showModal({
      children: () => <DesenvolvedorForm id={item.id} handleSubmit={handleSubmit} />,
      props: { modalTitle: 'Editar desenvolvedor' },
    });
  };

  const actions: Action<Desenvolvedor>[] = [
    {
      Icon: EditIcon,
      execute: editDesenvolvedor,
    },
    {
      Icon: DeleteForeverIcon,
      execute: deleteDesenvolvedor,
    },
  ];

  useEffect(() => {
    fetchDesenvolvedores();
  }, [pagination.page]);

  return {
    desenvolvedores,
    loading,
    fetchDesenvolvedores,
    deleteDesenvolvedor,
    handleSubmit,
    fetchPage,
    actions,
    pagination,
  };
};

export default useDesenvolvedores;
