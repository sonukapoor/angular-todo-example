import { Action } from '@ngrx/store';

export const ITEM_ADD = 'ITEM_ADD';

export interface AppState {
  items: string[];
}

const DEFAULT_STATE: AppState = {
  items: []
}

export function reducer(state: AppState = DEFAULT_STATE, action: Action) {
  switch (action.type) {

    case ITEM_ADD:
      const newState = {items: [...state.items, action.payload]};
      return newState;

    default:
      return state;
  }
}
