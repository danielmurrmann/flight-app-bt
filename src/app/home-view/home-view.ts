import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  imports: [],
  templateUrl: './home-view.html',
})
export class HomeView {
  private readonly router = inject(Router);

  navigateToFlightSearch() {
    this.router.navigate(['/flight-search']);
  }
}
