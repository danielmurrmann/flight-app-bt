import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEditView } from './flight-edit-view';

describe('FlightEditView', () => {
  let component: FlightEditView;
  let fixture: ComponentFixture<FlightEditView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightEditView],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightEditView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
