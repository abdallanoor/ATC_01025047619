import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { LanguageService } from '../../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    Select,
    TranslateModule,
    FormsModule,
    ButtonModule,
  ],
  template: `
    <p-select
      [options]="languages"
      [(ngModel)]="selectedLanguage"
      optionLabel="name"
      (onChange)="onLanguageChange()"
    >
      <ng-template #selectedItem let-selectedOption>
        @if (selectedOption) {
        <div class="flex items-center gap-2">
          <img [src]="selectedOption.flag" width="18" />
          <div>{{ selectedOption.name }}</div>
        </div>
        }
      </ng-template>
      <ng-template let-lang #item>
        <div class="flex items-center gap-2">
          <img [src]="lang.flag" width="18" />
          <div>{{ lang.name }}</div>
        </div>
      </ng-template>
    </p-select>
  `,
  styles: [
    `
      :host ::ng-deep {
        .p-select {
          background: transparent;
        }
      }
    `,
  ],
})
export class LanguageSelectorComponent implements OnInit {
  private languageService = inject(LanguageService);

  languages: Language[] = [];
  selectedLanguage: Language | null = null;

  ngOnInit() {
    this.languages = [
      { name: 'English', code: 'en', flag: 'assets/flags/us.png' },
      { name: 'العربية', code: 'ar', flag: 'assets/flags/saudi.png' },
    ];

    const savedLangCode = localStorage.getItem('lang') || 'en';
    this.selectedLanguage =
      this.languages.find((l) => l.code === savedLangCode) || this.languages[0];
  }

  onLanguageChange() {
    if (this.selectedLanguage) {
      this.languageService.changeLanguage(this.selectedLanguage.code);
    }
  }
}
