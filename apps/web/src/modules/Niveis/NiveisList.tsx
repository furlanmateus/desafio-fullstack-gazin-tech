import { Box, Container, Divider, Grid } from '@mui/material';
import GridTable, { Action, GridTableProps } from '../../components/GridTable/GridTable';
import { Nivel } from './types';

interface Props {
  niveis: Nivel[];
  actions?: Action<Nivel>[];
  loading?: boolean;
  emptyFeedback?: string;
}

const NiveisList = ({ niveis, ...rest }: Props) => {
  const niveisListTable: GridTableProps<Nivel> = {
    itens: niveis,
    colDef: [
      {
        field: 'id',
        headerName: 'ID',
        width: 40,
      },
      {
        field: 'nivel',
        headerName: 'Nível',
        width: 200,
      },
    ],
  };

  return <GridTable {...niveisListTable} {...rest} />;
};

export default NiveisList;
