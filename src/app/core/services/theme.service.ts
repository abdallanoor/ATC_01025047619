import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
    const isDark = localStorage.getItem('theme') === 'dark';
    this.setTheme(isDark);
  }

  toggleTheme(): void {
    const isDark = document.documentElement.classList.contains('dark');
    this.setTheme(!isDark);
  }

  private setTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
      // document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      // document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', '');
    }
  }
}
