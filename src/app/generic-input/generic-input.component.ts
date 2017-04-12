import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent implements OnInit {

  textEntryForm: FormGroup;
  textEntryControl: FormControl;
  @Output() newItem: EventEmitter<string> = new EventEmitter();

  constructor(
    private builder: FormBuilder
  ) {
    this.textEntryControl = new FormControl('', [CustomValidators.timeFormat]);
    this.textEntryForm = builder.group({
      textEntry: this.textEntryControl
    });
  }

  addToDo() {
    this.newItem.emit(this.textEntryControl.value);
  }

  ngOnInit() {
  }
}

export class CustomValidators {
  static timeFormat(ctrl: FormControl) {
    const pattern: RegExp = /\d\d:\d\d/;
    return pattern.test(ctrl.value) ? null : {timeFormat: true};
  }
}
