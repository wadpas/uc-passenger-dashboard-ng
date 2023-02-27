import { Component, OnInit } from "@angular/core";
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
    passengers: Passenger[] = [];

    ngOnInit(): void {
        this.passengers = [{
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkInDate: 1690742000000,
            children: null
        },
        {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkInDate: null,
            children: [{ name: 'Ted', age: 2 }]
        },
        {
            id: 3,
            fullname: 'Omar',
            checkedIn: true,
            checkInDate: 1690642000000,
            children: [{ name: 'Tom', age: 12 }, { name: 'Any', age: 4 }]
        }
        ]
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
        console.log(this.passengers)
    }

    handleRemove(event: Passenger) {
        this.passengers = this.passengers.filter(
            (passenger) => passenger.id !== event.id
        );
    }
}