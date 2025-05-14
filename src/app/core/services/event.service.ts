import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private storageKey = 'events';

  getAllEvents(): Event[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getEventById(id: string): Event | undefined {
    const events = this.getAllEvents();
    return events.find((event) => event.id === id);
  }

  addEvent(event: Event): void {
    const events = this.getAllEvents();
    events.push(event);
    this.saveEvents(events);
  }

  updateEvent(updatedEvent: Event): void {
    const events = this.getAllEvents();
    const index = events.findIndex((e) => e.id === updatedEvent.id);
    if (index !== -1) {
      events[index] = updatedEvent;
      this.saveEvents(events);
    }
  }

  deleteEvent(id: string): void {
    const events = this.getAllEvents().filter((event) => event.id !== id);
    this.saveEvents(events);
  }

  initializeEvents(defaultEvents: Event[]): void {
    const storedEvents = localStorage.getItem(this.storageKey);
    if (!storedEvents || JSON.parse(storedEvents).length === 0) {
      this.saveEvents(defaultEvents);
    }
  }

  private saveEvents(events: Event[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(events));
  }
}
