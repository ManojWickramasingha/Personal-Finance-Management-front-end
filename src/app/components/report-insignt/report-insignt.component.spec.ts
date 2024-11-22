import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInsigntComponent } from './report-insignt.component';

describe('ReportInsigntComponent', () => {
  let component: ReportInsigntComponent;
  let fixture: ComponentFixture<ReportInsigntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportInsigntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportInsigntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
