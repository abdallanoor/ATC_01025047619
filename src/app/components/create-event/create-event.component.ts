import { Component, EventEmitter, inject, OnInit } from '@angular/core';
import { EventFormComponent } from '../event-form/event-form.component';
import { Event } from '../../core/interfaces/event.interface';
import { CATEGORIES } from '../../core/mocks/categories.mock';
import { Category } from '../../core/interfaces/category.interface';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LanguageService } from '../../core/services/language.service';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-create-event',
  imports: [EventFormComponent],
  template: `<app-event-form (submitForm)="handleSubmit($event)" />`,
})
export class CreateEventComponent implements OnInit {
  router = inject(Router);
  messageService = inject(MessageService);
  languageService = inject(LanguageService);
  eventService = inject(EventService);

  categoris: Category[] = CATEGORIES;
  currentLanguage: string = 'ar';

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  handleSubmit(formData: Event) {
    this.eventService.addEvent(formData);
    this.messageService.add({
      severity: 'success',
      summary:
        this.currentLanguage == 'ar' ? 'تم إضافة الفعالية' : 'Event created',
      closable: false,
    });

    this.router.navigate(['/admin']);
  }
}
