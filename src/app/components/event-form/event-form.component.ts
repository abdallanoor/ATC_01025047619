import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { Category } from '../../core/interfaces/category.interface';
import { CATEGORIES } from '../../core/mocks/categories.mock';
import { Event } from '../../core/interfaces/event.interface';
import { MessageModule } from 'primeng/message';
import { FormFieldErrorMessageComponent } from '../app-form-field-error-message/form-field-error-message.component';

@Component({
  selector: 'app-event-form',
  imports: [
    TranslateModule,
    InputTextModule,
    DatePickerModule,
    InputNumberModule,
    SelectModule,
    TextareaModule,
    ButtonModule,
    MessageModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    FormFieldErrorMessageComponent,
  ],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css',
})
export class EventFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<Event>();
  @Input() event!: Event;

  fb = inject(FormBuilder);
  languageService = inject(LanguageService);

  categories: Category[] = CATEGORIES;
  eventForm!: FormGroup;
  currentLanguage: string = 'ar';

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      id: [this.event ? this.event.id : `event-${Date.now()}`],
      eventName: [this.event ? this.event.eventName : '', Validators.required],
      description: [
        this.event ? this.event.description : '',
        Validators.required,
      ],
      category: [this.event ? this.event.category : null, Validators.required],
      date: [this.event ? new Date(this.event.date) : '', Validators.required],
      venue: [this.event ? this.event.venue : '', Validators.required],
      price: [
        this.event ? this.event.price : 0,
        [Validators.min(0), Validators.required],
      ],
      image: [this.event ? this.event.image : '', Validators.required],
      ar: this.fb.group({
        eventName: [
          this.event ? this.event.ar.eventName : '',
          Validators.required,
        ],
        description: [
          this.event ? this.event.ar.description : '',
          Validators.required,
        ],
        venue: [this.event ? this.event.ar.venue : '', Validators.required],
      }),
    });

    this.languageService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.submitForm.emit(this.eventForm.value);
    } else {
      this.eventForm.markAllAsTouched();
    }
  }
}
