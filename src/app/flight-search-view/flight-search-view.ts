import { Component, computed, effect, inject, signal } from '@angular/core';
import { apply, form, FormField, pattern } from '@angular/forms/signals';
import { FlightService, flightServiceFactory } from '../services/flight-service';
import { FLIGHT_SEARCH_CRITERIA_SCHEMA, FlightSearchCriteria, initialFlightSearchCriteria } from '../entities/criteria';
import { FlightCard } from '../flight-card/flight-card';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-flight-search-view',
  imports: [FormField, FlightCard, JsonPipe],
  templateUrl: './flight-search-view.html',
  providers: [{ provide: FlightService, useFactory: flightServiceFactory}]
})
export class FlightSearchView {

  criteria = signal<FlightSearchCriteria>({from: 'Berlin', to: 'London'});
  searchCriteria = signal(initialFlightSearchCriteria);

  flightRoute = computed(() => `${this.criteria().from} - ${this.criteria().to}`);
  flightsResource = inject(FlightService).createFlightsResource(this.searchCriteria);

  form = form(this.criteria, criteria => {
    apply(criteria, FLIGHT_SEARCH_CRITERIA_SCHEMA);
    pattern(criteria.from, /(Berlin|Hamburg)/i, { message: 'Only Berlin and Hamburg are allowed' });
  });

  flights = this.flightsResource.value;
  basket =signal<Record<number, boolean>>({2683: true});

  constructor() {
    effect(() => {
      console.log('Flight Route: ' + this.flightRoute());
    });
  }

  search() {
    this.searchCriteria.set(this.criteria());
  }

  updateBasked(flightId: number, selectedState: boolean) {
    this.basket.update(currentValue => ({ ...currentValue, [flightId]: selectedState }));
  }
}
