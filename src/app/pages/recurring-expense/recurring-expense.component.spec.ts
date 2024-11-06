import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringExpenseComponent } from './recurring-expense.component';

describe('RecurringExpenseComponent', () => {
  let component: RecurringExpenseComponent;
  let fixture: ComponentFixture<RecurringExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecurringExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecurringExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
