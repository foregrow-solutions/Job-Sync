import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from 'src/app/features/job/job.model';
import { TableAction, TableColumn } from 'src/app/shared/components/dynamic-table/dynamic-table.component';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

  jobs$: Observable<Job[]> | undefined;

  constructor(private store: Store, private jobService: JobService) {}

  ngOnInit() {
    // this.store.dispatch(loadJobs);
    // this.jobs$ = this.store.select(selectAllJobs);
  }
  
  // Sample data for the dynamic table
  tableColumns: TableColumn[] = [
    { field: 'jobTitle', header: 'Job Title' },
    { field: 'companyName', header: 'Company Name' },
    { field: 'location', header: 'Location' },
    // Add more columns as needed
  ];

  actions: TableAction[] = [
    { label: 'Edit', icon: 'edit', action: 'edit' },
    { label: 'Delete', icon: 'delete', action: 'delete' },
    // Add more actions as needed
  ];

  tableData: any[] = [
    { jobTitle: 'Software Developer', companyName: 'ABC Inc.', location: 'City A' },
    { jobTitle: 'UX Designer', companyName: 'XYZ Corp.', location: 'City B' },
    { jobTitle: 'UX Designer', companyName: 'XYZ Corp.', location: 'City B' },
    { jobTitle: 'UX Designer', companyName: 'XYZ Corp.', location: 'City B' },
    { jobTitle: 'UX Designer', companyName: 'XYZ Corp.', location: 'City B' },
    { jobTitle: 'UX Designer', companyName: 'XYZ Corp.', location: 'City B' },
    // Add more data rows as needed
  ];

  tablePageSizeOptions: number[] = [5, 10, 25];
  tableTotalItems: number = this.tableData.length;

  onPageChange(newPageIndex: number): void {
    // Handle page change logic here
    console.log('New page index:', newPageIndex);
  }

}
