import { Component } from "@angular/core";
import { Passenger } from "../passenger-dashboard.interface";
import { PassengerDashboardService } from "../passenger-dashboard.service";

@Component({
    selector: 'passenger-viewer',
    template: `
    <div class="page">
        <passenger-form
        [detail]="passenger"></passenger-form>
    </div>
    `
})
export class PassengerViewerComponent {
    passenger: Passenger;
    constructor(private passengerService: PassengerDashboardService) { }
    ngOnInit() {
        this.passengerService
            .getPassenger(1)
            .subscribe(
                (data: Passenger) => this.passenger = data
            );
    }
}