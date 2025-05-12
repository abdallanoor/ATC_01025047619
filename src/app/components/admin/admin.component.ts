import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, inject, OnInit } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { DatePipe } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { Event } from '../../core/interfaces/event.interface';
import { EVENTS } from '../../core/mocks/events.mock';

@Component({
  selector: 'app-admin',
  imports: [
    TranslateModule,
    InputIcon,
    IconField,
    InputTextModule,
    ButtonModule,
    TableModule,
    Dialog,
    DatePipe,
  ],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  events: Event[] = EVENTS;
  visible: boolean = false;
  lang: string = 'ar';
  languageService = inject(LanguageService);

  ngOnInit() {
    this.languageService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  showDialog() {
    this.visible = true;
  }
}
