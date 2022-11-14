import { Button } from '@mui/material';
import { Link as RouterLink, useMatch } from 'react-router-dom';
import { menuItens } from './menuItems';

const RouterButton = ({ name, label, pathname }: { name: string; label: string; pathname: string }) => {
  const match = useMatch({ path: pathname });

  return (
    <Button
      key={name}
      component={RouterLink}
      to={pathname}
      sx={{ my: 2, color: match ? 'primary' : 'white', display: 'block' }}
    >
      {label}
    </Button>
  );
};

const MenuItens = () => {
  return (
    <>
      {menuItens.map(
        ({ name, label, pathname }) => label && <RouterButton name={name} label={label} pathname={pathname} />,
      )}
    </>
  );
};

export default MenuItens;
