import { Component } from '@angular/core';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

import { Store } from '@ngrx/store';
import { AppState, ITEM_ADD, reducer } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'To Do';

  constructor (
    private store: Store<AppState>
  ) {
  }

  onNewItem(item: string) {
    this.store.dispatch({type: ITEM_ADD, payload: item});
  }
}
