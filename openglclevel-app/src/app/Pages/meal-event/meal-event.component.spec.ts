import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealEventComponent } from './meal-event.component';

describe('MealEventComponent', () => {
  let component: MealEventComponent;
  let fixture: ComponentFixture<MealEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
