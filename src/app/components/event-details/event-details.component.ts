import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { Event } from '../../core/interfaces/event.interface';
import { EventService } from '../../core/services/event.service';
import { MessageService } from 'primeng/api';
import { LanguageService } from '../../core/services/language.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-details',
  imports: [BadgeModule, TranslateModule, ButtonModule, DatePipe],
  templateUrl: './event-details.component.html',
})
export class EventDetailsComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  eventService = inject(EventService);
  messageService = inject(MessageService);
  languageService = inject(LanguageService);

  event!: Event;
  currentLanguage: string = 'ar';

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });

    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (!id) return;
      const event = this.eventService.getEventById(id);
      if (event) {
        this.event = event;
      } else {
        this.router.navigate(['/']);
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

  onBook(): void {
    this.router.navigate(['/congratulations/' + this.event.id]);
  }
}
