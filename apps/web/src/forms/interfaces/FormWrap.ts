import { FormikErrors, FormikFormProps } from 'formik';
import { ReactNode } from 'react';

export type FormWrapProps = {
  children: ReactNode;
  handleSubmit: any;
  disableBack?: boolean;
  loading?: boolean;
  disableSubmit?: boolean;
  nameButton?: string;
  errors: FormikErrors<any>;
  errorMessage?: string;
  submitCount: any;
  handleGoBack?: () => void;
  onClickButtonSave?: () => void;
} & FormikFormProps;
