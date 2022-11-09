import { CircularProgress, Grid } from '@mui/material';
import { Formik } from 'formik';
import AutoCompleteInput from '../../forms/AutoCompleteInput';
import { DateInput } from '../../forms/DateInput';
import { FormWrap } from '../../forms/FormWrap';
import SelectInput from '../../forms/SelectInput';
import { TextInput } from '../../forms/TextInput';
import yupValidation from '../../utils/yupValidation';
import useDesenvolvedorForm from './hooks/useDesenvolvedorForm';
import { Desenvolvedor, Sexo } from './types';
import { schema } from './validation';

interface Props {
  id?: number;
  handleSubmit: (data: Desenvolvedor) => Promise<void>;
}

const optionsSexo = [
  { label: 'Masculino', value: Sexo.MASCULINO },
  { label: 'Feminino', value: Sexo.FEMININO },
];

export const DesenvolvedorForm = ({ id, handleSubmit }: Props) => {
  const { initialValues, loading } = useDesenvolvedorForm(id);

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
            <Grid item xs={12} md={6}>
              <TextInput name="nome" label="Nome" />
            </Grid>

            <Grid item xs={12} md={3}>
              <SelectInput name="sexo" label="Sexo" options={optionsSexo} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput name="idade" label="Idade" type="number" minValue={0} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DateInput name="dataNascimento" label="Data Nascimento" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoCompleteInput name="nivel" label="Nível" />
            </Grid>
            <Grid item xs={12}>
              <TextInput name="hobby" label="Hobby" multiline maxRows={6} />
            </Grid>
          </Grid>
        </FormWrap>
      )}
    </Formik>
  );
};
