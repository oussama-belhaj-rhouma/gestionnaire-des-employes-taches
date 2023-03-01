import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModComponent } from './employee-mod.component';

describe('EmployeeModComponent', () => {
  let component: EmployeeModComponent;
  let fixture: ComponentFixture<EmployeeModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
