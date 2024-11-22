import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartMonthlyComponent } from './piechart-monthly.component';

describe('PiechartMonthlyComponent', () => {
  let component: PiechartMonthlyComponent;
  let fixture: ComponentFixture<PiechartMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiechartMonthlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiechartMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
