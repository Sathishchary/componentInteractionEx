import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReferenceService {

	public allSubjectInfo: any;
    constructor(private http: HttpClient) { }

    getAllEmployees(): Observable<any> {
        try {
           return this.http.get('assets/subjects.json'); // web service API. its pointing to http://localhost:4200/assets/service.json
        } catch (error) { console.log(error); }
    }
  }
