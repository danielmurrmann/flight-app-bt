import { Component, input, linkedSignal } from '@angular/core';
import { initialFlight } from '../entities/flight';
import { DatePipe } from '@angular/common';
import { CityPipe } from '../pipes/city-pipe';

@Component({
  selector: 'app-flight-card',
  imports: [DatePipe, CityPipe],
  templateUrl: './flight-card.html'
})
export class FlightCard {
  flight = input(initialFlight);
  selected = input(false);
  internalSelected = linkedSignal(() => this.selected());

  select() {
    this.internalSelected.set(true);
  }

  deselect() {
    this.internalSelected.set(false);
  }
}
