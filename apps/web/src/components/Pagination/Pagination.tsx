import Pagination from '@mui/material/Pagination';

interface Props {
  count: number;
  page: number;
  rowsPerPage: number;
  handleChange: (page: number) => void;
}

const BasicPagination = ({ count, page, rowsPerPage, handleChange }: Props) => {
  return <Pagination count={Math.ceil(count / rowsPerPage)} page={page} onChange={(_, page) => handleChange(page)} />;
};

export default BasicPagination;
