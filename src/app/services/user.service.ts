import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreService } from './user-store.service';
import { Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string;
  constructor(private http: HttpClient, private userStore: UserStoreService, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    console.log('APP BASE HREF', origin);
    this.baseUrl = `${origin}/api/user/`;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl+'login', {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      return resp;
    }));
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl+'register', {
      username: username,
      password: password
    });
  }
}
