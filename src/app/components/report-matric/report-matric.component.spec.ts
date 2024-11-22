import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMatricComponent } from './report-matric.component';

describe('ReportMatricComponent', () => {
  let component: ReportMatricComponent;
  let fixture: ComponentFixture<ReportMatricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportMatricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportMatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
