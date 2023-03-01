import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PassengerDashboardComponent } from "./passenger-dashboard.component"
import { PassengerViewerComponent } from "./passenger-viewer/passenger-viewer.component"
import { PassengerFormComponent } from "./passenger-viewer/passenger-form/passenger-form.component";
import { PassengerListComponent } from "./passenger-list/passenger-list.component";
import { PassengerCountComponent } from "./passenger-list/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./passenger-list/passenger-detail/passenger-detail.component";
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        PassengerListComponent,
        PassengerCountComponent,
        PassengerFormComponent,
        PassengerDetailComponent,
        PassengerDashboardComponent,
        PassengerViewerComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule
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