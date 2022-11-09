import { BaseTextFieldProps, InputBaseComponentProps, InputLabelProps, InputProps, TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';
import { FormikInputProps } from './interfaces/FormikInputProps';

type TextFieldProps = Omit<BaseTextFieldProps, 'label' | 'name'>;

export interface TextInputProps extends TextFieldProps, FormikInputProps {
  inputProps?: InputBaseComponentProps;
  InputProps?: InputProps;
  InputLabelProps?: InputLabelProps;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minValue?: number;
  maxValue?: number;
}

export const TextInput = ({
  variant = 'outlined',
  fullWidth = true,
  type = 'text',
  onChange,
  minValue,
  maxValue,
  ...props
}: TextInputProps) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    onChange?.(e);

    helpers.setValue(type === 'number' ? +value : value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(e);

    field.onBlur(e);
  };

  return (
    <TextField
      {...field}
      {...props}
      type={type}
      onBlur={handleBlur}
      variant={variant}
      fullWidth={fullWidth}
      onChange={handleChange}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      InputProps={{ inputProps: { min: minValue, max: maxValue } }}
    />
  );
};
