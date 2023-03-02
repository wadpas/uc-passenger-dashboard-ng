import { Component } from '@angular/core'

@Component({
    selector: 'not-found',
    template: `
    <div>
       Not found! Go to <a routerLink="/">home</a>
    </div>
    `
})
export class NotFoundComponent { }

