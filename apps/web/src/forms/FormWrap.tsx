import { Form } from 'formik';
import { Grid, Button, CircularProgress } from '@mui/material';
import { FormWrapProps } from './interfaces/FormWrap';
import { modalStore } from '../components/Modal/ModalStore';
import { FieldsPending } from './FieldsPending';

export const FormWrap = ({
  children,
  handleSubmit,
  nameButton,
  disableSubmit = false,
  disableBack = false,
  loading = false,
  handleGoBack,
  onClickButtonSave,
  errors,
  submitCount,
  ...rest
}: FormWrapProps) => (
  <Form onSubmit={handleSubmit} noValidate {...rest}>
    <Grid container spacing={2} direction="column">
      <Grid item>{children}</Grid>
      <FieldsPending errors={errors} submitCount={submitCount} />
      <Grid item xs={12}>
        <Grid justifyContent="flex-end" container spacing={2}>
          <Grid item style={{ width: 160 }}>
            <Button
              fullWidth
              type="button"
              variant="outlined"
              onClick={handleGoBack ?? modalStore.close}
              disabled={disableBack}
            >
              Voltar
            </Button>
          </Grid>

          <Grid item style={{ width: 160 }}>
            {loading ? (
              <Button data-testid="salvar" fullWidth disabled={true} variant="contained" color="primary">
                <CircularProgress color="inherit" size={24} />
              </Button>
            ) : (
              <Button
                data-testid="salvar"
                fullWidth
                type="submit"
                disabled={disableSubmit}
                variant="contained"
                color="primary"
                onClick={onClickButtonSave}
                data-cy="salvar"
              >
                {nameButton ?? 'Salvar'}
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Form>
);
