import { computed, Injectable, Resource, resourceFromSnapshots, ResourceSnapshot, signal, Signal } from '@angular/core';
import { FlightSearchCriteria } from '../entities/criteria';
import { httpResource } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { FlightService } from './flight-service';

@Injectable()
export class DummyFlightService implements FlightService {
    createFlightsResource(searchCriteria: Signal<FlightSearchCriteria>) {
        let resourceData = computed<ResourceSnapshot<Flight[]>>(() => ({
            value: [
                { id: 1, from: searchCriteria().from, to: searchCriteria().to, date: '2024-06-01', delayed: false },
                { id: 2, from: searchCriteria().from, to: searchCriteria().to, date: '2024-06-02', delayed: true },
            ],
            status: 'local'
        }));
        return resourceFromSnapshots(resourceData);
    }
}
