import { Injectable, Signal } from '@angular/core';
import { FlightSearchCriteria } from '../entities/criteria';
import { httpResource } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { FlightService } from './flight-service';

@Injectable()
export class DefaultFlightService implements FlightService {
    readonly #url = 'https://demo.angulararchitects.io/api/flight';

    createFlightsResource(searchCriteria: Signal<FlightSearchCriteria>) {
        return httpResource<Flight[]>(() => ({
            url: this.#url,
            params: searchCriteria()
        }), { defaultValue: [] });
    }
}
