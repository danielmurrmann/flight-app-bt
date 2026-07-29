import { Injectable, Signal } from '@angular/core';
import { FlightSearchCriteria } from '../entities/criteria';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight-service';

@Injectable({
    providedIn: 'root',
    useClass: DefaultFlightService
})
export abstract class FlightService {
    abstract createFlightsResource(searchCriteria: Signal<FlightSearchCriteria>): HttpResourceRef<Flight[]>
}
