import { Component } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.css'],
    template: `
    <div>
        <h3>Airline Passenger</h3>
        <ul>
            <li *ngFor="let passenger of passengers; let i = index">
                <span
                    class="status"
                    [ngClass]="{'checked-in': passenger.checkedIn}">
                </span>
                {{ i + 1 }}: {{ passenger.fullname }}
                <div class="date">
                    Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'MMMM d y') : 'Not checked in' }}
                </div>
                <div class="children">
                    children: {{ passenger.children?.length || 0 }}
                </div>
            </li>
        </ul>
    </div>
    `

})

export class PassengerDashboardComponent {
    passengers: Passenger[] = [{
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