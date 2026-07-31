import { schema, required, minLength, validate } from "@angular/forms/signals";

export type FlightSearchCriteria = { from: string, to: string };

export const initialFlightSearchCriteria: FlightSearchCriteria = { from: '', to: '' };

const allowedCities = ["Berlin", "Hamburg", "Paris" ];

export const FLIGHT_SEARCH_CRITERIA_SCHEMA = schema<FlightSearchCriteria>(criteria => {
    required(criteria.from, { message: "This field is required" });
    minLength(criteria.from, 3, { message: 'At least 3 chars are required' });
    required(criteria.to, { message: "This field is required" });
    minLength(criteria.to, 3, { message: 'At least 3 chars are required' });
    validate(criteria.from, ctx => {
        if(!allowedCities.includes(ctx.value())) {
            return {
                kind: 'allowedCities',
                message: 'Only the following cities are allowed: ' + allowedCities.join(', ')
            }
        }
        return null;
    });
    validate(criteria, ctx => {
        const value = ctx.value();
        if(value.from === value.to) {
            return {
                kind: 'roundTrip',
                message: 'Round Trips are not allowed'
            }
        }
        return null;
    })
});