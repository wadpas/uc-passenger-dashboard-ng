export interface Passenger {
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate?: number,
    baggage: string
}

export interface Baggage {
    key: string,
    value: string,
}