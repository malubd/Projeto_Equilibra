import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Organizacao } from './organizacao';

describe('Organizacao', () => {
  let component: Organizacao;
  let fixture: ComponentFixture<Organizacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Organizacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Organizacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
