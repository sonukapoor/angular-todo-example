import { IToDoItem } from './../to-do.type';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class ToDoActions {
  static readonly ADD_TODO = 'ADD_TODO';
  static readonly TOGGLE_TODO = 'TOGGLE_TODO';
  static readonly REMOVE_TODO = 'REMOVE_TODO';

  addItem(item: IToDoItem) {
    return {
      type: ToDoActions.ADD_TODO,
      payload: item,
    };
  }

  updateItem(item: IToDoItem) {
    return {
      type: ToDoActions.TOGGLE_TODO,
      payload: item,
    };
  }

  deleteItem(item: IToDoItem) {
    return {
      type: ToDoActions.REMOVE_TODO,
      payload: item,
    };
  }
}
