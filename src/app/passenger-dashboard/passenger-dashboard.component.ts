import { Component, OnInit } from "@angular/core";
import { Passenger } from "./passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.css'],
    template: `
    <div class="dashboard">
        <passenger-count
            [items]="passengers">
        </passenger-count>
        <passenger-detail
            *ngFor="let passenger of passengers"
            [detail]=passenger>
        </passenger-detail>
    </div>`
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[] = [];
    constructor() { }
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
}