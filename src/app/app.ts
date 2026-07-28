import { Component, signal } from '@angular/core';
import { FlightSearchView } from './flight-search-view/flight-search-view';

@Component({
  selector: 'app-root',
  imports: [FlightSearchView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flight42');
}
