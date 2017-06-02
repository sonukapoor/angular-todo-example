import { Action } from '@ngrx/store';
import { IToDoItem } from './../to-do.type';
import { ToDoActions, ToDoFilterActions } from './to-do.actions';

const INITIAL_STATE = [
  {
    id: 0,
    description: 'Use Redux',
    completed: false,
  }
];

export function ToDoReducer(state = INITIAL_STATE, action: Action): IToDoItem[] {
  switch (action.type) {
    case ToDoActions.ADD_TODO:
      return [...state, action.payload];
    case ToDoActions.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case ToDoActions.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      });
    default:
      return state;
  }
};

export function ToDoFilterReducer(state = {}, action: Action) {

  switch (action.type) {
    case ToDoFilterActions.SHOW_ALL:
      return { filterBy: action.type };
    case ToDoFilterActions.SHOW_COMPLETED:
      return { filterBy: action.type };
    default:
      return state;
  }
}

