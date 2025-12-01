import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Interface6x1 } from './interface6x1';

describe('Interface6x1', () => {
  let component: Interface6x1;
  let fixture: ComponentFixture<Interface6x1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interface6x1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interface6x1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
