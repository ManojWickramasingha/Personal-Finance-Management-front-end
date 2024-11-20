import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetNavComponent } from './budget-nav.component';

describe('BudgetNavComponent', () => {
  let component: BudgetNavComponent;
  let fixture: ComponentFixture<BudgetNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
