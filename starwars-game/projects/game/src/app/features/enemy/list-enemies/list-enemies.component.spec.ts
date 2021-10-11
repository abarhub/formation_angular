import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnemiesComponent } from './list-enemies.component';

describe('ListEnemiesComponent', () => {
  let component: ListEnemiesComponent;
  let fixture: ComponentFixture<ListEnemiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnemiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnemiesComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should get liste of 2 enemies', () => {
    fixture.detectChanges();

    //expect(component).toBeTruthy();
    const domHtml = fixture.nativeElement;

    const table=domHtml.querySelector('table.enemies');
    expect(table).toBeTruthy();
    //expect(table).toBeFalsy();

    console.log("nb=",table.rows.length);

    expect(table.rows.length).toBe(2);
  });
});
