import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFromComponent } from './goal-from.component';

describe('GoalFromComponent', () => {
  let component: GoalFromComponent;
  let fixture: ComponentFixture<GoalFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
