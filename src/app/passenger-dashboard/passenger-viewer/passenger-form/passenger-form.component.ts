import { Component, Input } from "@angular/core";
import { Baggage, Passenger } from "../../passenger-dashboard.interface";

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.css'],
    template: `
    <form #form="ngForm" novalidate>
        {{ detail | json}}
        <div>
            Passenger name: 
            <input type="text" name="fullname" required
            #fullname="ngModel" [ngModel]="detail?.fullname">
            <div *ngIf="fullname.errors && fullname.dirty" class="error">
                Passenger name is required
            </div>
        </div>
         <div>
            Passenger ID: 
            <input type="number" name="id" required
            #id="ngModel"[ngModel]="detail?.id">
            <div *ngIf="id.errors && id.dirty" class="error">
                Passenger ID is required
            </div>            
        </div>  
        <div>
            <label>
                Confirm: 
                <input type="checkbox" name="chechedIn"
                [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
            </label>
        </div>
        <div *ngIf="form.value.chechedIn">
            Chech in date:
            <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate">
        </div>
        <div>
            Luggage:
            <select name="baggage" [ngModel]="detail?.baggage">
                <option *ngFor="let item of baggage" [value]="item.key"
                [selected]="item.key === detail?.baggage">
                    {{ item.value}}
                </option>
            </select>
        </div>

        {{ form.value | json}}
    </form>
    `
})
export class PassengerFormComponent {
    @Input() detail?: Passenger

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    }, {
        key: 'hand-only',
        value: 'Hand baggage'
    }, {
        key: 'hold-only',
        value: 'Hold baggage'
    }, {
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }]

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail!.checkInDate = Date.now();
        }
    }
}