import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';

import { JobCardComponent } from './components/job-card/job-card.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { DynamicTitleCoverComponent } from './components/dynamic-title-cover/dynamic-title-cover.component';

@NgModule({
  declarations: [JobCardComponent, JobSearchComponent, PageNotFoundComponent, DynamicTableComponent, InputFieldComponent, DynamicTitleCoverComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule, MatTableModule, MatPaginatorModule, FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule,],
  exports: [JobCardComponent, JobSearchComponent, DynamicTableComponent,InputFieldComponent, MatChipsModule],
})
export class SharedModule { }
