import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCalccComponent } from './button-calcc.component';

describe('ButtonCalccComponent', () => {
  let component: ButtonCalccComponent;
  let fixture: ComponentFixture<ButtonCalccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCalccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCalccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
