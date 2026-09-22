import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicReactive } from './basic-reactive';

describe('BasicReactive', () => {
  let component: BasicReactive;
  let fixture: ComponentFixture<BasicReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
