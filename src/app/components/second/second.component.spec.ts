import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { Second } from './second.component';

describe('SecondComponent', () => {
  let component: Second;
  let fixture: ComponentFixture<Second>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Second ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Second);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
