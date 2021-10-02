import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCalcComponent } from './button-calc.component';

describe('ButtonCalcComponent', () => {
  let component: ButtonCalcComponent;
  let fixture: ComponentFixture<ButtonCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
