import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCartsComponent } from './goal-carts.component';

describe('GoalCartsComponent', () => {
  let component: GoalCartsComponent;
  let fixture: ComponentFixture<GoalCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalCartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
