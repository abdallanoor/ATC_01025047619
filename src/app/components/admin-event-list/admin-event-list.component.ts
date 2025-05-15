import { TranslateModule } from '@ngx-translate/core';
import { Component, inject, OnInit } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { DatePipe } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { RouterLink } from '@angular/router';
import { Event } from '../../core/interfaces/event.interface';
import { MessageService } from 'primeng/api';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-admin-event-list',
  imports: [
    TranslateModule,
    InputIcon,
    IconField,
    InputTextModule,
    ButtonModule,
    TableModule,
    Dialog,
    DatePipe,
    RouterLink,
  ],
  templateUrl: './admin-event-list.component.html',
})
export class AdminEventListComponent implements OnInit {
  languageService = inject(LanguageService);
  messageService = inject(MessageService);
  eventService = inject(EventService);

  events: Event[] = [];
  currentLanguage: string = 'ar';
  visible: boolean = false;
  eventToDelete: Event | null = null;

  ngOnInit() {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });

    this.events = this.eventService.getAllEvents().reverse();
  }

  deleteEvent() {
    if (!this.eventToDelete) return;

    this.eventService.deleteEvent(this.eventToDelete.id);
    this.events = this.eventService.getAllEvents();
    this.visible = false;
    this.eventToDelete = null;
    this.messageService.add({
      severity: 'success',
      summary:
        this.currentLanguage == 'ar'
          ? 'الفعالية اتمسحت'
          : 'Event deleted successfully',
      closable: false,
    });
  }

  showDialog(event: Event) {
    this.visible = true;
    this.eventToDelete = event;
  }
}
