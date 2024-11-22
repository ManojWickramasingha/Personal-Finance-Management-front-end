import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMatricComponent } from './weekly-matric.component';

describe('WeeklyMatricComponent', () => {
  let component: WeeklyMatricComponent;
  let fixture: ComponentFixture<WeeklyMatricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyMatricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyMatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
