import { parse } from 'date-fns';
import { useEffect, useState } from 'react';
import { Nivel } from '../types';
import { niveisRepository } from './niveisRepository';

const useNivelForm = (id?: number) => {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<Nivel | {}>({});

  const fetchOne = async () => {
    if (!id) return;
    setLoading(true);

    const response = await niveisRepository.fetchOne(id);
    if (response.ok && response.data) {
      setInitialValues(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOne();

    return () => setInitialValues({});
  }, [id]);

  return { initialValues, loading };
};

export default useNivelForm;
