import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    FilterComponent,
    JobListingComponent,
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    FilterRoutingModule,
    MatPaginatorModule,
    SharedModule
  ]
})
export class FilterModule { }
