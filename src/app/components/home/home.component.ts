import { Component } from '@angular/core';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-home',
  imports: [EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
