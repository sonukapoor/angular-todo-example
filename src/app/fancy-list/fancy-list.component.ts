import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-list',
  templateUrl: './fancy-list.component.html',
  styleUrls: ['./fancy-list.component.css']
})
export class FancyListComponent implements OnInit {

  @Input() thingsToDo: string[];

  constructor() { }

  ngOnInit() {
  }

}
