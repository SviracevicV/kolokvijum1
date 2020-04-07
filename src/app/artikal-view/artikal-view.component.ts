import { Component, OnInit } from '@angular/core';
import {Artikal} from '../artikal'
import {ArtikalService} from '../artikal.service'
@Component({
  selector: 'app-artikal-view',
  templateUrl: './artikal-view.component.html',
  styleUrls: ['./artikal-view.component.css']
})
export class ArtikalViewComponent implements OnInit {

  artikli: Artikal[];

  constructor(
    private artikalService: ArtikalService
  ) { }

  ngOnInit() {
    this.getArtikli();
  }

  getArtikli(): void{
    this.artikalService.getArtikli()
    .subscribe(artikli => this.artikli = artikli);
  }
  onDelete(artikal:Artikal) {
    
    this.artikli = this.artikli.filter(s => s.id !== artikal.id);
    // Remove from server
    this.artikalService.deleteArtikal(artikal).subscribe();
  }
}
