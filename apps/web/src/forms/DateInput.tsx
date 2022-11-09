import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useField } from 'formik';
import { FormikInputProps } from './interfaces/FormikInputProps';

type DatePickerProps = Omit<MuiDatePickerProps<any, any>, 'label' | 'name' | 'onChange' | 'value' | 'renderInput'>;

interface DateInputProps extends DatePickerProps, FormikInputProps {
  value?: string | Date;
  iconTooltipText?: string;
  receivesUTCDate?: boolean;
}

export const DateInput = ({
  inputFormat = 'dd/MM/yyyy',
  iconTooltipText = 'Selecionar data',
  receivesUTCDate = false,
  ...props
}: DateInputProps) => {
  const [field, meta, helpers] = useField(props.name);

  function handleChange(date) {
    helpers.setTouched(true);

    helpers.setValue(date);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...field}
        {...props}
        inputFormat={inputFormat}
        value={field.value ?? null}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField fullWidth error={Boolean(meta.error)} helperText={meta.error} {...params} />
        )}
      />
    </LocalizationProvider>
  );
};
