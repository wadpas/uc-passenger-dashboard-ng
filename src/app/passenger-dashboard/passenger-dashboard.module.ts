import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { PassengerDashboardComponent } from "./passenger-dashboard.component";
import { PassengerCountComponent } from "./passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./passenger-detail/passenger-detail.component";
import { PassengerDashboardService } from "./passenger-dashboard.service";


@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        PassengerDashboardComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

}