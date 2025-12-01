import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interface5x2 } from './interface5x2';

describe('Interface5x2', () => {
  let component: Interface5x2;
  let fixture: ComponentFixture<Interface5x2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interface5x2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interface5x2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
