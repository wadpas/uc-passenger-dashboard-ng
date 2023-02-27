import { Component, Input } from '@angular/core';
import { Passenger } from '../passenger.interface';

@Component({
    selector: 'passenger-count',
    template: `
    <div>
        Total checked in: {{ checkedInCount() }} / {{ items.length }}
    </div>
    `
})
export class PassengerCountComponent {
    @Input() items: Passenger[];

    checkedInCount(): number {
        if (!this.items) return 0;
        return this.items.filter((passenger: Passenger) => {
            return passenger.checkedIn
        }).length;

    }
}   