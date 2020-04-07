import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtikalViewComponent } from './artikal-view/artikal-view.component';
import { ArtikalDetailComponent } from './artikal-detail/artikal-detail.component';
import { ArtikalAddComponent } from './artikal-add/artikal-add.component';
import { StavkaRacunViewComponent } from './stavka-racun-view/stavka-racun-view.component';
import { StavkaRacunDetailComponent } from './stavka-racun-detail/stavka-racun-detail.component';
import { StavkaRacunAddComponent } from './stavka-racun-add/stavka-racun-add.component';
import { RacunViewComponent } from './racun-view/racun-view.component';
import { RacunDetailComponent } from './racun-detail/racun-detail.component';
import { RacunAddComponent } from './racun-add/racun-add.component';

const routes: Routes = [{ path: '', redirectTo: '/artikli', pathMatch: 'full' },
{ path: 'artikli', component: ArtikalViewComponent },
{ path: 'addA', component: ArtikalAddComponent },
{ path: 'addR', component: RacunAddComponent },
{ path: 'artikli/:id', component: ArtikalDetailComponent },
{ path: 'racuniStavke', component:  StavkaRacunViewComponent },
{ path: 'racuni', component: RacunViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
