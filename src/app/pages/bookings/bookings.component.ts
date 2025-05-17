import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { LanguageService } from '../../core/services/language.service';
import { BookingService } from '../../core/services/booking.service';
import { User } from '../../core/interfaces/user.interface';
import { AuthService } from '../../core/services/auth.service';
import { Booking } from '../../core/interfaces/booking.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookings',
  imports: [TranslateModule, TableModule, DatePipe, RouterLink],
  templateUrl: './bookings.component.html',
})
export class BookingsComponent {
  languageService = inject(LanguageService);
  bookingService = inject(BookingService);
  authService = inject(AuthService);

  currentLanguage: string = 'ar';
  bookings: Booking[] = [];
  user!: User;

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.bookings = this.bookingService.getUserBookings(this.user.id);
      }
    });
  }
}
