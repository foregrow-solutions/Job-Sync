import { Component, Input } from '@angular/core';
import { Job } from 'src/app/features/job/job.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {
  @Input() job: Job | undefined;

}
