import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Flight } from '../entities/flight';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-flight-search-view',
  imports: [FormField],
  templateUrl: './flight-search-view.html'
})
export class FlightSearchView {
  url = 'https://demo.angulararchitects.io/api/flight';

  criteria = signal({from: 'Berlin', to: 'Munich'});

  searchCriteria = signal({from: '', to: ''});

  flightsResource = httpResource<Flight[]>(() => ({
    url: this.url,
    params: this.searchCriteria()
  }), { defaultValue: []});

  form = form(this.criteria);
  flights = this.flightsResource.value; // signal<Flight[]>([]);
  selectedFlight =signal<Flight | undefined>(undefined);

  search() {
    this.searchCriteria.set(this.criteria());
  }

  selectFlight(flight: Flight) {
    this.selectedFlight.set(flight);
  }

}
