import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { LanguageSelectorComponent } from '../../shared/ui/language-selector/language-selector.component';
import { ThemeToggleComponent } from '../../shared/ui/theme-toggle/theme-toggle.component';
import { AuthService } from '../../core/services/auth.service';
import { MessageService } from 'primeng/api';
import { LanguageService } from '../../core/services/language.service';
import { User } from '../../core/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    TranslateModule,
    LanguageSelectorComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  authService = inject(AuthService);
  messageService = inject(MessageService);
  languageService = inject(LanguageService);
  router = inject(Router);

  user!: User;
  isLoggedIn: boolean = false;
  currentLanguage: string = 'ar';

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });

    this.authService.user$.subscribe((user) => {
      this.isLoggedIn = !!user;
      if (user) {
        this.user = user;
      }
    });
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    this.messageService.add({
      severity: 'success',
      summary: this.currentLanguage == 'ar' ? 'تم تسجيل الخروج' : 'Logged out',
      closable: false,
    });
  }
}
