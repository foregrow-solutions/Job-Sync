import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  totalItems = 100; // Replace with the actual total number of items
  pageSize = 10; // Number of items to display per page
  pageSizeOptions: number[] = [5, 10, 20, 50];

  onPageChange(event: PageEvent): void {
    // Handle page change event here
    // You can use event.pageIndex, event.pageSize, etc.
    // Update your job listing based on the new page
    // For example: this.getJobListings(event.pageIndex + 1, event.pageSize);
  }

}
