import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfilComponent } from './create-profil.component';

describe('CreateProfilComponent', () => {
  let component: CreateProfilComponent;
  let fixture: ComponentFixture<CreateProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
