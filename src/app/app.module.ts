import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArtikalViewComponent } from './artikal-view/artikal-view.component';
import { ArtikalDetailComponent } from './artikal-detail/artikal-detail.component';
import { ArtikalAddComponent } from './artikal-add/artikal-add.component';
import { StavkaRacunViewComponent } from './stavka-racun-view/stavka-racun-view.component';
import { StavkaRacunDetailComponent } from './stavka-racun-detail/stavka-racun-detail.component';
import { StavkaRacunAddComponent } from './stavka-racun-add/stavka-racun-add.component';
import { RacunViewComponent } from './racun-view/racun-view.component';
import { RacunDetailComponent } from './racun-detail/racun-detail.component';
import { RacunAddComponent } from './racun-add/racun-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtikalViewComponent,
    ArtikalDetailComponent,
    ArtikalAddComponent,
    StavkaRacunViewComponent,
    StavkaRacunDetailComponent,
    StavkaRacunAddComponent,
    RacunViewComponent,
    RacunDetailComponent,
    RacunAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
