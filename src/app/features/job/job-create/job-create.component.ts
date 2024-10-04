import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent {
  form: FormGroup;

  educationOptions = [
    { value: 'bachelor', label: 'Bachelor' },
    { value: 'master', label: 'Master' },
    // Add more options as needed
  ];

  skillOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    // Add more skill options as needed
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      education: [],
      skills: [],
      // Add more form controls as needed
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Handle job creation form submission
      console.log(this.form.value);
    }
  }
}
