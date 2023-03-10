import { Component, OnInit } from "@angular/core";

import { PassengerDashboardService } from "../passenger-dashboard.service";
import { Passenger } from "../passenger-dashboard.interface";
import { Router } from "@angular/router";

@Component({
    selector: 'passenger-list',
    template: `
    <div class="page">
        <h3>Airline Passengers</h3>
        <passenger-count 
            [items]="passengers">
        </passenger-count>
        <passenger-detail 
            *ngFor="let passenger of passengers"
            [detail]="passenger"
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)"
            (view)="handleView($event)">
        </passenger-detail>
    </div>`
})

export class PassengerListComponent implements OnInit {
    passengers: Passenger[];

    constructor(
        private router: Router,
        private passengerService: PassengerDashboardService
    ) { }

    ngOnInit() {
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[]) =>
                this.passengers = data
            );
    }

    handleEdit(event: Passenger) {
        this.passengerService
            .updatePassenger(event)
            .subscribe((_) => {
                this.passengers = this.passengers.map(
                    (passenger) => {
                        if (passenger.id === event.id) {
                            passenger = Object.assign({}, passenger, event)
                        }
                        return passenger;
                    }
                )
            });
    }

    handleRemove(event: Passenger) {
        this.passengerService
            .removePassenger(event)
            .subscribe((_) => {
                this.passengers = this.passengers.filter(
                    (passenger) => passenger.id !== event.id
                );
            })
    }

    handleView(event: Passenger) {
        this.router.navigate([`passengers/${event.id}`])
    }
}