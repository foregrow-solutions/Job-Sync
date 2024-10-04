import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() label!: string;
  @Input() type: 'text' | 'email' | 'select' | 'radio'| 'textarea' | 'password' | 'search' | 'url' | 'number' = 'text';
  @Input() controlName!: string;
  @Input() form!: FormGroup;
  @Input() options: { value: any; label: string }[] = [];
  @Input() hint: string | undefined;
  @Input() isMultiple: boolean = false;

  isDirty(): boolean {
    const formControl = this.form.get(this.controlName);
    return formControl ? formControl.dirty : false;
  }


  showValidationErrors(): boolean {
    const formControl = this.form.get(this.controlName);
    return formControl ? (formControl.dirty || formControl.touched) && !formControl.valid : false;
  }

  getValidationErrorMessage(): string | null {
    const formControl = this.form.get(this.controlName);
    if (formControl && formControl.errors) {
      const errorKey = Object.keys(formControl.errors)[0];
      // Customize error messages based on error type
      switch (errorKey) {
        case 'required':
          return `${this.label} is required.`;
        case 'email':
          return 'Invalid email address.';
        // Add more cases as needed
        default:
          return `Invalid ${this.label.toLowerCase()}.`;
      }
    }
    return null;
  }

}
