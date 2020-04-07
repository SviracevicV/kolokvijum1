import { Component, OnInit } from '@angular/core';
import { Racun} from '../racun';
import { RacunService } from '../racun.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-racun-view',
  templateUrl: './racun-view.component.html',
  styleUrls: ['./racun-view.component.css']
})
export class RacunViewComponent implements OnInit {

  racuni: Racun[];

  constructor(
    private racunService: RacunService
  ) { }

  ngOnInit() {
    this.getRacuni();
  }

  getRacuni(): void{
    this.racunService.getRacuni()
    .subscribe(racuni => this.racuni = racuni);
  }
  onDelete(racun:Racun) {
    
    this.racuni = this.racuni.filter(s => s.id !== racun.id);
    // Remove from server
    this.racunService.deleteRacun(racun).subscribe();
  }
}
