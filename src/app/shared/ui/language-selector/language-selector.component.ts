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
      class="select w-24 text-xs p-2"
      size="small"
    >
      <ng-template #selectedItem let-selectedOption>
        @if (selectedOption) {
        <div class="flex items-center gap-1 text-xs">
          <img [src]="selectedOption.flag" width="15" />
          <div>{{ selectedOption.name }}</div>
        </div>
        }
      </ng-template>
      <ng-template let-lang #item>
        <div class="flex items-center text-xs gap-1">
          <img [src]="lang.flag" width="15" />
          <div>{{ lang.name }}</div>
        </div>
      </ng-template>
      <ng-template #dropdownicons>
        <i class="icon pi pi-chevron-down"></i>
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
      :host ::ng-deep .p-select-dropdown {
        width: 10px !important;
      }
      :host ::ng-deep .p-select-dropdown .p-icon {
        width: 10px !important;
        height: 10px !important;
      }
      :host ::ng-deep .p-select-label {
        padding: 0px !important;
      }
      :host ::ng-deep .p-select-option {
        padding: 0.5rem !important;
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
