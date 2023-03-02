import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Passenger } from "../passenger-dashboard.interface";
import { PassengerDashboardService } from "../passenger-dashboard.service";
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'passenger-viewer',
    template: `
    <button type="button"
        class="btn
        btn-primary"
        (click)="goBack()">
        &lsaquo; Back
    </button>
    <div class="page">
        <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)"></passenger-form>
    </div>
    `
})
export class PassengerViewerComponent {
    passenger: Passenger;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService
    ) { }

    ngOnInit() {
        this.route.params.pipe(
            switchMap(
                (data) => this.passengerService.getPassenger(data['id'])
            ),
        ).subscribe(
            (data: Passenger) => this.passenger = data,
        )
    }

    onUpdatePassenger(event: Passenger) {
        this.passengerService
            .updatePassenger(event)
            .subscribe(
                (data: Passenger) => {
                    this.passenger = Object.assign({}, this.passenger, data)
                }
            )
    }

    goBack() {
        this.router.navigate(['/passengers'])
    }
}