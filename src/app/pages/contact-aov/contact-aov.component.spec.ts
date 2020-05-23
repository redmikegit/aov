import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAovComponent } from './contact-aov.component';

describe('ContactAovComponent', () => {
  let component: ContactAovComponent;
  let fixture: ComponentFixture<ContactAovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
