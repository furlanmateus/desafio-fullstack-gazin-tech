/* eslint-disable no-underscore-dangle */
import { makeAutoObservable } from 'mobx';

export type SnackbarState = {
  message: string | undefined;
  severity: 'success' | 'info' | 'warning' | 'error';
};

class SnackbarStore {
  state: SnackbarState = {
    message: '',
    severity: 'info',
  };

  snackbarOpen: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  showSnackbar(props: SnackbarState) {
    this.snackbarOpen = true;
    this.state.message = props.message || '';
    this.state.severity = props.severity;
  }

  close() {
    this.snackbarOpen = false;
  }
}

export const snackbarStore = new SnackbarStore();
