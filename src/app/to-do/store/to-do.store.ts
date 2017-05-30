import { IToDoItem } from '../to-do.type';
import { ToDoReducer } from 'app/to-do/store/to-do-reducer';

export interface AppState {
    todoItems: IToDoItem[];
};

export const AppStore = {
    todoItems: ToDoReducer
};
