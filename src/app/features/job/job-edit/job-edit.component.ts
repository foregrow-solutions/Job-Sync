import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/features/job/job.model';
import { JobService } from 'src/app/features/job/job.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent {
  form: FormGroup;
  jobId: string='';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService // replace with your actual service
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // Add other form controls based on your Job model
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = params['id'];
      // Fetch the job details using jobId and populate the form
      this.loadJobDetails(this.jobId);
    });
  }

  loadJobDetails(jobId: string): void {
    // Fetch job details from your service using the jobId
    // this.jobService.getJobById(jobId).subscribe(
    //   (job: Job) => {
    //     this.form.patchValue(job); // Populate the form with job details
    //   },
    //   error => {
    //     console.error('Error loading job details', error);
    //   }
    // );
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Save the edited job details
      // this.jobService.updateJob(this.jobId, this.form.value).subscribe(
      //   () => {
      //     console.log('Job updated successfully');
      //     // Redirect to the job details page or job listing page
      //     this.router.navigate(['/jobs', this.jobId]);
      //   },
      //   error => {
      //     console.error('Error updating job', error);
      //   }
      // );
    }
  }
}
