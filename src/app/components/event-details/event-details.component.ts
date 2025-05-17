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
import { BookingService } from '../../core/services/booking.service';
import { MessageModule } from 'primeng/message';
import { User } from '../../core/interfaces/user.interface';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-event-details',
  imports: [
    BadgeModule,
    TranslateModule,
    ButtonModule,
    DatePipe,
    MessageModule,
  ],
  templateUrl: './event-details.component.html',
})
export class EventDetailsComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  eventService = inject(EventService);
  authService = inject(AuthService);
  messageService = inject(MessageService);
  languageService = inject(LanguageService);
  bookingService = inject(BookingService);

  event!: Event;
  user!: User;
  currentLanguage: string = 'ar';
  isBooked: boolean = false;
  isAdmin: boolean = false;

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

    this.authService.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.isBooked = this.bookingService.isEventBooked(
          this.event.id,
          user.id
        );
        if (user.role == 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }
    });
  }

  onBook(): void {
    if (!this.user) {
      this.router.navigate(['/login']);
      return this.messageService.add({
        severity: 'error',
        summary:
          this.currentLanguage == 'ar'
            ? 'سجل دخولك الأول'
            : `Please log in first`,
        closable: false,
      });
    }
    const result = this.bookingService.bookEvent(this.event, this.user.id);
    if (result) {
      this.router.navigate(['/congratulations/' + this.event.id]);
    } else {
      this.messageService.add({
        severity: 'error',
        summary:
          this.currentLanguage == 'ar'
            ? 'الفعالية اتحجزت قبل كده أو مش موجودة.'
            : `The event has already been booked or doesn't exist.`,
        closable: false,
      });
    }
  }
}
