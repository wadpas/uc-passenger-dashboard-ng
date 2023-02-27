import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from "./app.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }  