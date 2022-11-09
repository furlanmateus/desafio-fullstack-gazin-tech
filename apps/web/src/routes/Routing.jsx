import { Routes, Route } from 'react-router-dom';
import { menuItens } from '../components/AppWrap/menuItems';

const Routing = () => {
  return (
    <Routes>
      {menuItens.map(({ pathname, Component }) => (
        <Route path={pathname} element={<Component />} />
      ))}
    </Routes>
  );
};

export default Routing;
