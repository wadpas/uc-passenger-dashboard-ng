import { Component, Input } from '@angular/core';
import { Passenger } from "../passenger.interface";

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.css'],
    template: `
    <div class="passenger-detail">
        <span
            class="status"
            [ngClass]="{'checked-in': detail.checkedIn}">
        </span>
            {{ detail.fullname }}
        <div class="date">
            Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'MMMM d y') : 'Not checked in' }}
        </div>
        <div class="children">
            Children: {{ detail.children?.length || 0 }}
        </div>
    </div>
    `
})
export class PassengerDetailComponent {
    @Input() detail: Passenger;
}