import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComReportComponent } from './com-report.component';

describe('ComReportComponent', () => {
  let component: ComReportComponent;
  let fixture: ComponentFixture<ComReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
