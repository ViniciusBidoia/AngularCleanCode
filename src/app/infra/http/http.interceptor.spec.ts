import { TestBed } from '@angular/core/testing';

import { HttpInterceptor as HttpInterceptor } from './http.interceptor';

describe('HttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpInterceptor = TestBed.inject(HttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
