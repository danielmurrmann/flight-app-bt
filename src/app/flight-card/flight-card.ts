import { Component, input, linkedSignal, output } from '@angular/core';
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
  selectedChange = output<boolean>();
  internalSelected = linkedSignal(() => this.selected());

  select() {
    this.internalSelected.set(true);
    this.selectedChange.emit(true);
  }

  deselect() {
    this.internalSelected.set(false);
    this.selectedChange.emit(false);
  }
}
