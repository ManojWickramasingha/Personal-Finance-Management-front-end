import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeGoalFormComponent } from './income-goal-form.component';

describe('IncomeGoalFormComponent', () => {
  let component: IncomeGoalFormComponent;
  let fixture: ComponentFixture<IncomeGoalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeGoalFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeGoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
