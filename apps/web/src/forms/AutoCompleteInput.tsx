import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useField } from 'formik';
import { useState, useEffect } from 'react';
import { niveisRepository } from '../modules/Niveis/hooks/niveisRepository';
import { Nivel } from '../modules/Niveis/types';

interface Props {
  name: string;
  label: string;
}

const AutoCompleteInput = ({ name, label }: Props) => {
  const [field, meta, helpers] = useField(name);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Nivel[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const res = await niveisRepository.fetch({});

      if (active && res.ok) {
        setOptions(res.data.edges);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = (_, value) => {
    helpers.setValue(value);
  };

  return (
    <Autocomplete
      {...field}
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.nivel === value.nivel}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.nivel)}
      options={options}
      loading={loading}
      onChange={handleChange}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default AutoCompleteInput;
