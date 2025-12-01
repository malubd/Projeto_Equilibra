import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela3 } from './tela3';

describe('Tela3', () => {
  let component: Tela3;
  let fixture: ComponentFixture<Tela3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tela3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tela3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
