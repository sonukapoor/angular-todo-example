import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-structured-form',
  templateUrl: './structured-form.component.html',
  styleUrls: ['./structured-form.component.css']
})
export class StructuredFormComponent implements OnInit {

  @Output() newItem: EventEmitter<string> = new EventEmitter();

  mainForm: FormGroup;

  responsible: FormGroup;
  name: FormControl;
  email: FormControl;

  task: FormGroup;
  text: FormControl;
  estimate: FormControl;

  constructor(
    private builder: FormBuilder
  ) {
    this.createResponsibleFormFields();
    this.createTaskFormFields();

    this.mainForm = this.builder.group({
      responsible: this.responsible,
      task: this.task
    });
  }

  createResponsibleFormFields() {
    this.name = new FormControl('Zuko', [Validators.required]);
    this.email = new FormControl('zuko@fire.org', [Validators.required]);

    this.responsible = this.builder.group({
      name: this.name,
      email: this.email
    });
  }

  createTaskFormFields() {
    this.text = new FormControl('something to do', [Validators.required]);
    this.estimate = new FormControl('3:00', Validators.required);

    this.task = this.builder.group({
      text: this.text,
      estimate: this.estimate
    });
  }
  
  ngOnInit() {
  }

  addToDo() {
    console.log('this.text.value', this.text.value);
    this.newItem.emit(this.text.value);
  }
}
