import { Component } from '@angular/core';
import { EventsComponent } from '../../components/events/events.component';

@Component({
  selector: 'app-home',
  imports: [EventsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
