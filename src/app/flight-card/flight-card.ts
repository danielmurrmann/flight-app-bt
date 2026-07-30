import { Component, input, linkedSignal, model, output } from '@angular/core';
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
  selected = model(false);

  select() {
    this.selected.set(true);
  }

  deselect() {
    this.selected.set(false);
  }
}
