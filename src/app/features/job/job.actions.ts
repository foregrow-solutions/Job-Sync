import { createAction, props } from "@ngrx/store";
import { Job } from "src/app/features/job/job.model";

export const loadJobs = createAction('[Job] Load Jobs');
export const loadJobsSuccess = createAction('[Job] Load Jobs Success', props<{ jobs: Job[] }>());
export const loadJobsFailure = createAction('[Job] Load Jobs Failure', props<{ error: string }>());
export const addJob = createAction('[Job] Add Job', props<{ job: Job }>());
export const addJobSuccess = createAction('[Job] Add Job Success', props<{ job: Job }>());
export const addJobFailure = createAction('[Job] Add Job Failure', props<{ error: string }>());
export const updateJob = createAction('[Job] Update Job', props<{ job: Job }>());
export const updateJobSuccess = createAction('[Job] Update Job Success', props<{ job: Job }>());
export const updateJobFailure = createAction('[Job] Update Job Failure', props<{ error: string }>());
export const deleteJob = createAction('[Job] Delete Job', props<{ jobId: string }>());
export const deleteJobSuccess = createAction('[Job] Delete Job Success', props<{ jobId: string }>());
export const deleteJobFailure = createAction('[Job] Delete Job Failure', props<{ error: string }>());