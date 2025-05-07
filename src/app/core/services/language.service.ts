import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  constructor() {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
    this.changeLanguage(savedLang);
  }

  changeDirection() {
    const savedLang = localStorage.getItem('lang') || 'en';
    if (savedLang == 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.changeDirection();
  }
}
