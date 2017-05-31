import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IToDoItem } from './../to-do.type';

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

  toggleItem(itemId: number) {
    return {
      type: ToDoActions.TOGGLE_TODO,
      payload: itemId,
    };
  }

  deleteItem(itemId: number) {
    return {
      type: ToDoActions.REMOVE_TODO,
      payload: itemId,
    };
  }
}
