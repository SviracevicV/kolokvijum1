import { Component, OnInit } from '@angular/core';
import { Artikal } from '../artikal';
import { ArtikalService } from '../artikal.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-artikal-add',
  templateUrl: './artikal-add.component.html',
  styleUrls: ['./artikal-add.component.css']
})
export class ArtikalAddComponent implements OnInit {

  artikli: Artikal[];

  artikal: Artikal = new Artikal();

  private artikliUrl = "http://localhost:3000/add/";

  constructor(
    private artikalService: ArtikalService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getArtikal()
  }
  getArtikal(): void{
    this.artikalService.getArtikli()
    .subscribe(artikli => this.artikli = artikli);
  }

  onSubmit(): void{
    this.artikalService.addArtikal(this.artikal).subscribe(X => this.getArtikal());
  }

}

