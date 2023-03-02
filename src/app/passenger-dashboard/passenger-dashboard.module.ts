import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";

import { PassengerViewerComponent } from "./passenger-viewer/passenger-viewer.component"
import { PassengerFormComponent } from "./passenger-viewer/passenger-form/passenger-form.component";
import { PassengerListComponent } from "./passenger-list/passenger-list.component";
import { PassengerCountComponent } from "./passenger-list/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./passenger-list/passenger-detail/passenger-detail.component";
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: 'passengers',
        children: [
            { path: '', component: PassengerListComponent },
            { path: ':id', component: PassengerViewerComponent }
        ]
    }
];

@NgModule({
    declarations: [
        PassengerListComponent,
        PassengerCountComponent,
        PassengerFormComponent,
        PassengerDetailComponent,
        PassengerViewerComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

}