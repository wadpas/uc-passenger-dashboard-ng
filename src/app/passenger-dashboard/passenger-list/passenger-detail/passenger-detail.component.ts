import { Component, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from "../../passenger-dashboard.interface";

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.css'],
    template: `
    <div class="passenger-detail">
        <span
            class="status"
            [ngClass]="{'checked-in': detail.checkedIn}">
        </span>
        <div *ngIf="editing">
            <input type="text"
                [value]="detail.fullname"
                (input)="onNameChange(name.value)"
                #name>
        </div>
        <div *ngIf="!editing">
            {{ detail.fullname }}
        </div>
        <div class="date">
            Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'MMMM d y') : 'Not checked in' }}
        </div>
        <button type="button"
            class="btn btn-primary"
            (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit' }}
        </button>
        <button type="button"
            class="btn btn-danger"
            (click)="onRemove()">
            Delete
        </button>
        <button type="button"
            class="btn btn-info"
            (click)="onView()">
            View
        </button>
    </div>
    `
})

export class PassengerDetailComponent implements OnChanges {
    @Input() detail: Passenger;
    @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
    @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
    @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    editing: boolean = false;

    ngOnChanges(changes: any) {
        if (changes.detail)
            this.detail = Object.assign({}, changes.detail.currentValue)
    }

    onNameChange(value: string) {
        this.detail.fullname = value
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }

    onView() {
        this.view.emit(this.detail);
    }
}