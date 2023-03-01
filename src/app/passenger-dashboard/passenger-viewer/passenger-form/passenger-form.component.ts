import { Component, Input } from "@angular/core";
import { Passenger } from "../../passenger-dashboard.interface";

@Component({
    selector: 'passenger-form',
    template: `
    <form #form="ngForm" novalidate>
        {{ detail | json}}
        <div>
            Passenger ID: 
            <input type="text" name="fullname" [ngModel]="detail?.fullname">
        </div>
         <div>
            Passenger name: 
            <input type="number" name="id" [ngModel]="detail?.id">
        </div>  
        <div>
            <label>
                <input type="checkbox" name="chechedIn"
                [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
            </label>
        </div>
        <div *ngIf="form.value.chechedIn">
            Chech in date:
            <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate">
        </div>
        {{ form.value | json}}
    </form>
    `
})
export class PassengerFormComponent {
    @Input() detail?: Passenger

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail!.checkInDate = Date.now();
        }
    }
}