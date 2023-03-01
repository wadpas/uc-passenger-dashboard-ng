import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Baggage, Passenger } from "../../passenger-dashboard.interface";

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.css'],
    template: `
    <form (ngSubmit)="handleSubmite(form.value, form.valid)" #form="ngForm" novalidate>
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
            Check in date:
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
        <button type="submite" class="btn btn-primary" [disabled]="form.invalid">Submite</button>
    </form>
    `
})
export class PassengerFormComponent {
    @Input() detail?: Passenger;
    @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

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

    handleSubmite(passenger: Passenger, isValid: any) {
        if (isValid) {
            this.update.emit(passenger);
        }
    }
}