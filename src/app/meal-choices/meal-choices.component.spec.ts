import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealChoicesComponent } from './meal-choices.component';

describe('MealChoicesComponent', () => {
  let component: MealChoicesComponent;
  let fixture: ComponentFixture<MealChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
