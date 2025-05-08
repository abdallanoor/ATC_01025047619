import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  fb = new FormBuilder();

  registerForm: FormGroup = this.fb.group(
    {
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      rePassword: ['', Validators.required],
    },
    { validators: this.confirmPassword }
  );

  confirmPassword(g: AbstractControl) {
    return g.get('password')?.value == g.get('rePassword')?.value
      ? null
      : { mismatch: true };
  }

  registerSubmit(): void {}
}
