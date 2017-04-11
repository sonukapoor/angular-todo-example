import { Action } from '@ngrx/store';

export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_DELETE = 'ITEM_DELETE';

export interface AppState {
  items: string[];
}

const DEFAULT_STATE: AppState = {
  items: []
}

export function reducer(state: AppState = DEFAULT_STATE, action: Action) {
  let newState;

  switch (action.type) {

  case ITEM_ADD:
    newState = {items: [...state.items, action.payload]};
    return newState;

  case ITEM_DELETE:
    newState = {
      items: state.items.filter(item => {return item != action.payload})
    };
    return newState;

  default:
    return state;
  }
}
