import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ToDoActions } from './../store/to-do.actions';
import { AppState } from './../store/to-do.store';
import { IToDoItem } from '../to-do.type';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent implements OnInit {

  todoItems: IToDoItem[];

  constructor(
    private store: Store<AppState>,
    private todoActions: ToDoActions
  ) {
    store.select('todoItems').subscribe((items: IToDoItem[]) => {
      this.todoItems = items;
    });

  }

  ngOnInit() {
  }

  addItem(description: string) {
    const item: IToDoItem = {
      description,
      completed: false,
      id: this.todoItems.length
    };

    this.store.dispatch(this.todoActions.addItem(item));
  }

  onDeleteToDoItem(itemId: number) {
    this.store.dispatch(this.todoActions.deleteItem(itemId));
  }

  onToggleToDoItem(itemId: number) {
    this.store.dispatch(this.todoActions.toggleItem(itemId));
  }
}
