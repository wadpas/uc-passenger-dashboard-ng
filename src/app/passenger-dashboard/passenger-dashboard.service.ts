import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { Passenger } from "./passenger.interface";

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

    constructor(private http: HttpClient) {
    }

    getPassengers() {
        return this.http
            .get<Passenger[]>(PASSENGER_API);

    }
}   