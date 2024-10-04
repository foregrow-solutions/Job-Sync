import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./features/filter/filter.module').then((m) => m.FilterModule) },
  { path: 'jobs', loadChildren: () => import('./features/job/job.module').then((m) => m.JobModule) },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
