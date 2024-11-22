import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyHeaderComponent } from './weekly-header.component';

describe('WeeklyHeaderComponent', () => {
  let component: WeeklyHeaderComponent;
  let fixture: ComponentFixture<WeeklyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
