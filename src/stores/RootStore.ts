import { UiStore } from './UiStore';

export class RootStore {
  uiStore;

  constructor() {
    this.uiStore = new UiStore();
  }
}
