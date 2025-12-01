import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agenda2 } from './agenda2';

describe('Agenda2', () => {
  let component: Agenda2;
  let fixture: ComponentFixture<Agenda2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agenda2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agenda2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
