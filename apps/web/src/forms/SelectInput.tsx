import {
  FormControl,
  FormHelperText,
  InputBaseComponentProps,
  InputLabel,
  InputLabelProps,
  MenuItem,
  Select,
} from '@mui/material';
import { useField } from 'formik';

export interface SelectOption {
  value: number | string;
  label: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  options: SelectOption[];
  defaultValue?: string;
  value?: any;
  InputProps?: InputBaseComponentProps;
  InputLabelProps?: InputLabelProps;
  onChange?: any;
  handleOnChange?: (e: any) => void;
}

function SelectInput(props: SelectInputProps) {
  const [field, meta, helpers] = useField(props);
  const { label, name, options } = props;

  async function handleOnChange(e: any) {
    helpers.setTouched(true);
    helpers.setValue(e.target.value);
  }

  return (
    <FormControl variant="outlined" fullWidth error={meta.touched && Boolean(meta.error)}>
      <InputLabel id={name}>{label}</InputLabel>
      <Select {...props} {...field} onChange={handleOnChange}>
        {options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
}

export default SelectInput;
