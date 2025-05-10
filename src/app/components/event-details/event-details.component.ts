import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-event-details',
  imports: [BadgeModule, TranslateModule, ButtonModule],
  templateUrl: './event-details.component.html',
})
export class EventDetailsComponent {
  router = inject(Router);

  onBook(): void {
    this.router.navigate(['/congratulations']);
  }
}
