import { EVENTS } from './core/mocks/events.mock';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LanguageService } from './core/services/language.service';
import { Event } from './core/interfaces/event.interface';
import { EventService } from './core/services/event.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  languageService = inject(LanguageService);
  eventService = inject(EventService);

  currentLanguage: string = 'ar';
  defaultEvents: Event[] = EVENTS;

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });

    this.eventService.initializeEvents(this.defaultEvents);
  }
}
