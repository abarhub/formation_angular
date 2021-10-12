import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsobservableComponent } from './rxjsobservable.component';

describe('RxjsobservableComponent', () => {
  let component: RxjsobservableComponent;
  let fixture: ComponentFixture<RxjsobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsobservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
