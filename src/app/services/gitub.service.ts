import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, userResponse } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitubService {

  constructor(private http : HttpClient) { }

  getUsers(name: string, longitud:number) {
    return this.http.get<any>(`${environment.URL_API}?q=${name}&per_page=${longitud}`)
  }

  getUserByLogin(login:string | null):Observable<any>{
    return this.http.get<any>(`${environment.URL_API_USER}/${login}`)
  }

}
