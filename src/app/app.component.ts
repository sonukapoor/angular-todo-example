import { Component } from '@angular/core';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'To Do';
  thingsToDo = [
    'Learn JavaScript',
    'Learn Angular',
    'Learn Redux'
  ];

  onNewItem(item: string) {
    this.thingsToDo.push(item);
  }
}
