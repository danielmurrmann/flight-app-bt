import { inject, Injectable, InjectionToken, Signal } from '@angular/core';
import { FlightSearchCriteria } from '../entities/criteria';
import { httpResource } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { FlightService } from './flight-service';

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
    providedIn: 'root',
    factory: () => 'https://demo.angulararchitects.io/api/flight'
});

@Injectable()
export class DefaultFlightService implements FlightService {
    readonly #url = inject(BASE_URL);

    createFlightsResource(searchCriteria: Signal<FlightSearchCriteria>) {
        return httpResource<Flight[]>(() => ({
            url: this.#url,
            params: searchCriteria()
        }), { defaultValue: [] });
    }
}
