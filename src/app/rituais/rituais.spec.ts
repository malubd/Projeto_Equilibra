import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rituais } from './rituais';

describe('Rituais', () => {
  let component: Rituais;
  let fixture: ComponentFixture<Rituais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rituais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rituais);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
