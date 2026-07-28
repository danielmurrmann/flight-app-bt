import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Flight } from '../entities/flight';

@Component({
  selector: 'app-flight-search-view',
  imports: [FormField],
  templateUrl: './flight-search-view.html'
})
export class FlightSearchView {
  criteria = signal({from: 'Berlin', to: 'Munich'});
  form = form(this.criteria);
  flights = signal<Flight[]>([]);
  selectedFlight = signal<Flight | undefined>(undefined);

  search() {
    this.flights.set([
      {id: 1, from: this.criteria().from, to: this.criteria().to, date: new Date().toISOString(), delayed: false},
      {id: 2, from: this.criteria().from, to: this.criteria().to, date: new Date().toISOString(), delayed: true},
      {id: 3, from: this.criteria().from, to: this.criteria().to, date: new Date().toISOString(), delayed: false}
    ]);
  }

  selectFlight(flight: Flight) {
    this.selectedFlight.set(flight);
  }

}
