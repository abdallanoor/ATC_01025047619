import { Component, inject, OnInit } from '@angular/core';
import { EventFormComponent } from '../event-form/event-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../core/interfaces/event.interface';
import { MessageService } from 'primeng/api';
import { LanguageService } from '../../core/services/language.service';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-edit-event',
  imports: [EventFormComponent],
  template: `<app-event-form
    [event]="event"
    (submitForm)="handleSubmit($event)"
  />`,
})
export class EditEventComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  messageService = inject(MessageService);
  languageService = inject(LanguageService);
  eventService = inject(EventService);

  currentLanguage: string = 'ar';
  event!: Event;

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });

    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) return;
      const event = this.eventService.getEventById(id);

      if (event) {
        this.event = event;
      } else {
        this.router.navigate(['/admin']);
        this.messageService.add({
          severity: 'error',
          summary:
            this.currentLanguage == 'ar'
              ? 'الفعالية دي مش موجودة.'
              : `This event can't be found.`,
          closable: false,
        });
      }
    });
  }

  handleSubmit(updatedEvent: Event) {
    this.eventService.updateEvent(updatedEvent);
    this.messageService.add({
      severity: 'success',
      summary:
        this.currentLanguage == 'ar'
          ? 'تم تعديل الفعالية'
          : 'Event updated successfully',
      closable: false,
    });
    this.router.navigate(['/admin']);
  }
}
