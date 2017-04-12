import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-fancy-list',
  templateUrl: './fancy-list.component.html',
  styleUrls: ['./fancy-list.component.css']
})
export class FancyListComponent implements OnInit {

  thingsToDo: string[];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.toDoService.getChanges().subscribe((newItems) => {
      this.thingsToDo = newItems.slice();
    });
  }
}
