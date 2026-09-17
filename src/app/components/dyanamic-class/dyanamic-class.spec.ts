import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DyanamicClass } from './dyanamic-class';

describe('DyanamicClass', () => {
  let component: DyanamicClass;
  let fixture: ComponentFixture<DyanamicClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DyanamicClass],
    }).compileComponents();

    fixture = TestBed.createComponent(DyanamicClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
