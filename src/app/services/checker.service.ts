import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Checker } from '../models/checker.model';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const baseUrlSearch = 'https://jsonplaceholder.typicode.com/comments';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Checker[]> {
    return this.http.get<Checker[]>(baseUrl);
  }

  get(id: any): Observable<Checker> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByPostId(postId: any): Observable<Checker[]> {
    return this.http.get<Checker[]>(`${baseUrlSearch}?postId=${postId}`);
  }
}
