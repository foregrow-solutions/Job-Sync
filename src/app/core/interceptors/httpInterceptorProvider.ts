import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLoggingInterceptor } from './http-logging.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';

export const httpInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpLoggingInterceptor, multi: true },
];
