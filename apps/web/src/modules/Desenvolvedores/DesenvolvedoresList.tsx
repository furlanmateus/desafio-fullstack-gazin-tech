import { format, parse } from 'date-fns';
import GridTable, { Action, GridTableProps } from '../../components/GridTable/GridTable';
import { Desenvolvedor } from './types';

interface Props {
  desenvolvedores: Desenvolvedor[];
  actions?: Action<Desenvolvedor>[];
  loading?: boolean;
  emptyFeedback?: string;
}

const DesenvolvedoresList = ({ desenvolvedores, ...rest }: Props) => {
  const desenvolvedoresListTable: GridTableProps<Desenvolvedor> = {
    itens: desenvolvedores,
    colDef: [
      {
        field: 'id',
        headerName: 'ID',
        width: 40,
      },
      {
        field: 'nome',
        headerName: 'Nome',
        width: 200,
      },
      {
        field: 'sexo',
        headerName: 'Sexo',
        width: 70,
      },
      {
        field: 'dataNascimento',
        headerName: 'Data de Nascimento',
        width: 170,
        fieldFormatter: (field) => {
          const parsedDate = parse(field, 'yyyy-MM-dd', new Date());

          return format(parsedDate, 'dd/MM/yyyy');
        },
      },
      {
        field: 'idade',
        headerName: 'Idade',
        width: 70,
      },
      {
        field: 'nivel',
        headerName: 'Nível',
        width: 100,
        fieldFormatter: (field) => field.nivel,
      },
      {
        field: 'hobby',
        headerName: 'Hobby',
        width: 400,
      },
    ],
  };

  return <GridTable {...desenvolvedoresListTable} {...rest} />;
};

export default DesenvolvedoresList;
