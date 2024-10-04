import { createReducer, on } from "@ngrx/store";
import { Job } from "./job.model";


export interface JobState {
    jobs: Job[];
    error: string | null;
}

export const initialState: JobState = {
    jobs: [],
    error: null,
};

export const jobReducer = createReducer(
    initialState,
    on(JobActions.loadJobsSuccess, (state, { jobs }) => ({ ...state, jobs, error: null })),
    on(JobActions.loadJobsFailure, (state, { error }) => ({ ...state, error })),
    on(JobActions.addJobSuccess, (state, { job }) => ({ ...state, jobs: [...state.jobs, job], error: null })),
    on(JobActions.addJobFailure, (state, { error }) => ({ ...state, error })),
    on(JobActions.updateJobSuccess, (state, { job }) => ({
        ...state,
        jobs: state.jobs.map((j) => (j.id === job.id ? { ...j, ...job } : j)),
        error: null,
    })),
    on(JobActions.updateJobFailure, (state, { error }) => ({ ...state, error })),
    on(JobActions.deleteJobSuccess, (state, { jobId }) => ({
        ...state,
        jobs: state.jobs.filter((j) => j.id !== jobId),
        error: null,
    })),
    on(JobActions.deleteJobFailure, (state, { error }) => ({ ...state, error }))
);