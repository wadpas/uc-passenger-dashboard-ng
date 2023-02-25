import { Component } from "@angular/core";

@Component({
  selector: ' app-root',
  styleUrls: ['app.component.css'],
  template: `
  <div class="app">
    {{title}}
  </div>
  `
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Passenger Dashboard';
  }
}