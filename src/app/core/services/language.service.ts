import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  private langSubject = new BehaviorSubject<string>(this.getSavedLang());
  public lang$ = this.langSubject.asObservable();

  constructor() {
    const lang = this.langSubject.value;
    this.setLang(lang);
  }

  changeLanguage(lang: string) {
    this.setLang(lang);
    this.langSubject.next(lang);
  }

  private setLang(lang: string) {
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  private getSavedLang(): string {
    return localStorage.getItem('lang') || 'ar';
  }
}
