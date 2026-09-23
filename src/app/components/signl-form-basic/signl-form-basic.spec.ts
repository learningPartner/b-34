import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignlFormBasic } from './signl-form-basic';

describe('SignlFormBasic', () => {
  let component: SignlFormBasic;
  let fixture: ComponentFixture<SignlFormBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignlFormBasic],
    }).compileComponents();

    fixture = TestBed.createComponent(SignlFormBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
