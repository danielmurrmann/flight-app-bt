import { schema, required, minLength } from "@angular/forms/signals";

export type FlightSearchCriteria = { from: string, to: string };

export const initialFlightSearchCriteria: FlightSearchCriteria = { from: '', to: '' };

export const FLIGHT_SEARCH_CRITERIA_SCHEMA = schema<FlightSearchCriteria>(criteria => {
    required(criteria.from, { message: "This field is required" });
    minLength(criteria.from, 3, { message: 'At least 3 chars are required' });
    required(criteria.to, { message: "This field is required" });
    minLength(criteria.to, 3, { message: 'At least 3 chars are required' });
});