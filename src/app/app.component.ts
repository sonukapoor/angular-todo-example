import { Component } from '@angular/core';

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
  thingsCompleted = [];

  constructor() {
    setInterval(() => {
      this.thingsCompleted.push('done!');
    }, 1000);
  }

  summary(): string {
    return `${this.thingsToDo.length} done / ${this.thingsCompleted.length} to do`;
  }
}
