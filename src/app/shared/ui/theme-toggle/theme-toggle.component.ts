import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <p-button
      [icon]="isDark ? 'pi pi-sun' : 'pi pi-moon'"
      (onClick)="toggleTheme()"
      severity="secondary"
      [rounded]="true"
      [text]="true"
      size="small"
    />
  `,
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  isDark = false;

  constructor() {
    this.isDark = localStorage.getItem('theme') === 'dark';
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.themeService.toggleTheme();
  }
}
