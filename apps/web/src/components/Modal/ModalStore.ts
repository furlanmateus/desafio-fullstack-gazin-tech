/* eslint-disable no-underscore-dangle */
import { ModalProps } from '@mui/material';
import { makeAutoObservable } from 'mobx';
import React from 'react';

type Props = Omit<ModalProps, 'children' | 'open'> & { modalTitle?: string; open?: boolean };

export type ModalState = {
  props?: Props;
  children: React.FC;
};

class ModalStore {
  state: ModalState = {
    props: { open: false },
    children: null,
  };

  modal: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  showModal({ props, children }: ModalState) {
    this.modal = true;
    this.state.props = props || null;
    this.state.children = children;
  }

  close() {
    this.modal = false;
  }
}

export const modalStore = new ModalStore();
