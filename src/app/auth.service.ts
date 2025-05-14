import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 

export class AuthService {
private apiUrl='http://localhost:8090/'
  constructor(private http:HttpClient) {  
  
  } 
  login(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+'user/login', userData);
  }
}
