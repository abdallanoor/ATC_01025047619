import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-event-card',
  imports: [ButtonModule, BadgeModule, TranslateModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {}
