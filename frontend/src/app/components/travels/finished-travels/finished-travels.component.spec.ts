import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedTravelsComponent } from './finished-travels.component';

describe('FinishedTravelsComponent', () => {
  let component: FinishedTravelsComponent;
  let fixture: ComponentFixture<FinishedTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
