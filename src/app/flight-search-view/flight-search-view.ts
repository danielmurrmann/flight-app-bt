import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Flight } from '../entities/flight';
import { FlightService } from '../services/flight-service';
import { FlightSearchCriteria, initialFlightSearchCriteria } from '../entities/criteria';

@Component({
  selector: 'app-flight-search-view',
  imports: [FormField],
  templateUrl: './flight-search-view.html'
})
export class FlightSearchView {

  criteria = signal<FlightSearchCriteria>({from: 'Berlin', to: 'Munich'});
  searchCriteria = signal(initialFlightSearchCriteria);

  flightsResource = inject(FlightService).createFlightsResource(this.searchCriteria);

  form = form(this.criteria);
  flights = this.flightsResource.value;
  selectedFlight =signal<Flight | undefined>(undefined);

  search() {
    this.searchCriteria.set(this.criteria());
  }

  selectFlight(flight: Flight) {
    this.selectedFlight.set(flight);
  }

}
