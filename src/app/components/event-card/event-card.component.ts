import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Event } from '../../core/interfaces/event.interface';
import { LanguageService } from '../../core/services/language.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { BookingService } from '../../core/services/booking.service';

@Component({
  selector: 'app-event-card',
  imports: [ButtonModule, BadgeModule, TranslateModule, DatePipe],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() event!: Event;

  languageService = inject(LanguageService);
  authService = inject(AuthService);
  bookingService = inject(BookingService);
  router = inject(Router);

  currentLanguage: string = 'ar';
  isBooked: boolean = false;
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event'] && this.event) {
      this.authService.user$.subscribe((user) => {
        if (user) {
          this.isBooked = this.bookingService.isEventBooked(
            this.event.id,
            user.id
          );
          if (user.role == 'admin') this.isAdmin = true;
        } else {
          this.isBooked = false;
          this.isAdmin = false;
        }
      });
    }
  }
  onBook(id: string) {
    this.router.navigate(['/event/' + id]);
  }
}
