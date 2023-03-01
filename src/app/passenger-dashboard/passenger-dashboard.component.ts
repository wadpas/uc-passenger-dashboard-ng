import { Component } from "@angular/core";

@Component({
    selector: 'passenger-dashboard',
    template: `
        <div class="app">
            <passenger-list></passenger-list>
            <passenger-viewer></passenger-viewer>
         </div>
  `
})
export class PassengerDashboardComponent {
}      