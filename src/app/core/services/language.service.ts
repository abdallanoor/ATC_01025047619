import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  private langSubject = new BehaviorSubject<string>('ar');
  public lang$ = this.langSubject.asObservable();

  constructor() {
    const savedLang = localStorage.getItem('lang') || 'ar';
    this.langSubject.next(savedLang);
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
    this.changeLanguage(savedLang);
  }

  changeDirection() {
    const savedLang = localStorage.getItem('lang') || 'ar';
    if (savedLang == 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }

  changeLanguage(lang: string) {
    this.langSubject.next(lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.changeDirection();
  }
}
