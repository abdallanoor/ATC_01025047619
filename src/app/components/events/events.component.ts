import { EventService } from './../../core/services/event.service';
import { Component, inject, signal } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DataViewModule } from 'primeng/dataview';
import { Event } from '../../core/interfaces/event.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [
    EventCardComponent,
    PaginatorModule,
    InputTextModule,
    FormsModule,
    TranslateModule,
    DataViewModule,
    CommonModule,
  ],
  templateUrl: './events.component.html',
})
export class EventsComponent {
  eventService = inject(EventService);

  events = signal<Event[]>([]);
  first: number = 0;
  rows: number = 10;

  ngOnInit(): void {
    this.events.set(this.eventService.getAllEvents());
  }
  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }
}
