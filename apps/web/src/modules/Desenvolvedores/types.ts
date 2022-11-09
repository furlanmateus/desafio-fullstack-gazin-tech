import { Nivel } from '../Niveis/types';

export enum Sexo {
  MASCULINO = 'M',
  FEMININO = 'F',
}

export interface Desenvolvedor {
  id?: number;
  nome: string;
  sexo: Sexo;
  dataNascimento: string | Date;
  idade: number;
  nivel: Nivel;
  hobby: string;
}

export type DesenvolvedorPost = Omit<Desenvolvedor, 'nivel'> & {
  nivelId: number;
};
