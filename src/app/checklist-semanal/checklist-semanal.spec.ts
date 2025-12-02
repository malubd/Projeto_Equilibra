import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistSemanal } from './checklist-semanal';

describe('ChecklistSemanal', () => {
  let component: ChecklistSemanal;
  let fixture: ComponentFixture<ChecklistSemanal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistSemanal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistSemanal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
