import { Component, Input } from "@angular/core";
import { Passenger } from "../../passenger-dashboard.interface";

@Component({
    selector: 'passenger-form',
    template: `
    <div>
        hhhhh
       {{ detail | json}}
    </div>
    `
})
export class PassengerFormComponent {
    @Input() detail: Passenger
}