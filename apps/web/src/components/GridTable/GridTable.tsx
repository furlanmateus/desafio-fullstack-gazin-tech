import { Box, CircularProgress, Container, Divider, Grid, IconButton, Typography } from '@mui/material';

interface ColDef {
  field: string;
  headerName: string;
  width: number;
  fieldFormatter?: (field: any) => string;
}

export interface Action<T> {
  Icon: any;
  execute: (item: T) => void;
}

export interface GridTableProps<T> {
  itens: T[];
  actions?: Action<T>[];
  colDef: ColDef[];
  loading?: boolean;
  emptyFeedback?: string;
}

type RowProps<T> = Pick<GridTableProps<T>, 'itens' | 'colDef' | 'actions'>;

const Header = ({ colDef }: { colDef: ColDef[] }) => (
  <Grid container spacing={2} wrap="nowrap">
    {colDef.map(({ headerName, width }) => (
      <Grid item width={width}>
        <b>{headerName}</b>
      </Grid>
    ))}
  </Grid>
);

const Rows = <T,>({ itens, colDef, actions }: RowProps<T>) => (
  <Grid container>
    {itens.map((item, index) => (
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Grid item xs={actions ? true : 12}>
            <Grid container wrap="nowrap">
              {colDef.map((col) => (
                <Grid key={col.field} item width={col.width} zeroMinWidth>
                  <Typography variant="body1" noWrap>
                    {col.fieldFormatter ? col.fieldFormatter(item[col.field]) : item[col.field]}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {actions &&
            actions.map(({ Icon, execute }) => (
              <Grid xs="auto">
                <IconButton onClick={() => execute(item)}>{<Icon />}</IconButton>
              </Grid>
            ))}
        </Grid>
        {itens.length !== index + 1 && (
          <Box my={1}>
            <Divider />
          </Box>
        )}
      </Grid>
    ))}
  </Grid>
);

const GridTable = <T,>({ itens, colDef, loading, emptyFeedback, actions }: GridTableProps<T>) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (!itens || itens.length === 0) {
    return <Typography variant="h3">{emptyFeedback || 'Ops, não foi possível encontrar nenhum dado.'}</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <Box border={1} borderRadius={2} padding={2}>
        <Grid container>
          <Grid item xs={12}>
            <Header colDef={colDef} />
          </Grid>
          <Grid item xs={12}>
            <Box my={1}>
              <Divider />
            </Box>
          </Grid>
          {itens && (
            <Grid item xs={12}>
              <Rows itens={itens} colDef={colDef} actions={actions} />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};
export default GridTable;
