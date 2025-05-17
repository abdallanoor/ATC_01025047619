import { inject, Injectable } from '@angular/core';
import { Booking } from '../interfaces/booking.interface';
import { EventService } from './event.service';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private eventService = inject(EventService);
  private storageKey = 'bookings';

  private getAllBookings(): Booking[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveBookings(bookings: Booking[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(bookings));
  }

  getUserBookings(userId: string): Booking[] {
    return this.getAllBookings().filter((b) => b.userId === userId);
  }

  isEventBooked(eventId: string, userId: string): boolean {
    return this.getAllBookings().some(
      (b) => b.eventId === eventId && b.userId === userId
    );
  }

  bookEvent(event: Event, userId: string): Booking | null {
    const events = this.eventService.getAllEvents();
    const eventExists = events.some((e) => e.id === event.id);
    if (!eventExists) return null;

    if (this.isEventBooked(event.id, userId)) return null;

    const newBooking: Booking = {
      id: `booking-${Date.now()}`,
      userId,
      bookingDate: new Date().toISOString(),
      eventId: event.id,
      eventName: event.eventName,
      eventVenue: event.venue,
      eventDate: event.date,
      ar: {
        eventName: event.ar.eventName,
        eventVenue: event.ar.venue,
      },
    };

    const allBookings = this.getAllBookings();
    allBookings.push(newBooking);
    this.saveBookings(allBookings);

    return newBooking;
  }
}
