import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobEditComponent } from './job-edit/job-edit.component';

const routes: Routes = [
  { path: '', component: JobListingComponent },
  { path: 'create', component: JobCreateComponent },
  { path: 'edit-job/:id', component: JobEditComponent },
  { path: 'edit-job/:id', component: JobEditComponent },
  { path: '**', redirectTo: '/jobs' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
