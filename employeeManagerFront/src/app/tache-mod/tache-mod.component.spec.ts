import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheModComponent } from './tache-mod.component';

describe('TacheModComponent', () => {
  let component: TacheModComponent;
  let fixture: ComponentFixture<TacheModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
