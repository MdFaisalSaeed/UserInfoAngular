import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrl = 'https://localhost:7043';

  constructor(private http: HttpClient) { }

  getUserInfo(userModel:UserModel){
   const headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
   const body=JSON.stringify(userModel);
    return this.http.post<any>(`${this.apiUrl}/RandomUser`,body,headers);
  }
}
