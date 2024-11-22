import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartMonthlyComponent } from './line-chart-monthly.component';

describe('LineChartMonthlyComponent', () => {
  let component: LineChartMonthlyComponent;
  let fixture: ComponentFixture<LineChartMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChartMonthlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
