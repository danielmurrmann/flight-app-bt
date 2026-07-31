import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit-view',
  imports: [],
  templateUrl: './flight-edit-view.html',
})
export class FlightEditView {
  private readonly activatedRoute = inject(ActivatedRoute);
  protected readonly flightId = signal(0);

  constructor() {
    this.activatedRoute.paramMap.subscribe(params => {
      const flightId = params.get('id');
      // backend request
      this.flightId.set(flightId ? parseInt(flightId) : 0);
    });
  }
}
