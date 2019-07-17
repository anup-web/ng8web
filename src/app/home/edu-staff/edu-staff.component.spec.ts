import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduStaffComponent } from './edu-staff.component';

describe('EduStaffComponent', () => {
  let component: EduStaffComponent;
  let fixture: ComponentFixture<EduStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
