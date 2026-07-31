import { Component, input, linkedSignal, model, output } from '@angular/core';
import { initialFlight } from '../entities/flight';
import { DatePipe } from '@angular/common';
import { CityPipe } from '../pipes/city-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-card',
  imports: [DatePipe, CityPipe, RouterLink],
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
