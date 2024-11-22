import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrcingFormComponent } from './recurrcing-form.component';

describe('RecurrcingFormComponent', () => {
  let component: RecurrcingFormComponent;
  let fixture: ComponentFixture<RecurrcingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecurrcingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecurrcingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
