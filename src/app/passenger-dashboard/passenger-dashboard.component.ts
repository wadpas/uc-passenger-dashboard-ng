import { Component, OnInit } from "@angular/core";

import { PassengerDashboardService } from "./passenger-dashboard.service";
import { Passenger } from "./passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.css'],
    template: `
    <div>
        <h3>Airline Passengers</h3>
        <passenger-count 
            [items]="passengers">
        </passenger-count>
        <passenger-detail 
            *ngFor="let passenger of passengers"
            [detail]="passenger"
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)">
        </passenger-detail>
    </div>`
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(private passengerService: PassengerDashboardService) { }

    ngOnInit() {
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[]) =>
                this.passengers = data
            );
    }

    handleEdit(event: Passenger) {
        this.passengers = this.passengers.map(
            (passenger) => {
                if (passenger.id === event.id) {
                    passenger = Object.assign({}, passenger, event)
                }
                return passenger;
            }
        )
    }

    handleRemove(event: Passenger) {
        this.passengers = this.passengers.filter(
            (passenger) => passenger.id !== event.id
        );
    }
}