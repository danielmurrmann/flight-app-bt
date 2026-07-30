import { Component, computed, effect, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { FlightService, flightServiceFactory } from '../services/flight-service';
import { FlightSearchCriteria, initialFlightSearchCriteria } from '../entities/criteria';
import { FlightCard } from '../flight-card/flight-card';

@Component({
  selector: 'app-flight-search-view',
  imports: [FormField, FlightCard],
  templateUrl: './flight-search-view.html',
  providers: [{ provide: FlightService, useFactory: flightServiceFactory}]
})
export class FlightSearchView {

  criteria = signal<FlightSearchCriteria>({from: 'Berlin', to: 'London'});
  searchCriteria = signal(initialFlightSearchCriteria);

  flightRoute = computed(() => `${this.criteria().from} - ${this.criteria().to}`);
  flightsResource = inject(FlightService).createFlightsResource(this.searchCriteria);

  form = form(this.criteria);
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

}
