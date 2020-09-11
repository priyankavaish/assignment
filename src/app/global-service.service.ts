import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
endpoint_url = `https://api.spaceXdata.com`;
  constructor(private http: HttpClient, private router: Router,) { }

  getAllData(data): Observable<any>{
  	return this.http.get<any>(this.endpoint_url +'/v3/launches?limit=100', data)
}
}
