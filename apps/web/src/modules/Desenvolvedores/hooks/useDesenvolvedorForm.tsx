import { parse } from 'date-fns';
import { useEffect, useState } from 'react';
import { Desenvolvedor } from '../types';
import { desenvolvedoresRepository } from './desenvolvedoresRepository';

const formatInitialValues = (data: Desenvolvedor): Desenvolvedor => {
  return { ...data, dataNascimento: parse(String(data.dataNascimento), 'yyyy-MM-dd', new Date()) };
};

const useDesenvolvedorForm = (id?: number) => {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<Desenvolvedor | {}>({});

  const fetchOne = async () => {
    if (!id) return;
    setLoading(true);

    const response = await desenvolvedoresRepository.fetchOne(id);
    if (response.ok && response.data) {
      setInitialValues(formatInitialValues(response.data));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOne();

    return () => setInitialValues({});
  }, [id]);

  return { initialValues, loading };
};

export default useDesenvolvedorForm;
