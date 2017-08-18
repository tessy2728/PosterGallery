import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import { Club } from './Club';

@Injectable()
export class ClubService {
    private clubURL = 'https://coachco.strivefar.com/api/clubs?all=true';
    constructor(private _http: Http){} 
    getClubsList(): Observable<Club[]> {
        return this._http.get(this.clubURL) 
        .map((response: Response) => <Club[]> response.json()) 
        .do(data => console.log(JSON.stringify(data)));
    }
}