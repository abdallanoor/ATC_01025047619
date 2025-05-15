import { Component, inject, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Event } from '../../../core/interfaces/event.interface';
import { LanguageService } from '../../../core/services/language.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-card',
  imports: [ButtonModule, BadgeModule, TranslateModule, RouterLink, DatePipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  @Input() event!: Event;
  currentLanguage: string = 'ar';

  languageService = inject(LanguageService);

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }
}
