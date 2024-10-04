// job/selectors/job.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { JobState } from './job.reducer';

// Create a feature selector to select the entire job state
export const selectJobState = createFeatureSelector<JobState>('job');

// Create individual selectors to get specific pieces of state
export const selectJobs = createSelector(
    selectJobState,
    (state) => state.jobs
);

export const selectError = createSelector(
    selectJobState,
    (state) => state.error
);

// Optionally, you can create a selector that combines multiple pieces of state
export const selectJobList = createSelector(
    selectJobs,
    (jobs) => jobs // This can be modified based on your needs
);
