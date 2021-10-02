import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyItemsComponent } from './notify-items.component';

describe('NotifyItemsComponent', () => {
  let component: NotifyItemsComponent;
  let fixture: ComponentFixture<NotifyItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
