import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import confetti from 'canvas-confetti';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EventService } from '../../core/services/event.service';
import { MessageService } from 'primeng/api';
import { LanguageService } from '../../core/services/language.service';
import { Event } from '../../core/interfaces/event.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-congratulations-screen',
  imports: [ButtonModule, CardModule, TranslateModule, RouterLink, DatePipe],
  templateUrl: './congratulations-screen.component.html',
})
export class CongratulationsScreenComponent implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  eventService = inject(EventService);
  messageService = inject(MessageService);
  languageService = inject(LanguageService);

  event!: Event;
  currentLanguage: string = 'ar';

  ngOnInit() {
    confetti.create(
      document.getElementById('confetti-canvas') as HTMLCanvasElement,
      {
        resize: true,
        useWorker: true,
      }
    )({
      particleCount: 300,
      spread: 200,
      origin: { y: 0.5 },
    });

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
}
