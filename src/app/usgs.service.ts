import { Injectable } from '@angular/core';
import { Quake,UsgsResponse } from './quake';

import { Observable, of, EMPTY } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsgsService {

  constructor(private http: HttpClient) { }

  fetchQuakes(lat: number, lng: number): Observable<Quake[]> {
    return this.fetchQuakesReal(lat, lng);
  }

  fetchQuakesReal(lat: number, lng: number): Observable<Quake[]> {
    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?latitude=${lat}&longitude=${lng}&maxradiuskm=50&format=geojson`;
    return this.http.get<UsgsResponse>(url)
                    .pipe(
                      map(res => this.responseToQuakes(res),
                      catchError( (err) => {
                        console.error("Request failed");
                        return EMPTY;
                      })
                    ));
  }

  responseToQuakes(resp: UsgsResponse): Quake[] {
    const result: Quake[] = [];
    for (let feature of resp.features) {
      result.push(feature.properties)
    }
    return result;
  }

  fetchQuakesDummy(lat: number, lng: number): Observable<Quake[]> {
    console.log(`Fetching quakes for location (${lat}, ${lng})`);
    const result: Quake[] = [{
      mag: 0.42,
      place: "Foo",
      time: 10000,
      url: "https://www.sfsu.edu"
    }];
    return of(result);
  }
}
