import { styled, Typography } from '@mui/material';
import React from 'react';

interface Props {
  message?: string;
  errors: any;
  submitCount: number;
}

const MyTypography = styled(Typography)((theme) => ({
  fontStyle: 'italic',
  color: theme.theme.palette.error.main,
  marginBottom: theme.theme.spacing(2),
  marginTop: theme.theme.spacing(2),
  marginRight: theme.theme.spacing(1),
  display: 'flex',
  justifyContent: 'flex-end',
}));

const FieldsPending = ({
  message = 'Existem campos obrigatórios não preenchidos ou preenchidos incorretamente',
  errors,
  submitCount,
}: Props) => {
  const hasError = !(Object.keys(errors).length === 0) && !!submitCount;

  return <>{hasError && <MyTypography>{message}</MyTypography>}</>;
};

export { FieldsPending };
