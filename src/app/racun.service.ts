import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Racun } from './racun';
import { stavkaRacun} from './stavkaRacuna';
import { Artikal} from './artikal'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class RacunService {

  private racuniUrl = "http://localhost:3000/racun/";
  private stavkeUrl = "http://localhost:3000/stavkaRacuna/";
  stavkaRacuna : stavkaRacun = new stavkaRacun();

  constructor(
    private http: HttpClient
  ) { }

  getRacuni(): Observable<Racun[]>{
    return this.http.get<Racun[]>(this.racuniUrl);
  }

  getRacun(id: number): Observable<Racun>{
    return this.http.get<Racun>(this.racuniUrl + id)
  }
  addRacun(racun:Racun):Observable<Racun> {
    return this.http.post<Racun>(this.racuniUrl, racun, httpOptions);
  }
  getStavkaRacun(): Observable<stavkaRacun[]>{
    return this.http.get<stavkaRacun[]>(this.stavkeUrl);
  }
  addStavkaRacun(artikal: Artikal, racun: Racun){
    this.stavkaRacuna.artikalId = artikal.id;
    this.stavkaRacuna.racunId = racun.id;
    this.stavkaRacuna.cena=artikal.cena;
    return this.http.post(this.racuniUrl, this.stavkaRacuna, httpOptions);
  }
 deleteRacun(racun:Racun):Observable<Racun> {
  const url = `${this.racuniUrl}/${racun.id}`;
  return this.http.delete<Racun>(url, httpOptions);
}
deleteStavkaRacun(stavkaRacun:stavkaRacun):Observable<stavkaRacun> {
  const url = `${this.stavkeUrl}/${stavkaRacun.id}`;
  return this.http.delete<stavkaRacun>(url, httpOptions);
}
}