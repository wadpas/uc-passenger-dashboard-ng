import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { Passenger } from "./passenger-dashboard.interface";

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

    constructor(private http: HttpClient) {
    }

    getPassengers() {
        return this.http
            .get<Passenger[]>(PASSENGER_API)
            .pipe(
                catchError(this.handleError)
            );
    }

    updatePassenger(passenger: Passenger) {
        return this.http
            .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger)
            .pipe(
                catchError(this.handleError)
            );
    }

    removePassenger(passenger: Passenger) {
        return this.http
            .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
            console.warn('Client', err.message);
        } else {
            console.warn('Server', err.status);
        }
        return throwError(() => new Error(err.message));
    }
}