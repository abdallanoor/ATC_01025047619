import { MessageService } from 'primeng/api';
import { AuthService } from '../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { MessageModule } from 'primeng/message';
import { FormFieldErrorMessageComponent } from '../../components/app-form-field-error-message/form-field-error-message.component';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    FloatLabel,
    PasswordModule,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
    MessageModule,
    FormFieldErrorMessageComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  messageService = inject(MessageService);
  languageService = inject(LanguageService);

  fb = new FormBuilder();

  currentLanguage: string = 'ar';
  messageVisible: boolean = false;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  loginSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe((success) => {
        if (success) {
          this.router.navigate(['/']);
          this.messageService.add({
            severity: 'success',
            summary:
              this.currentLanguage == 'ar' ? 'أهلاً برجوعك!' : 'Welcome back',
            closable: false,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary:
              this.currentLanguage == 'ar'
                ? 'الإيميل أو كلمة السر مش صح'
                : 'Invalid email or password',
            closable: false,
          });
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  toggleMessage() {
    this.messageVisible = !this.messageVisible;
  }
}
