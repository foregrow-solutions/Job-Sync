import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobListingComponent,
    JobCreateComponent,
    JobEditComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatAutocompleteModule,
    // MatSelectModule,
    // MatChipsModule,
    SharedModule
  ]
})
export class JobModule { }
