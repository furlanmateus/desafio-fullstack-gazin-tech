import { CircularProgress, Grid } from '@mui/material';
import { Formik } from 'formik';
import { FormWrap } from '../../forms/FormWrap';
import { TextInput } from '../../forms/TextInput';
import yupValidation from '../../utils/yupValidation';
import useNivelForm from './hooks/useNiveisForm';
import { Nivel } from './types';
import { schema } from './validation';

interface Props {
  id?: number;
  handleSubmit: (data: Nivel) => Promise<void>;
}

export const NivelForm = ({ id, handleSubmit }: Props) => {
  const { initialValues, loading } = useNivelForm(id);

  if (loading) return <CircularProgress />;

  return (
    <Formik enableReinitialize validate={yupValidation(schema)} initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, handleSubmit, errors, submitCount }) => (
        <FormWrap
          handleSubmit={handleSubmit}
          disableSubmit={isSubmitting || loading}
          disableBack={isSubmitting || loading}
          loading={loading}
          errors={errors}
          submitCount={submitCount}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextInput name="nivel" label="Nível" />
            </Grid>
          </Grid>
        </FormWrap>
      )}
    </Formik>
  );
};
