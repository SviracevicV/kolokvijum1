
import { Component, OnInit } from '@angular/core';
import { Racun } from '../racun';
import { RacunService } from '../racun.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-racun-add',
  templateUrl: './racun-add.component.html',
  styleUrls: ['./racun-add.component.css']
})
export class RacunAddComponent implements OnInit {
  racuni: Racun[];

  racun: Racun = new Racun();

  private racuniUrl = "http://localhost:3000/add/";

  constructor(
    private racunService: RacunService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getRacun()
  }
  getRacun(): void{
    this.racunService.getRacuni()
    .subscribe(racuni => this.racuni = racuni);
  }

  onSubmit(): void{
    this.racunService.addRacun(this.racun).subscribe(X => this.getRacun());
  }

}