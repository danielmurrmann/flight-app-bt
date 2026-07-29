import { Injectable, Resource, Signal } from '@angular/core';
import { FlightSearchCriteria } from '../entities/criteria';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight-service';
import { DummyFlightService } from './dummy-flight-service';

export function flightServiceFactory(): FlightService {
    let useDummyValues = false; // inject(ConfigService).config.useDummyValues;
    if(useDummyValues) return new DummyFlightService();
    else return new DefaultFlightService();
}

@Injectable({
    providedIn: 'root',
    useFactory: flightServiceFactory
})
export abstract class FlightService {
    abstract createFlightsResource(searchCriteria: Signal<FlightSearchCriteria>): Resource<Flight[]>
}
