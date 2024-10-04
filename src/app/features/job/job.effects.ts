import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as JobActions from './job.actions';
import { JobService } from './job.service';

@Injectable()
export class JobEffects {
    loadJobs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.loadJobs),
            mergeMap(() =>
                this.jobService.getJobs().pipe(
                    map((jobs) => JobActions.loadJobsSuccess({ jobs })),
                    catchError((error) => of(JobActions.loadJobsFailure({ error: 'Failed to load jobs' })))
                )
            )
        )
    );

    addJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.addJob),
            mergeMap((action) =>
                this.jobService.addJob(action.job).pipe(
                    map((job) => JobActions.addJobSuccess({ job })),
                    catchError((error) => of(JobActions.addJobFailure({ error: 'Failed to add job' })))
                )
            )
        )
    );

    updateJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.updateJob),
            mergeMap((action) =>
                this.jobService.updateJob(action.job).pipe(
                    map((job) => JobActions.updateJobSuccess({ job })),
                    catchError((error) => of(JobActions.updateJobFailure({ error: 'Failed to update job' })))
                )
            )
        )
    );

    deleteJob$ = createEffect(() =>
        this.actions$.pipe(
            ofType(JobActions.deleteJob),
            mergeMap((action) =>
                this.jobService.deleteJob(action.jobId).pipe(
                    map(() => JobActions.deleteJobSuccess({ jobId: action.jobId })),
                    catchError((error) => of(JobActions.deleteJobFailure({ error: 'Failed to delete job' })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private jobService: JobService) { }
}
