import { Component } from '@angular/core';
import { EventCardComponent } from '../../shared/ui/event-card/event-card.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-events',
  imports: [
    EventCardComponent,
    PaginatorModule,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  first: number = 0;

  rows: number = 10;

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }
}
