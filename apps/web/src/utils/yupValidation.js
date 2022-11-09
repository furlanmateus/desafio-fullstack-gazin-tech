import fp from 'lodash/fp';

const unflatObject = fp.flow([fp.toPairs, fp.reduce((result, [field, value]) => fp.set(field, value, result), {})]);

const yupValidation = (schema) => async (data) => {
  try {
    const trimmedData = trim(data);
    await schema.validate(trimmedData, { abortEarly: false });
    return {};
  } catch (error) {
    const errors = error.inner.reduce(
      (formError, innerError) => ({
        ...formError,
        [innerError.path]: innerError.message,
      }),
      {},
    );
    return unflatObject(errors);
  }
};

const trim = (data) => {
  const stringifiedData = JSON.stringify(data);
  return JSON.parse(stringifiedData, (_key, value) => {
    return typeof value === 'string' ? value.trim() : value;
  });
};

export default yupValidation;
