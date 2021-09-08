import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {


  constructor(
    // Inject http service 
    private http: HttpClient
  ) { }

  getRepoData(username: string): Observable<any> {
    const fullEndpoint = `https://api.github.com/users/${username}/repos`;
    return this.http.get(fullEndpoint);
  }
}
