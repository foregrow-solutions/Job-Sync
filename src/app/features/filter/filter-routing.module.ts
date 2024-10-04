import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';

const routes: Routes = [
  { path: '', component: FilterComponent },
  { path: 'details', component: JobDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterRoutingModule { }
