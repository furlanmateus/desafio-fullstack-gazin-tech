import React, { ReactNode } from 'react';
import Desenvolvedores from '../../modules/Desenvolvedores';
import Home from '../../modules/Home';
import Niveis from '../../modules/Niveis';

interface Item {
  name: string;
  label?: string;
  pathname: string;
  Component: React.FC;
}

export const menuItens: Item[] = [
  {
    name: 'home',
    pathname: '/',
    Component: Home,
  },
  {
    name: 'niveis',
    label: 'Níveis',
    pathname: '/niveis',
    Component: Niveis,
  },
  {
    name: 'desenvolvedores',
    label: 'Desenvolvedores',
    pathname: '/desenvolvedores',
    Component: Desenvolvedores,
  },
];
