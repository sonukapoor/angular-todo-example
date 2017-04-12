import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredFormComponent } from './structured-form.component';

describe('StructuredFormComponent', () => {
  let component: StructuredFormComponent;
  let fixture: ComponentFixture<StructuredFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuredFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
