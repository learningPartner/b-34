import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgreeBar } from './progree-bar';

describe('ProgreeBar', () => {
  let component: ProgreeBar;
  let fixture: ComponentFixture<ProgreeBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgreeBar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgreeBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
