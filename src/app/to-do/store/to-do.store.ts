import { IToDoItem } from '../to-do.type';
import { ToDoReducer, ToDoFilterReducer } from 'app/to-do/store/to-do-reducer';
import { combineReducers } from '@ngrx/store';

export interface AppState {
    todoItems: IToDoItem[];
};

export const AppStore = combineReducers({
  todoItems: ToDoReducer,
  toDoFilterReducer: ToDoFilterReducer
});
