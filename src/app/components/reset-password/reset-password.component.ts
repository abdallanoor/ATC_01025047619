import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { StepsModule } from 'primeng/steps';
import { InputOtp } from 'primeng/inputotp';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    FloatLabel,
    PasswordModule,
    ReactiveFormsModule,
    StepsModule,
    InputOtp,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  private fb = inject(FormBuilder);
  translateService = inject(TranslateService);

  steps = 1;
  activeIndex = 0;
  items: MenuItem[] = [];

  sendEmailForm = this.fb.group({
    email: ['', Validators.required],
  });

  verifyCodeForm = this.fb.group({
    resetCode: ['', Validators.required],
  });

  resetPasswordForm = this.fb.group({
    email: ['', Validators.required],
    newPassword: ['', Validators.required],
  });

  get form(): FormGroup {
    switch (this.steps) {
      case 1:
        return this.sendEmailForm;
      case 2:
        return this.verifyCodeForm;
      case 3:
        return this.resetPasswordForm;
      default:
        throw new Error('Invalid step');
    }
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() => this.loadStepLabels());
    this.loadStepLabels();
  }

  loadStepLabels() {
    const keys = ['auth.sendEmail', 'auth.verifyCode', 'auth.resetPassword'];
    this.translateService.get(keys).subscribe((translations) => {
      this.items = keys.map((key) => ({ label: translations[key] }));
    });
  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
    this.steps = event + 1;
  }

  clearData(): void {
    this.steps = 1;
    this.activeIndex = 0;
  }

  submit(): void {}
}
