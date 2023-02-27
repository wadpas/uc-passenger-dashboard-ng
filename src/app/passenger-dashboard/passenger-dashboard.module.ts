import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PassengerDashboardComponent } from "./passenger-dashboard.component";
import { PassengerCountComponent } from "./passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./passenger-detail/passenger-detail.component";


@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [CommonModule],
    exports: [PassengerDashboardComponent],
})
export class PassengerDashboardModule {

}