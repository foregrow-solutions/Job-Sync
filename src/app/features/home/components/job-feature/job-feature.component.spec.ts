import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFeatureComponent } from './job-feature.component';

describe('JobFeatureComponent', () => {
  let component: JobFeatureComponent;
  let fixture: ComponentFixture<JobFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
