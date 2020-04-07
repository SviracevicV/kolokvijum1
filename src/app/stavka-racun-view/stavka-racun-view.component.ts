import { Component, OnInit } from '@angular/core';
import { Artikal } from '../artikal';
import { Racun } from '../racun';
import { ArtikalService } from '../artikal.service';
import { RacunService } from '../racun.service';
import { stavkaRacun } from '../stavkaRacuna';
@Component({
  selector: 'app-stavka-racun-view',
  templateUrl: './stavka-racun-view.component.html',
  styleUrls: ['./stavka-racun-view.component.css']
})
export class StavkaRacunViewComponent implements OnInit {

  artikal: Artikal;
  racun: Racun;

  artikli: Artikal[];
  racuni: Racun[];
  stavkaRacuna: stavkaRacun[];
  private stavkaUrl = "http://localhost:3000/stavkeRacuna/";
  constructor(
    private artikalService:ArtikalService,
    private racunService: RacunService
  ) { }

  ngOnInit() {
    this.getArtikal();
    this.getRacun();
    this.getStavkeRacuna();
  }
  getArtikal(): void{
    this.artikalService.getArtikli()
    .subscribe(artikli => this.artikli = artikli);
  }

  getRacun(): void{
    this.racunService.getRacuni()
    .subscribe(racuni => this.racuni = racuni);
  }
  getStavkeRacuna(): void{
    this.racunService.getStavkaRacun()
    .subscribe(stavkaRacun => this.stavkaRacuna = stavkaRacun);
  }

  onSubmit(): void{
    this.racunService.addStavkaRacun(this.artikal, this.racun).subscribe(X => this.getStavkeRacuna());
  }

}
