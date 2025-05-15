import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { AuthService } from '../../core/services/auth.service';
import { MessageService } from 'primeng/api';
import { FormFieldErrorMessageComponent } from '../../shared/ui/app-form-field-error-message/form-field-error-message.component';

@Component({
  selector: 'app-register',
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    FloatLabel,
    PasswordModule,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
    FormFieldErrorMessageComponent,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);
  messageService = inject(MessageService);
  languageService = inject(LanguageService);

  fb = new FormBuilder();

  currentLanguage: string = 'ar';

  registerForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rePassword: ['', Validators.required],
    },
    { validators: this.confirmPassword }
  );

  ngOnInit(): void {
    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  confirmPassword(g: AbstractControl) {
    return g.get('password')?.value == g.get('rePassword')?.value
      ? null
      : { mismatch: true };
  }

  registerSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      this.authService.register(name, email, password).subscribe((success) => {
        if (success) {
          this.router.navigate(['/']);
          this.messageService.add({
            severity: 'success',
            summary:
              this.currentLanguage == 'ar'
                ? 'الأكونت اتعمل بنجاح'
                : 'Account created successfully',
            closable: false,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary:
              this.currentLanguage == 'ar'
                ? 'المستخدم ده موجود بالفعل'
                : 'User already exists',
            closable: false,
          });
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
