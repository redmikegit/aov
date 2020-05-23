import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDepartmentComponent } from './training-department.component';

describe('TrainingDepartmentComponent', () => {
  let component: TrainingDepartmentComponent;
  let fixture: ComponentFixture<TrainingDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
