import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: string = localStorage.getItem('token');

    if (request.headers.get("skip"))  {
      const newHeaders = request.headers.delete('skip')
      const newRequest = request.clone({ headers: newHeaders });
      return next.handle(newRequest);
    }

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    return next.handle(request).pipe(
      catchError( this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    console.log("OOPS")
    return throwError('');
  }
}
